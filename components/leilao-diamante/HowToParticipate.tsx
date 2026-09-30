export default function HowToParticipate() {
  return (
    <section
      id="participar"
      aria-labelledby="participar-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* LUZ DECORATIVA */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_15%,rgba(199,168,122,0.10),transparent_28%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[90rem]
          px-6
          md:px-8
        "
      >
        {/* CABEÇALHO */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <p
              className="
                mb-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Participação no leilão
            </p>

            <h2
              id="participar-title"
              className="
                max-w-[620px]
                font-serif
                text-[2.7rem]
                font-normal
                leading-[1.05]
                text-[#4F1720]
                sm:text-[3.3rem]
                md:text-[4rem]
              "
            >
              Como participar do
              <br />
              leilão do diamante
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[15px]
                md:leading-8
              "
            >
              Interessados no Diamante Natural de 8,06 ct podem
              entrar em contato diretamente com a Madiha Maison
              para receber informações sobre a joia e orientação
              sobre o processo de participação no leilão.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div
          className="
            mt-14
            grid
            border
            border-[#5A1017]/12
            bg-white/30
            md:grid-cols-3
          "
        >
          <StepCard
            number="01"
            title="Fale com a Madiha"
            text="Entre em contato com nossa equipe e informe seu interesse no leilão do Diamante Natural de 8,06 ct."
          />

          <StepCard
            number="02"
            title="Receba as informações"
            text="Nossa equipe apresenta os dados disponíveis sobre a joia, o evento e orienta você sobre o processo de participação."
          />

          <StepCard
            number="03"
            title="Participe do leilão"
            text="Após as orientações, você poderá seguir para o cadastro e participação na plataforma responsável pelo leilão."
          />
        </div>

        {/* BLOCO DE CONVERSÃO */}
        <div
          className="
            mt-12
            grid
            gap-8
            border-t
            border-[#5A1017]/12
            pt-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div className="max-w-[720px]">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#8C692E]
              "
            >
              Atendimento Madiha Maison
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[1.8rem]
                leading-[1.2]
                text-[#4F1720]
                md:text-[2.2rem]
              "
            >
              Receba orientação para participar do leilão.
            </p>

            <p
              className="
                mt-4
                max-w-[650px]
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[14px]
              "
            >
              A equipe da Madiha Maison está disponível para
              esclarecer dúvidas e orientar interessados antes
              do evento.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              lg:flex-col
              xl:flex-row
            "
          >
            <a
              href="#contato"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                border
                border-[#5A1017]
                bg-[#5A1017]
                px-8
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#F7F3EF]
                transition-all
                duration-300
                hover:border-[#761722]
                hover:bg-[#761722]
              "
            >
              Quero participar
            </a>

            <a
              href="#diamante"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                border
                border-[#5A1017]/25
                bg-transparent
                px-8
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#4F1720]
                transition-all
                duration-300
                hover:border-[#C7A87A]
                hover:text-[#8C692E]
              "
            >
              Conhecer o diamante
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article
      className="
        relative
        min-h-[280px]
        border-b
        border-[#5A1017]/12
        p-8
        last:border-b-0
        md:border-b-0
        md:border-r
        md:last:border-r-0
        lg:p-10
      "
    >
      <span
        className="
          text-[10px]
          font-semibold
          tracking-[0.24em]
          text-[#C7A87A]
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-8
          font-serif
          text-[1.75rem]
          font-normal
          leading-tight
          text-[#4F1720]
          md:text-[2rem]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          text-[13px]
          font-light
          leading-7
          text-[#5F5050]
        "
      >
        {text}
      </p>
    </article>
  );
}