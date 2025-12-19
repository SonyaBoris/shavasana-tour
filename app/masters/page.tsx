import Navigation from "@/components/navigation";
import Link from "next/link";

export default function MastersPage() {
  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="site-container pt-32 pb-16 space-y-8">
        <header className="space-y-3 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.08em] text-white/60">
            Мастера
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Команда, которая ведёт вглубь и бережно поддерживает
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Опытные преподаватели йоги, фасилитаторы и проводники, которые
            создают пространство безопасности и осознанности.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-2xl font-semibold">Михаил Седов</h3>
            <p className="text-white/90 leading-relaxed">
              Основатель выездных ретритов, мастер духовных практик. Ведёт
              индивидуальные консультации, общие встречи и мягкие практики
              присутствия.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-2xl font-semibold">Наталия Владимировна Беляускене</h3>
            <p className="text-white/90 leading-relaxed">
              Ко-организатор ретрита, наставник и фасилитатор процессов. Помогает
              участникам раскрыть ресурс через диалог и практики осознанности.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-2xl font-semibold">Юлия Борисова</h3>
            <p className="text-white/90 leading-relaxed">
              Преподаватель йоги и дыхательных практик. Утренняя практика и
              движение с заботой о теле на берегу океана.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-3">
            <h3 className="text-2xl font-semibold">Мария Серебрякова</h3>
            <p className="text-white/90 leading-relaxed">
              Ведущая трансформационной игры «Лила». Помогает мягко увидеть
              глубинные запросы и интегрировать инсайты.
            </p>
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
