import Navigation from "@/components/navigation";
import Link from "next/link";

export default function CancellationPage() {
  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Условия отмены
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Правила отмены и возвратов
          </h1>
        </header>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3 max-w-3xl">
          <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
            <li>отмена в течении 24 часов с момента оплаты- полный возврат предоплаты</li>
            <li>отмена более чем за 15 дней до старта тура - возврат предоплаты за вычетом  50% от стоимости тура</li>
            <li>отмена более чем за 1 день до старта тура - возврат предоплаты за вычетом 90% от стоимости тура</li>
            <li>отмена менее чем за 1 день до старта тура- предоплата не возвращается</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
        >
          Вернуться на главную
        </Link>
      </section>
    </main>
  );
}
