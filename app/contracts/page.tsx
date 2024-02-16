import Owner from "@/components/contracts/Owner";

export default function Page() {
  return (
    <main className="flex flex-col space-y-8 w-full mt-6">
      <div className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Owner</h3>
          <Owner />
        </div>
      </div>
    </main>
  );
}
