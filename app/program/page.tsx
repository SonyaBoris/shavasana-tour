"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import day11 from "@/public/day1-1.jpg";
import day12 from "@/public/day1-2.jpg";
import day151 from "@/public/15-1.jpg";
import day152 from "@/public/15-2.jpg";
import day21 from "@/public/day2-1.jpg";
import day22 from "@/public/day2-2.jpg";
import day31 from "@/public/day3-1.jpg";
import day32 from "@/public/day3-2.jpg";
import day181 from "@/public/18-1.jpg";
import day182 from "@/public/18-2.jpg";
import day191 from "@/public/19-1.jpg";
import day192 from "@/public/19-2.jpg";
import day201 from "@/public/20-1.jpg";
import day202 from "@/public/20-2.jpg";
import day211 from "@/public/21-1.jpg";
import day212 from "@/public/21-2.jpg";
import day221 from "@/public/22-1.jpg";
import day222 from "@/public/22-2.jpg";
import day231 from "@/public/23-1.jpg";
import day232 from "@/public/23-2.jpg";
import day241 from "@/public/24-1.jpg";
import day242 from "@/public/24-2.jpg";
import day251 from "@/public/25-1.jpg";
import day252 from "@/public/25-2.jpg";


type Day = {
  id: string;
  title: string;
  gallery: string[];
  items: string[];
};

const days: Day[] = [
  {
    id: "day-14",
    title: "14 марта",
    gallery: [day11.src, day12.src],
    items: [
      "Мы прилетаем на остров Порт Блэр",
      "Размещаемся в отеле и встречаемся в холле для знакомства",
      "Мы едем в сказочный магазин ракушек и натуральных камней.",
      "Все вместе ужинаем и делимся впечатлениями",
    ],
  },
  {
    id: "day-15",
    title: "15 марта",
    gallery: [day151.src, day152.src],
    items: [
      "Утром перемещаемся на пароме на остров Хэвлок и размещаемся в отеле",
      "Silver Sand Beach resort 5*",
      "Едем завтракать в живописное кафе",
      "Full moon cafe",
      "После завтрака исследуем наш пляж, купаемся загораем.",
      "В 15.00 встречаемся на брифинг с Михаилом Седовым ( вопросы и ответы)",
      "Вечером после ужина встреча с Марией ( вопросы- ответы)",
      "Она расскажет про свои практики про игру Лила.",
    ],
  },
  {
    id: "day-16",
    title: "16 марта",
    gallery: [day21.src, day22.src],
    items: [
      "Утро начинается на восходе солнца с йоги на берегу океана, переходит в медитацию, потом купание в кристальных водах океана",
      "Нас ждет прекрасный завтрак в отеле",
      "Начинается игра Лила с Марией и индивидуальные консультации с Михаилом Седовым",
      "Те, кто любит дайвинг могут записаться на погружения с аквалангом",
      "Вечером едем встречать закат на прекраснейший пляж Радха Нагар ( там снимали эпизод фильма Пираты Карибского моря)",
      "Наслаждаемся закатом, купаемся, делаем умопомрачительные фото",
    ],
  },
  {
    id: "day-17",
    title: "17 марта",
    gallery: [day31.src, day32.src],
    items: [
      "Утро начинается в 3.00 ч",
      "Мы отправляемся на каякинг— это занятие, во время которого туристы исследуют спокойные воды под звёздным небом, наблюдая явление биолюминесценции. Крошечный морской организм излучает естественное свечение, освещая воду сине-зелёными искрами при гребле",
      "Этот день наполнен отдыхом и негой. Находимся в потоке в соединении со своими желаниями здесь и сейчас",
      "Продолжение игры Лила",
      "Консультации с Михаилом",
      "Вечером Юлия приглашает всех на праздничный ужин",
    ],
  },
  {
    id: "day-18",
    title: "18 марта",
    gallery: [day181.src, day182.src],
    items: [
      "Мы встречаем восход солнца зарядкой на берегу и крийя йогой",
      "Завтракаем и отправляемся исследовать новый пляж Калапатар",
      "На этом пляже можно увидеть ракушки потрясающей красоты в первозданном виде",
      "Здесь много бегающих ракушек",
      "В этом месте самый богатый ассортимент изделий, ракушек и полудрагоценных камней",
    ],
  },
  {
    id: "day-19",
    title: "19 марта",
    gallery: [day191.src, day192.src],
    items: [
      "Мы на пароме перемещаемся на остров Нил",
      "Нил (Neil) – небольшой обитаемый остров рядом с более шумным Хэвлоком: свежие фрукты, разнообразные пляжи и теплое лазурное море с коралловыми рифами",
      "Размещаемся в отеле Sea She'll Neil 5*",
      "От души занимаемся снорклингом на пляже у отеля",
    ],
  },
  {
    id: "day-20",
    title: "20 марта",
    gallery: [day201.src, day202.src],
    items: [
      "Жители Андаманских островов прозвали Нил «продуктовой чашей»",
      "Отсюда поставляется львиная доля фруктов, овощей и риса для всего архипелага; вокруг рисовые поля и плантации бананов, манго и других тропических фруктов",
      "Помимо прогулок и отдыха на белоснежных пляжах, основное развлечение — дайвинг и снорклинг с разнообразным подводным миром",
      "Восход встречаем йогой на берегу океана",
      "По желанию берем велосипеды и едем вокруг острова, наслаждаемся видами",
      "Для желающих Мария проводит расстановки",
      "На закате Михаил проводит фотосессию для всех",
    ],
  },
  {
    id: "day-21",
    title: "21 марта",
    gallery: [day211.src, day212.src],
    items: [
      "День весеннего равноденствия",
      "Встречаем восход йогой на пляже",
      "Мария проводит практику соединения с природой и загадывания желаний и намерений",
      "Все желающие отправляются на корабле исследовать подводный мир с аквалангом",
      "Можно просто поплавать с масками",
      "Наслаждаемся природой и погодой",
    ],
  },
  {
    id: "day-22",
    title: "22 марта",
    gallery: [day221.src, day222.src],
    items: [
      "Перемещаемся на пароме на остров Хэвлок на завораживающий пляж Радха Нагар в отель Barefoot resort 5*",
      "Это аутентичный отель среди вековых деревьев с потрясающими эко-бунгало и крышей из пальмовых листьев",
      "Идем встречать неповторимый закат на чистейший пляж, где на берегу нальют ароматный красный чай",
      "На закате делаем крийя йогу и медитацию",
    ],
  },
  {
    id: "day-23",
    title: "23 марта",
    gallery: [day231.src, day232.src],
    items: [
      "После зарядки и завтрака отправляемся в трекинг через джунгли на пляж Элефант Бич",
      "По дороге увидим настоящие джунгли и ближе к берегу последствия цунами 2004 года",
      "На пляже развлечения на любой вкус: снорклинг, ватрушки, бананы, погружные батискафы и дайвинг; все по желанию, можно просто гулять вдоль берега",
      "По возвращении на закате Юлия проводит мастер-класс по бачате на пляже",
    ],
  },
  {
    id: "day-24",
    title: "24 марта",
    gallery: [day241.src, day242.src],
    items: [
      "День наслаждения",
      "Йога на восходе солнца",
      "Медитация благодарности",
      "Напутствие от Михаила, возможно учителя передадут еще кому информацию",
      "Напутствие от Марии для каждого в метафорических картах",
      "Вечером надеваем самые красивые наряды и встречаемся на гала-ужине",
    ],
  },
  {
    id: "day-25",
    title: "25 марта",
    gallery: [day251.src, day252.src],
    items: [
      "День прощания с островом",
      "Утром прогулка по берегу",
      "Завтрак",
      "Паром на Порт Блэр",
      "Трансфер в аэропорт",
      "Забираем с собой легкость, наполненность и приятные воспоминания",
    ],
  },
];
export default function ProgramPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-[#0d1d22] text-white min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 space-y-12">
        <aside className="hidden lg:flex flex-col gap-2 fixed right-6 top-32 z-20">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-[0.08em] text-white/70 mb-2">
              Дни
            </p>
            <div className="flex flex-col gap-2">
              {days.map((day) => (
                <button
                  key={`nav-${day.id}`}
                  type="button"
                  onClick={() => handleScrollTo(day.id)}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  {day.title}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="site-container">
          <header className="space-y-3 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.08em] text-white/60">
              Программа ретрита
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Программа по дням
            </h1>
          </header>
        </div>

        <div className="site-container flex flex-col gap-12">
          {days.map((day) => (
            <div
              key={day.title}
              id={day.id}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-xl space-y-4 scroll-mt-24"
            >
              <div className="grid gap-4 lg:grid-cols-[2fr_1fr] items-stretch">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur p-6 md:p-8 space-y-4 shadow-lg h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      {day.title}
                    </span>
                  </div>
                  <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                    {day.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 flex flex-col h-full">
                  {day.gallery?.slice(0, 2).map((image, index) => (
                    <div
                      key={`${day.title}-img-${index}`}
                      className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur overflow-hidden shadow-lg min-h-[220px] flex-1 flex"
                    >
                      <div
                        className="relative w-full"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1d22]/60 via-transparent to-[#0d1d22]/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="site-container">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/40 hover:bg-white/20"
          >
            Вернуться на главную
          </Link>
        </div>
      </section>
    </main>
  );
}
