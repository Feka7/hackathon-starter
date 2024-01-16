import Owner from "@/components/contracts/Owner";
import Storage from "@/components/contracts/Storage";

export default function Page() {
  return (
    <main className="flex flex-col space-y-8 w-full mt-6">
      <div className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Storage</h3>
          <Storage />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Owner</h3>
          <Owner />
        </div>
      </div>
    </main>
  );
}
