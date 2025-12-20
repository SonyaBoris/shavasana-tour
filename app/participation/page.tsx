import Navigation from "@/components/navigation";
import Link from "next/link";

export default function ParticipationPage() {
  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Варианты участия
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Тарифы</h1>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Оптимальный</h3>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Размещение в двухместном номере по 2 человека.</li>
              <li>Все что входит в программу  включено.</li>
              <li>Покупка билетов и виза оформляются самостоятельно</li>
              <li>При внесении 50% предоплаты до 10 января</li>
              <li>Цена: 2875 $ (примерно 230 000 рублей , оплата по курсу цб+3%)</li>
              <li>При внесении предоплаты до 10 февраля</li>
              <li>цена тура 3000 $</li>
              <li>( оплата по курсу цб+3%)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Комфорт</h3>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Размещение одноместное</li>
              <li>Все что входит в программу включено.</li>
              <li>Покупка билетов и виза оформляются самостоятельно</li>
              <li>Если необходимо, то даем контакт для оформления визы.</li>
              <li>При внесении 50% оплаты до 10 января</li>
              <li>4750$ ( примерно 380 000 рублей , оплата по курсу цб+3%)</li>
              <li>При внесении 50% оплаты до 10 февраля</li>
              <li>4900 $ ( оплата по курсу цб+3%)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Вип тариф</h3>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Вам не придется искать билеты и оформлять визу!</li>
              <li>Мы все сделаем за вас</li>
              <li>Одноместное размещение!</li>
              <li>Покупка билетов</li>
              <li>Оформление визы</li>
              <li>5875 $ ( оплата по курсу цб+3%)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
          <h3 className="text-xl font-semibold">Мега предложение</h3>
          <p className="text-white/90 leading-relaxed">
            При внесении предоплаты
            20-23 декабря, самая вкусная цена:
          </p>
          <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
            <li>Оптимальный- 2600$</li>
            <li>Комфорт-4400$</li>
            <li>Вип-5500$</li>
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
