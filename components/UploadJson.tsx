"use client";

import { uploadJSON } from "@/actions/uploadJSON";
import { useState } from "react";
import toast from "react-hot-toast";
import ButtonSubmit from "./ButtonSubmit";

export default function UploadJson() {
  const [fileHash, setFileHash] = useState("");

  const submit = async (formData: FormData) => {
    try {
      const result = await uploadJSON(formData);
      if (result.success) {
        toast.success(result.message);
        setFileHash(result?.data ?? "");
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
    <>
    <form
      className="form-control w-full"
      action={submit}
    >
      <label className="label">
        <span className="label-text">JSON</span>
      </label>
      <textarea
        aria-label="JSON"
        name="json"
        className="textarea textarea-bordered h-40"
        required
        placeholder="Put your JSON here"
      />
      <ButtonSubmit
        className="mt-4 btn btn-primary"
        title="Upload"
      />
    </form>
    {fileHash && (
        <p className="mt-4">
            File hash: {fileHash}
        </p>
    )}
    </>
  );
}
