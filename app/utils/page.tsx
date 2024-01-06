import SendTransaction from "@/components/SendTransaction";
import { SignMessage } from "@/components/SignMessage";

export default function Page() {
  return (
    <main className="flex flex-col space-y-8 w-full mt-6">
      <div className="flex flex-col space-y-8">
        <div>
          <h3 className="text-2xl font-semibold">Send transaction</h3>
          <SendTransaction />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Sign message</h3>
          <SignMessage />
        </div>
      </div>
    </main>
  );
}
