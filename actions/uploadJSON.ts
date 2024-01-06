"use server";

import { authOptions } from "@/lib/auth";
import pinata from "@/lib/pinata";
import { getServerSession } from "next-auth";
import { z } from "zod";

const jsonStringSchema = z.string().refine(
  (data) => {
    try {
      JSON.parse(data);
      return true;
    } catch (e) {
      return false;
    }
  },
  {
    message: "Invalid JSON format",
  }
);

export async function uploadJSON(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return {
        success: false,
        message: "User is not autenticathed",
      };
    const { json } = Object.fromEntries(formData);
    const validationResult = jsonStringSchema.safeParse(json);
    if (!validationResult.success) {
      return {
        success: false,
        message: validationResult.error.message,
      };
    }
    const result = await pinata.pinJSONToIPFS(JSON.parse(validationResult.data), {
      pinataMetadata: {
        name: "starter-"+new Date().toISOString(),
      },
    });

    return {
      success: true,
      message: "JSON uploaded",
      data: result.IpfsHash,
    };
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return {
        success: false,
        message: e.message,
      };
    } else {
      return {
        success: false,
        message: "Unknow error",
      };
    }
  }
}
