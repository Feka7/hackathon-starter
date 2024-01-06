"use client";

import { useFormStatus } from "react-dom";
import { useAccount } from "wagmi";
export default function ButtonSubmit({
  className,
  connected,
  title,
}: {
  className?: string;
  connected?: boolean;
  title: string;
}) {
  const { pending } = useFormStatus();
  const { isDisconnected } = useAccount();
  const disabled = pending || (connected ? isDisconnected : false);
  return (
    <button
      type="submit"
      className={className ? className : "btn"}
      disabled={disabled}
    >
      {pending ? <span className="loading"></span> : title}
    </button>
  );
}
