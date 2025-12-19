import Navigation from "@/components/navigation";
import Link from "next/link";

export default function ParticipationPage() {
  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Форматы участия
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Выбирайте комфортный формат ретрита
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Поможем подобрать вариант проживания и участия под ваши задачи —
            от уединённого отдыха до более насыщенного взаимодействия с мастерами.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Базовый</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Проживание в отелях программы</li>
              <li>Завтраки, трансферы, паромы</li>
              <li>Участие во всех общих практиках</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Премиум</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Повышенная категория номеров</li>
              <li>Индивидуальные сессии с мастерами</li>
              <li>Расширенный трансфер и гибкий график</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Индивидуально</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Персональная программа под запрос</li>
              <li>Дополнительные консультации</li>
              <li>Поддержка куратора 24/7</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3 max-w-3xl">
          <h3 className="text-xl font-semibold">Как выбрать</h3>
          <p className="text-white/90 leading-relaxed">
            Напишите нам в Telegram — подберём формат и расскажем детали по датам,
            проживанию и перелётам.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide">
            <a
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:border-white/40 hover:bg-white/20"
              href="https://t.me/Shavasanaaaa"
              target="_blank"
              rel="noreferrer"
            >
              @Shavasanaaaa
            </a>
            <a
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:border-white/40 hover:bg-white/20"
              href="https://t.me/marie_serebryakova"
              target="_blank"
              rel="noreferrer"
            >
              @marie_serebryakova
            </a>
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
