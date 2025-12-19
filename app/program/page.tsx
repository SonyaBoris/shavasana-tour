import Link from "next/link";
import Navigation from "@/components/navigation";

export default function ProgramPage() {
  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Программа ретрита
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            День за днём: ритм замедления, практик и красоты островов
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Йога на рассвете, путешествия по островам без суеты, глубокие
            практики и пространство заботы — каждая часть программы выстроена
            так, чтобы поддерживать состояние перезагрузки.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Утро</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Йога и дыхание на рассвете у океана</li>
              <li>Созерцательные прогулки по воде</li>
              <li>Долгие завтраки и общение в кругу</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">День</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Экскурсии и треккинги без спешки</li>
              <li>Снорклинг и время на лучших пляжах</li>
              <li>Практики и беседы с мастерами</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-xl font-semibold">Вечер</h3>
            <ul className="list-disc marker:text-white/70 pl-5 space-y-2 text-white/90">
              <li>Ритуалы заката и звукотерапия</li>
              <li>Игра «Лила» и мягкие практики</li>
              <li>Свободное время для интеграции</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-4 max-w-4xl">
          <h3 className="text-xl font-semibold">Формат</h3>
          <p className="text-white/90 leading-relaxed">
            Мы оставляем пространство для живого потока. Программа адаптируется
            под группу, погоду и состояние участников, чтобы каждый день был
            поддерживающим и наполненным.
          </p>
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
