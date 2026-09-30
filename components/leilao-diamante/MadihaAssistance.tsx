export default function MadihaAssistance() {
  return (
    <section
      id="atendimento"
      aria-labelledby="madiha-assistance-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        py-20
        md:py-24
        lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_88%_18%,rgba(199,168,122,0.12),transparent_28%),radial-gradient(circle_at_10%_85%,rgba(90,16,23,0.05),transparent_30%)]
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
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* CONTEÚDO */}
          <div className="max-w-[620px]">
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
              Atendimento aos interessados
            </p>

            <h2
              id="madiha-assistance-title"
              className="
                font-serif
                text-[2.8rem]
                font-normal
                leading-[1.04]
                text-[#4F1720]
                sm:text-[3.4rem]
                md:text-[4rem]
              "
            >
              Fale com a Madiha
              <br />
              sobre o leilão
            </h2>

            <p
              className="
                mt-7
                max-w-[590px]
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[15px]
                md:leading-8
              "
            >
              Interessados no Diamante Natural de 8,06 ct podem
              falar diretamente com a equipe da Madiha Maison para
              receber informações sobre a joia, o evento e o processo
              de participação no leilão.
            </p>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[15px]
                md:leading-8
              "
            >
              O atendimento pode ser realizado de forma remota ou,
              mediante disponibilidade, em nosso escritório no
              Vogue Square, na Barra da Tijuca.
            </p>

            <div
              className="
                mt-9
                flex
                flex-col
                gap-4
                sm:flex-row
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
                Falar sobre o leilão
              </a>

              <a
                href="#localizacao"
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
                Ver localização
              </a>
            </div>
          </div>

          {/* BLOCO VOGUE SQUARE */}
          <div
            className="
              relative
              overflow-hidden
              border
              border-[#5A1017]/12
              bg-[#EFE7DF]
              p-8
              shadow-[0_30px_70px_rgba(79,23,32,0.06)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                right-[-80px]
                top-[-80px]
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#C7A87A]/15
                blur-3xl
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8C692E]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.2rem]
                  font-normal
                  leading-tight
                  text-[#4F1720]
                  md:text-[2.8rem]
                "
              >
                Atendimento no
                <br />
                Vogue Square
              </h3>

              <p
                className="
                  mt-6
                  max-w-[500px]
                  text-[13px]
                  font-light
                  leading-7
                  text-[#5F5050]
                  md:text-[14px]
                "
              >
                Um ambiente reservado para interessados que desejam
                conversar com a equipe da Madiha Maison sobre o
                diamante e receber orientação antes do leilão.
              </p>

              <div
                className="
                  mt-9
                  border-t
                  border-[#5A1017]/12
                  pt-7
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#8C692E]
                  "
                >
                  Local
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[1.55rem]
                    leading-tight
                    text-[#4F1720]
                  "
                >
                  Vogue Square
                </p>

                <p
                  className="
                    mt-2
                    text-[12px]
                    font-light
                    leading-6
                    text-[#5F5050]
                  "
                >
                  Barra da Tijuca · Rio de Janeiro
                </p>
              </div>

              <div
                className="
                  mt-7
                  border-t
                  border-[#5A1017]/12
                  pt-7
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#8C692E]
                  "
                >
                  Atendimento
                </p>

                <p
                  className="
                    mt-3
                    text-[12px]
                    font-light
                    leading-6
                    text-[#5F5050]
                  "
                >
                  Informações sobre o diamante, orientações sobre
                  participação e atendimento aos interessados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}