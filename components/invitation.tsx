import Link from "next/link";

const Invitation = () => {
    return (
        <section className="bg-[#0d1d22] text-white">
            <div className="site-container py-16 space-y-10">
                <header className="space-y-3 max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.08em] text-white/60">Приглашение от организаторов</p>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Путешествие, которое меняет ощущение отдыха</h2>
                    <p className="text-lg leading-relaxed text-white/80">Мы прожили этот опыт сами и хотим подарить его вам: ритм без спешки, забота о каждом и ощущение, что весь мир помогает замедлиться.</p>
                </header>

                <div className="space-y-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur shadow-xl text-white/90 leading-relaxed overflow-hidden">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start">
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg md:w-[38%] lg:w-[34%]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/organizators.jpg"
                                    alt="Организаторы ретрита"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="space-y-4 md:w-[62%] lg:w-[66%]">
                                <p>Приглашаем тебя в путешествие, которое однажды полностью изменило наше ощущение отдыха. Мы хотим поделиться с тобой тем опытом, который прожили сами и который теперь очень хочется подарить другим.</p>
                                <p>Мы привыкли бежать. И даже на отдыхе продолжаем бежать: «А дайте нам ещё одно развлечение», «А что у нас дальше по программе?», «А сколько локаций мы успеем за день?»</p>
                                <p>В нашем путешествии всё было иначе. Не нужно было никуда спешить и ни из чего выбирать. Мы просто делали то, что хотим, были в потоке и наслаждались этим состоянием.</p>
                                <p>Мы гуляли, посещали разные места без суеты и без ощущения, что «за день нужно всё успеть». Утром просыпались на рассвете и шли по кристально чистой воде просто шли и чувствовали, что мы здесь.</p>
                                <p>Завтракали на берегу океана - долго, вкусно, спокойно, проживая каждый момент. Представляли этот остров как маленькую точку на карте и осознавали: мы именно в этой точке мира. И это - кайф.</p>
                                <p>Мы жили в Barefoot resort, где всё продумано до мелочей и отношение к гостю мягко восстанавливает чувство собственной ценности. Здесь искренне заботятся и стараются исполнить каждое желание - это становится частью глубокой перезагрузки.</p>
                                <p>Именно этот опыт мы хотим подарить тебе. И приглашаем тебя поехать с нами и с уникальными мастерами в Премиум ретрит на Андаманские острова, где мы создадим пространство настоящей встречи с собой.</p>
                                <p>Как организаторы выездных ретритов и мастера духовных практик мы хорошо видим разницу между «красивым отдыхом» и настоящей трансформацией. Поэтому тур мы собираем не как туристическую программу, а как пространство состояния.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#123240]/80 via-[#0f1f2b]/90 to-[#0a121a] p-6 md:p-7 shadow-xl space-y-4">
                            <h3 className="text-xl font-semibold">Кому это откликается</h3>
                            <p className="text-base leading-relaxed text-white/90">Если устал бежать и контролировать всё подряд, хочешь по-новому прожить отдых и просто быть в потоке - это путешествие для тебя.</p>
                            <p className="text-base leading-relaxed text-white/90">Здесь не нужно «что-то из себя делать» - можно просто быть. В этом состоянии и происходит самое важное.</p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur shadow-xl">
                            <h3 className="mb-4 text-xl font-semibold">Что будет в этом путешествии</h3>
                            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                                <li>Йога на восходе у океана</li>
                                <li>Прогулки по воде и острову без спешки</li>
                                <li>Завтраки в прекрасной компании</li>
                                <li>Практики, тишина и глубокие инсайты без давления</li>
                                <li>Атмосфера заботы, красоты и уважения</li>
                                <li>Духовные беседы и поддержка мастеров</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 md:p-7 backdrop-blur shadow-xl space-y-3">
                            <h3 className="text-xl font-semibold">Напиши нам</h3>
                            <p className="text-base leading-relaxed text-white/90">Готовы рассказать все детали путешествия и помочь с выбором формата участия.</p>
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
                            <Link
                                href="/masters"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
                            >
                                Познакомиться с мастерами
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitation;
