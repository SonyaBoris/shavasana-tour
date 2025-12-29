import Link from "next/link";
import bgImage from "@/public/fon4.jpg";

export default function ParticipationPage() {
  const cardBase =
    "rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur shadow-xl space-y-4 flex flex-col h-full";
  const pricePill =
    "inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-white/90";
  const pricePillVip =
    "inline-flex items-center rounded-full border border-amber-200/60 bg-black/25 px-3 py-1 text-sm font-semibold text-amber-50";

  return (
    <main className="relative min-h-[80vh] bg-cover bg-fixed bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage.src})` }}>

      <div className="absolute inset-0 bg-gradient-to-b from-[#05090f]/85 via-[#0a1f26]/70 to-[#0d1d22] pointer-events-none" />
      <section className="relative z-10 site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Варианты участия
          </p>
          <h1 className="text-4xl font-semibold leading-tight">Тарифы</h1>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-1 xl:grid-cols-2">
          <div className={cardBase}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">Эконом</h3>
              <span className={pricePill}>1950–2100 $</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Отели 2-3*, вторая линия недалеко от основных.</li>
              <li>Дополнительные активности не включены, их можно оплатить на месте.</li>
              <li>Все мероприятия проходят на пляжах и на территории 5* отелей.</li>
              <li>Размещение в этих отелях одноместное.</li>
            </ul>
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">Включено</p>
              <ul className="space-y-2 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                <li>Все перемещения на паромах и трансфер.</li>
                <li>Один общий завтрак на Хэвлоке и два праздничных ужина.</li>
                <li>На острове Нил завтрака в отеле нет.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">Стоимость</p>
              <ul className="space-y-2 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                <li>При бронировании до 10 января — 1950 $.</li>
                <li>При бронировании до 10 февраля — 2100 $.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-white">Семейный или подружки</p>
                <span className={pricePill}>1700–1900 $</span>
              </div>
              <ul className="space-y-2 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                <li>Одна большая кровать на двоих, опции включены как в тарифе Эконом.</li>
                <li>До 10 января — 1700 $ на человека.</li>
                <li>До 10 февраля — 1900 $ на человека.</li>
              </ul>
            </div>
          </div>

          <div className={cardBase}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">Оптимальный</h3>
              <span className={pricePill}>2875–3000 $</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Размещение в двухместном номере по 2 человека.</li>
              <li>Все что входит в программу включено.</li>
              <li>Покупка билетов и виза оформляются самостоятельно.</li>
            </ul>
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">Стоимость</p>
              <ul className="space-y-2 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                <li>При внесении 50% предоплаты до 10 января — 2875 $ (примерно 230 000 рублей, оплата по курсу ЦБ+3%).</li>
                <li>При внесении предоплаты до 10 февраля — 3000 $ (оплата по курсу ЦБ+3%).</li>
              </ul>
            </div>
          </div>

          <div className={`${cardBase} bg-white/8`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">Комфорт</h3>
              <span className={pricePill}>4750–4900 $</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
              <li>Размещение одноместное.</li>
              <li>Все что входит в программу включено.</li>
              <li>Покупка билетов и виза оформляются самостоятельно.</li>
              <li>Если необходимо, то даем контакт для оформления визы.</li>
            </ul>
            <div className="space-y-2">
              <p className="text-base font-semibold text-white">Стоимость</p>
              <ul className="space-y-2 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                <li>При внесении 50% оплаты до 10 января — 4750 $ (примерно 380 000 рублей, оплата по курсу ЦБ+3%).</li>
                <li>При внесении 50% оплаты до 10 февраля — 4900 $ (оплата по курсу ЦБ+3%).</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-300/50 bg-gradient-to-br from-amber-500/25 via-amber-400/20 to-amber-700/20 p-6 sm:p-7 backdrop-blur shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)] space-y-4 flex flex-col h-full ring-2 ring-amber-200/50">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">Вип тариф</h3>
              <span className={pricePillVip}>5875 $</span>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-amber-100 pl-5">
              <li>Вам не придется искать билеты и оформлять визу.</li>
              <li>Полное сопровождение — делаем все за вас.</li>
              <li>Одноместное размещение.</li>
              <li>Покупка билетов и оформление визы включены.</li>
            </ul>
          </div>
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
