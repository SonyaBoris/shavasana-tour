import Image from "next/image";
import bgImage from "@/public/fon.jpg";

const Main = () => {
    return (
        <section
            className="relative min-h-[80vh] text-white overflow-hidden"
        >
            <Image
                src={bgImage}
                alt=""
                fill
                priority
                placeholder="blur"
                sizes="100vw"
                className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05090f]/20 via-[#0a1f26]/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d22] via-[#0a1f26]/60 to-transparent pointer-events-none" />
            <div className="relative z-10 site-container flex min-h-[80vh] flex-col justify-center pb-20 pt-36 md:pt-40 space-y-8">
                <header className="space-y-4 max-w-4xl">
                    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.08em] text-center">
                        <span className="leading-tight">Андаманские острова</span>
                        <span className="text-white/70 self-center leading-none">•</span>
                        <span className="leading-tight">Путешествие в рай</span>
                    </div>
                    <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Ретрит тур на Андаманские острова в компании мастеров</h1>
                    <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm font-semibold uppercase tracking-wide text-white/90">
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">13 - 26 марта 2026</span>
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">12 дней островной перезагрузки</span>
                        <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Йога · море · природа</span>
                    </div>
                    <p className="text-base leading-relaxed text-white/90 md:text-xl max-w-3xl">Это настоящий рай на земле - место замедления, расслабления и тотальной перезагрузки.</p>
                </header>
            </div>
        </section>
    );
}

export default Main;
