import { Siwe } from "@/components/Siwe";
import UploadFile from "@/components/UploadFile";
import UploadJson from "@/components/UploadJson";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex flex-col w-full space-y-8 mt-6">
      <div className="flex flex-col space-y-6">
        <h3 className="text-2xl font-semibold">Private section</h3>
        <p>Sign-in to unlock the private features</p>
        <Siwe />
      </div>
      <div className="flex flex-col space-y-6">
        <p>
          Your id: {session ? session.user?.name : "Sign-in to view your id"}
        </p>
      </div>
      <div className="flex flex-col space-y-6 mt-12">
        <h3 className="text-2xl font-semibold">Upload file to IPFS</h3>
        {session ? <UploadFile /> : <p>Sign-in to upload file</p>}
      </div>
      <div className="flex flex-col space-y-6">
        <h3 className="text-2xl font-semibold">Upload JSON to IPFS</h3>
        {session ? <UploadJson /> : <p>Sign-in to upload JSON</p>}
      </div>
    </main>
  );
}
