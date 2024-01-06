"use client";

import ButtonSubmit from "./ButtonSubmit";
import toast from "react-hot-toast";
import { uploadFile } from "@/actions/uploadFile";
import { useState } from "react";

export default function UploadFile() {
  const [fileHash, setFileHash] = useState("");

  const submit = async (formData: FormData) => {
    try {
      const result = await uploadFile(formData);
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
        <span className="label-text">File</span>
      </label>
      <input
        aria-label="File"
        name="target"
        type="file"
        className="file-input file-input-bordered w-full"
        required
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
