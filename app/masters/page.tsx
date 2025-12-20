import Navigation from "@/components/navigation";
import Image from "next/image";
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
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/julia.jpg"
                alt="Юлия Борисова"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <h3 className="text-2xl font-semibold">Юлия Борисова</h3>
                <p className="text-sm text-white/70">Руководитель и вдохновитель ретрит-центра «Шавасана»</p>
              </div>
            </div>
            <div className="space-y-3 text-white/90 leading-relaxed">
              <p>
                Я буду каждое утро на берегу океана проводить с вами пробуждающие зарядки. Являюсь руководителем и вдохновителем ретрит центра Шавасана. Всегда увлечена здоровым образом жизни, постоянно учусь, постоянно в поиске новых методик. Хочу на своем личном примере показать, что можно долго быть активным и молодым, что можно рожать много детей и не испортить свою фигуру, что можно наслаждаться жизнью, не имея золотых запасов и миллионов.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
                <p className="text-sm font-semibold text-white">Образование и квалификация:</p>
                <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                  <li>Фитнес-инструктор категории Мастер+, стаж 29 лет (любимые тренировки связаны с реабилитацией)</li>
                  <li>15 лет обучает фитнес-инструкторов. Руководитель школы фитнеса</li>
                  <li>Медицинское образование колледж им. Ляпиной</li>
                  <li>Диплом о проф.переподготовке Реабилитация и спортивная медицина (Реавиз)</li>
                  <li>Диплом о профпереподготовке Адаптивная физическая культура</li>
                  <li>Диплом РАНМ доктора народной медицины (гуаша, висцеральный массаж, вакуум,точечно- аккупунтурное воздействие,проработка казацкими нагайками, психо-динамические техники, биодинамика, шаманские техники)</li>
                  <li>Натуропат</li>
                  <li>Ароматерапевт</li>
                  <li>Диетолог- нутрициолог</li>
                  <li>Гирудотерпевт</li>
                  <li>Фитотерапевт</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
                <p className="text-sm font-semibold text-white">О себе:</p>
                <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                  <li>Многодетная мама (4 детей), организатор выездных туров, тренингов и марафонов по питанию.</li>
                  <li>Практикует бег на рассвете, зарядку, гвоздестояние, дыхательные задержки; любит баню, лыжи и натуральное питание.</li>
                  <li>Сама выращивает овощи и травы, готовит косметику, посадила более 5 000 деревьев и кустарников.</li>
                  <li>Получила множество отзывов о своих марафонах: снижение веса, выход из депрессии, новые возможности и знакомства.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-emerald-200">
                <a
                  href="https://www.шавасана.рф/"
                  className="underline underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ретрит центр Шавасана
                </a>
                <a
                  href="https://vk.com/julia_doctor_health"
                  className="underline underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  VK
                </a>
                <a
                  href="https://www.instagram.com/julia_doctor_health?r=nametag"
                  className="underline underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com/channel/UCwCapo72EbMvySG7zqCHCVA"
                  className="underline underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
                <a
                  href="https://vk.com/album62725412_150709000"
                  className="underline underline-offset-4 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Дипломы и сертификаты
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/mikhail.jpg"
                alt="Михаил Седов"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20"
                priority
              />
              <div>
                <h3 className="text-2xl font-semibold">Михаил Седов</h3>
                <p className="text-sm text-white/70">Кармолог, парапсихолог, видящий</p>
              </div>
            </div>
            <div className="space-y-3 text-white/90 leading-relaxed">
              <p>
                Чтобы познакомиться с вами поближе немного расскажу о себе.
                Мои жизненные задачи немножко необычны на взгляд непосвященного человека.
                Главнейшая из них заключается в работе с информационными потоками тонкого плана. Как только я вижу образ человека мне сразу начинает идти информация о нём.

                И эту информацию с тонкого плана я доношу до людей.
                Все, что касается прошлых воплощений, духовного уровня и степени его раскрытия.

                Но самое важное, эта информация позволяет определить людям их изначальное ПРЕДНАЗНАЧЕНИЕ.

                Оно есть у каждого, но вспомнить об этом могут не все.
                Мешает отсутствие интуиции, тяжесть Земли и её низкие вибрации.

                Наша жизнь — это следствие мыслей и поступков в прошлых жизнях, по-другому Карма.

                Разобраться в Кармических причинах нынешних событий вам и предлагаю.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2">
                <p className="text-sm font-semibold text-white">Я помогаю людям с разными проблемами:</p>
                <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                  <li>Почему жизнь складывается не так, как мечталось, и как выйти на своё дело?</li>
                  <li>Как найти любимое дело и жить в гармонии с собой?</li>
                  <li>Как наладить отношения с мужем, родителями, детьми?</li>
                  <li>Как стать увереннее?</li>
                  <li>Какое мое предназначение?</li>
                  <li>Не знаю в каком направлении идти?</li>
                </ul>
              </div>
              <p>
                Ответы на все вопросы есть в вашем прошлом опыте.
                Там вы успели максимально раскрыться, там вы тоже не раз падали.

                Но где именно вы падали? Это
                стоит знать, и в контексте этого изменить свою жизнь здесь и сейчас.

                У каждого из нас есть Ведущие или Ангелы-хранители. Они знают о вас все. И именно от них мне приходит информация, которую вам и доведу.

                А вот, что с ней делать и в какую сторону начинать движение — эти решения принимать будете самостоятельно.
                Свободную волю никто не в силах отменить.

                Выбор и ответственность за вами!
                Я же буду искренне рад помочь всем стремящимся жить в соответствии с планом души в решении их вопросов.

                Принимаю в г.Самара, а также на ретритах по всей стране.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/mari.jpg"
                alt="Мария Серебрякова"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <h3 className="text-2xl font-semibold">Мария Серебрякова</h3>
                <p className="text-sm text-white/70">Психолог, проводник Лилы, расстановщик</p>
              </div>
            </div>
            <div className="space-y-3 text-white/90 leading-relaxed">
              <p>
                На андаманском ретрите я буду проводить для вас
                древнейшую трансформационную игру самопознания Лила, которая соединяет человека с Высшим Я, помогает найти ответы на любые вопросы и простроить дальнейший путь в согласии и духом и личным предназначением.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2">
                <p className="text-sm font-semibold text-white">Частые запросы:</p>
                <ul className="space-y-3 text-base leading-relaxed text-white/90 list-disc marker:text-white/70 pl-5">
                  <li>Самоценность, поиск себя, доступ к ресурсам и саморегуляции.</li>
                  <li>Отношения: детско-родительские, партнёрские; выход из кризисов и повторяющихся сценариев.</li>
                  <li>Тревожные состояния, ПТСР, депрессия, разводы, утраты, психосоматика.</li>
                  <li>Финансовые трудности и отношения с деньгами.</li>
                </ul>
              </div>
              <p>
                Мне близок холистический подход к человеку, то есть, ориентированный на целостность и триединство: дух, душа, тело.
                В психотерапевтической практике я синтезирую разные подходы: EMDR, системные расстановки, работу по Байрон Кейти, трансперсональный подход, ImTT и это не все. Я работаю с более тонкими слоями через звукотерапию, дыхание, медитации, системные ритуалы по Даану Ван Компенхауту.
              </p>
              <a
                href="https://t.me/marie_psycho"
                className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 underline underline-offset-4 hover:bg-white/20 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Телеграм-канал «Открытое сердце»
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/natali.jpg"
                alt="Наталия Владимировна Беляускене"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <h3 className="text-2xl font-semibold">Наталия Беляускене</h3>
                <p className="text-sm text-white/70">Популярный блогер, канал «Этот момент»</p>
              </div>
            </div>
            <a
              href="https://t.me/+U6bM85UoPgoyZjhi"
              className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 underline underline-offset-4 hover:bg-white/20 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Телеграм-канал «Этот момент»
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
