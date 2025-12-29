import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d1d22] via-[#0b1623] to-[#0a141c] text-white">
      <div className="site-container py-10 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.08em] text-white/60">
              Контакты
            </p>
            <h2 className="text-2xl font-semibold leading-tight">
              Остались вопросы — свяжитесь с нами
            </h2>
            <p className="text-base text-white/80">
              Поможем выбрать формат участия и расскажем детали ретрита.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
              href="tel:+789879488117"
            >
              8 987 948 81 17 · Юлия
            </a>
            <a
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
              href="tel:+79277221451"
            >
              +7 927 722 14 51 · Мария
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur shadow-xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/70">
              Телеграм-канал
            </p>
            <p className="text-base leading-relaxed text-white/85">
              Присоединяйтесь к нашему телеграмм каналу, чтобы быть в курсе всех новостей и обновлений о ретрите
            </p>
          </div>
          <Link
            href="https://t.me/+OshfXiouFQNhYjBi"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
          >
            Telegram-канал
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
