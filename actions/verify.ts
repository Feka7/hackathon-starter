"use server";

import { z } from "zod";
import { verifyMessage, isAddress, isHex } from "viem";

const verifyMessageSchema = z.object({
  address: z.string().transform((val) => {
    if (!isAddress(val)) {
      throw new Error("Invalid address");
    }
    return val;
  }),
  message: z.string(),
  signature: z.string().transform((val) => {
    if (!isHex(val)) {
      throw new Error("Invalid address");
    }
    return val;
  }),
});

export async function verify(message: string, signature: string, address: string) {
  try {
    const validationResult = verifyMessageSchema.safeParse({
      address,
      message,
      signature,
    });
    if (!validationResult.success) {
      return {
        success: false,
        message: validationResult.error.message,
      };
    }
    const valid = await verifyMessage({
      address: validationResult.data.address,
      message: validationResult.data.message,
      signature: validationResult.data.signature,
    });
    if(!valid) {
        return {
            success: false,
            message: "Invalid signature",
        };
    }
    return { success: true, message: "Valid signature" };
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
