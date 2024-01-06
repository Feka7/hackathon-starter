"use server";

import { authOptions } from "@/lib/auth";
import pinata from "@/lib/pinata";
import { getServerSession } from "next-auth";
import { Readable } from "stream";

function fileToReadableStream(file: Buffer): Readable {
  const stream = new Readable();
  stream.push(file);
  stream.push(null);
  return stream;
}

export async function uploadFile(formData: FormData) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return {
        success: false,
        message: "User is not autenticathed",
      };
    const { target } = Object.fromEntries(formData);
    const file: File | null = target as unknown as File;
    if (file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const readableStream = fileToReadableStream(buffer);
      const result = await pinata.pinFileToIPFS(readableStream, {
        pinataMetadata: {
          name: file.name,
        },
      });
      return {
        success: true,
        message: "File uploaded",
        data: result.IpfsHash,
      };
    }
    return {
      success: false,
      message: "File is empty",
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
