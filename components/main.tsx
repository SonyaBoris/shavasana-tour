import bgImage from "@/public/fon.jpg";

const Main = () => {
    return (
        <section
            className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-[#05090f]/85 via-[#0a1f26]/70 to-[#0d1d22]" />
            <div className="relative z-10 site-container flex min-h-[80vh] flex-col justify-center pb-20 pt-32 md:pt-36 space-y-8">
                <header className="space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.08em]">
                        Андаманские острова
                        <span className="text-white/70">•</span>
                        Индия
                    </div>
                    <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Ретрит на Андаманских островах с Михаилом Седовым и Наталией Владимировной Беляускене</h1>
                    <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide text-white/90">
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">13 - 26 марта 2026</span>
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">12 дней островной перезагрузки</span>
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Йога · море · природа</span>
                    </div>
                    <p className="text-lg leading-relaxed text-white/90 md:text-xl max-w-3xl">Это настоящий рай на земле - место замедления, расслабления и тотальной перезагрузки.</p>
                </header>
            </div>
        </section>
    );
}

export default Main;
