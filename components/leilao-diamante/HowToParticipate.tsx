
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
              entrar em contato diretamente com a Madiha Maison para receber
              informações sobre a joia e orientações sobre o processo de participação no leilão.
            </p>
          </div>
        </div>

        {/* ETAPAS — 4 CAIXAS */}
        <div
          className="
            mt-14
            grid
            border
            border-[#5A1017]/12
            bg-white/30
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <StepCard
            number="01"
            title="Fale com a Madiha"
            text="Entre em contato com nossa equipe e informe seu interesse no leilão do Diamante Natural de 8,06 ct."
          />

          <StepCard
            number="02"
            title="Cadastre-se na Bastos Leilões"
            text="Para participar do leilão e realizar lances, é necessário fazer seu cadastro na plataforma da Bastos Leilões e seguir o procedimento de habilitação solicitado pela plataforma."
          />

          <StepCard
            number="03"
            title="Acesse o leilão"
            text="Após a liberação do cadastro, acesse a página oficial do leilão para acompanhar os lotes e participar."
          />

          <StepCard
            number="04"
            title="Realize seu lance"
            text="No dia 7 de outubro, acompanhe o leilão ao vivo pela plataforma e realize seus lances conforme as condições estabelecidas."
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
  href="https://wa.me/5521993530012?text=Quero%20receber%20orienta%C3%A7%C3%A3o%20para%20participar%20do%20leil%C3%A3o"
  target="_blank"
  rel="noopener noreferrer"
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
        md:border-r
        md:even:border-r-0
        md:[&:nth-child(3)]:border-b-0
        xl:border-b-0
        xl:even:border-r
        xl:last:border-r-0
        lg:p-8
        2xl:p-10
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
          text-[1.65rem]
          font-normal
          leading-tight
          text-[#4F1720]
          md:text-[1.8rem]
          2xl:text-[2rem]
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
