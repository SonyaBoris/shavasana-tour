import Link from "next/link";

const Program = () => {
    return (
        <section className="bg-[#0d1d22] text-white">
            <div className="site-container py-16 space-y-10">
                <header className="space-y-3 max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.08em] text-white/60">Программа ретрита</p>
                    <h2 className="text-3xl font-semibold leading-tight">12 дней островной перезагрузки на Андаманах</h2>
                    <p className="text-lg leading-relaxed text-white/80">Йога на рассвете, море, джунгли и терапевтические практики с командой мастеров — всё, чтобы замедлиться, перезагрузиться и вдохнуть по-новому.</p>
                </header>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold">В программе</h3>
                        <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                            <li>Общие встречи и индивидуальные консультации с Михаилом Седовым</li>
                            <li>Утренняя йога, дыхательные практики и ритуалы заката у океана</li>
                            <li>Трекинг по джунглям и снорклинг на лучших пляжах Азии</li>
                            <li>Трансформационная игра «Лила» и групповая поддержка</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold">Что входит</h3>
                        <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                            <li>Перемещения по островам на пароме, трансферы и отели Порт Блэр, Хэвлок, Нил</li>
                            <li>Завтраки, занятия йогой, консультации и ежедневные брифинги</li>
                            <li>Полноценная игра «Лила» с Марией Серебряковой</li>
                            <li>Совместные треккинги, гала-ужин и сопровождение русско- и англоязычных гидов</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold">Не включено</h3>
                        <ul className="space-y-3 text-base leading-relaxed text-white/85 list-disc marker:text-white/70 pl-5">
                            <li>Перелёты: Москва - Дели - Москва, Дели - Порт Блэр - Дели</li>
                            <li>Одноместное размещение (по запросу)</li>
                            <li>Обеды и ужины</li>
                            <li>Страховка, виза и индивидуальные консультации</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Link
                        href="/program"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
                    >
                        Посмотреть программу подробнее
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Program;
