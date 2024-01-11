"use client";
import { verify } from "@/actions/verify";
import toast from "react-hot-toast";
import { useAccount, useSignMessage } from "wagmi";
import ButtonSubmit from "./ButtonSubmit";

export function SignMessage() {
  
  const { address } = useAccount();
  const { data: signMessageData, error, signMessageAsync } = useSignMessage();

  const submit = async (formData: FormData) => {
    try {
      if (!address) {
        throw new Error("Please connect wallet");
      }
      const message = formData.get("message");
      if (typeof message !== "string") {
        throw new Error("Message must be a string");
      }
      const signMessageData = await signMessageAsync({ message });
      const result = await verify(message, signMessageData, address);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        toast.error(e.message);
      }
      else {
        toast.error("Unknown error");
      }
    }
  };

  return (
    <form action={submit} className="form-control w-full">
      <label htmlFor="message" className="label">
        <span className="label-text">
          Enter a message to sign and verify it by backend
        </span>
      </label>
      <textarea
        id="message"
        name="message"
        className="textarea textarea-bordered h-24"
        placeholder="The quick brown fox…"
        required
      />
      <ButtonSubmit
        connected={true}
        className="mt-4 btn btn-primary"
        title="Verify"
      />
      {signMessageData && address && (
        <div>
          <div>Signature: {signMessageData}</div>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </form>
  );
}
