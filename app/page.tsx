import Main from "@/components/main";
import Program from "@/components/program";
import Invitation from "@/components/invitation";

export default function Home() {
  return (
    <main className="bg-[#0d1d22] text-white">
      <Main />
      <Program />
      <Invitation />
    </main>
  );
}
