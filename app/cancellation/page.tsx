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
            Прозрачно и спокойно: правила отмены и возвратов
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Мы заботимся о комфорте участников и стараемся предусмотреть разные
            ситуации. Ознакомьтесь с условиями, чтобы планировать поездку без
            стресса.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Отмена по инициативе участника</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>За 45+ дней до выезда — возврат за вычетом невозвратных билетов/броней.</li>
              <li>За 30–45 дней — возврат 50% стоимости пакета.</li>
              <li>Менее 30 дней — оплата не возвращается, но можно передать место другу.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Если тур переносится</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>При форс-мажорах (погода, ограничения) предложим новые даты или полный возврат.</li>
              <li>Все бронования переносим и сопровождаем по новым датам.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3 max-w-3xl">
          <h3 className="text-xl font-semibold">Дополнительно</h3>
          <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
            <li>Авиабилеты приобретаются отдельно; условия возврата зависят от тарифа авиакомпании.</li>
            <li>Рекомендуем оформить страховку с покрытием отмены поездки.</li>
            <li>Поможем с заменой участника в случае переноса места.</li>
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
