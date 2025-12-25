import Image from "next/image";
import Link from "next/link";
import organizersImage from "@/public/mikhailmain.jpg";
import bgImage from "@/public/fon2.jpg";

const Invitation = () => {
    return (
        <section className="relative min-h-[80vh] bg-cover bg-fixed bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="absolute inset-0 bg-gradient-to-b  bg-[#05090f]/60 pointer-events-none" />

            <div className="relative z-10 site-container py-16 space-y-10">
                <header className="space-y-3 max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.08em] text-white/60">Приглашение от организаторов</p>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Путешествие, которое меняет ощущение отдыха</h2>
                </header>

                <div className="space-y-8">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur shadow-xl text-white/90 leading-relaxed overflow-hidden">
                        <div className="flex flex-col gap-5 md:flex-row md:items-stretch">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg md:w-[38%] lg:w-[34%] min-h-[260px] md:min-h-full aspect-[670/1280] flex items-center justify-center">
                                <Image
                                    src={organizersImage}
                                    alt="Организаторы ретрита"
                                    fill
                                    placeholder="blur"
                                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 38vw, 100vw"
                                    loading="lazy"
                                    className="object-contain object-bottom"
                                />
                            </div>
                            <div className="space-y-4 md:w-[62%] lg:w-[66%]">
                                <p>Приглашаю тебя в путешествие, которое однажды полностью изменило моё ощущение отдыха.</p>
                                <p>Я хочу поделиться с тобой тем опытом, который прожил сам и который теперь очень хочется подарить другим.</p>
                                <p>Мы привыкли бежать. И даже на отдыхе продолжаем бежать: «А дайте нам ещё одно развлечение», «А что у нас дальше по программе?», «А сколько локаций мы успеем за день?»</p>
                                <p>В моём путешествии всё было иначе.</p>
                                <p>Мне не нужно было никуда спешить. Не нужно было выбирать — это или это. Я просто делал то, что хочу, был в потоке и наслаждался этим состоянием.</p>
                                <p>Утром я просыпался на рассвете и шел по кристально чистой воде. Просто шел и чувствовал, что Я ЗДЕСЬ.</p>
                                <p>Я завтракал на берегу океана — долго, вкусно, спокойно, проживая каждый момент.</p>
                                <p>Именно этот опыт я хочу подарить тебе.</p>
                                <p>Я приглашаю тебя поехать со мной и с уникальными мастерами в выездной ретрит-тур на Андаманские острова ! Мы посетим остров Хэвлок, где снимали эпизод из фильма Пираты карибского моря</p>
                                <p>Как мастер я очень хорошо вижу разницу между «красивым отдыхом» и настоящим опытом .</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur shadow-xl">
                            <h3 className="mb-4 text-xl font-semibold">Что будет в этом путешествии</h3>
                            <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                                <li>утренние рассветы у океана</li>
                                <li>прогулки по воде и по острову</li>
                                <li>много активностей: снорклинг, дайвинг, каякинг, трекинг</li>
                                <li>практики и тишина</li>
                                <li>на встречах расскажу что хотят нам передать учителя и ведущие</li>
                                <li>будет атмосфера заботы, красоты и уважения</li>
                                <li>компания людей на одной волне</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#123240]/80 via-[#0f1f2b]/90 to-[#0a121a] p-6 md:p-7 shadow-xl space-y-4">
                            <h3 className="text-xl font-semibold">Кому это откликается</h3>
                            <p className="text-base leading-relaxed text-white/90">Если тебе откликается этот ритм. Если ты устал бежать, решать бесконечный список задач и всё контролировать. Если ты хочешь по-новому прожить отдых — я приглашаю тебя поехать с нами</p>
                            <p className="text-base leading-relaxed text-white/90">Это путешествие, где не нужно «что-то из себя делать». Можно просто быть — в потоке и без контроля. Именно в этом состоянии происходит самое важное.</p>
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
                            <p className="text-base leading-relaxed text-white/90 font-semibold">Ваш Михаил Седов</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitation;
