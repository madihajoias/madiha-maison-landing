export default function AuctionFinalCTA() {
  return (
    <section
      id="contato"
      aria-labelledby="final-cta-title"
      className="
        relative
        overflow-hidden
        bg-[#5A1017]
        py-20
        text-[#F7F3EF]
        md:py-24
        lg:py-28
      "
    >
      {/* LUZES DE FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_15%,rgba(199,168,122,0.16),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(247,243,239,0.05),transparent_30%)]
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
            mx-auto
            max-w-[1000px]
            text-center
          "
        >
          <p
            className="
              mb-5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D8B980]
              md:text-[10px]
            "
          >
            Leilão de Diamante Natural 8,06 ct
          </p>

          <h2
            id="final-cta-title"
            className="
              font-serif
              text-[2.8rem]
              font-normal
              leading-[1.03]
              text-[#F7F3EF]
              sm:text-[3.5rem]
              md:text-[4.3rem]
              lg:text-[4.8rem]
            "
          >
            Interessado em participar
            <br />
            <span className="text-[#D8B980]">
              do leilão?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[720px]
              text-[13px]
              font-light
              leading-7
              text-[#F7F3EF]/72
              md:text-[15px]
              md:leading-8
            "
          >
            Fale diretamente com a equipe da Madiha Maison para
            receber informações sobre o Diamante Natural de 8,06 ct
            e orientação sobre o processo de participação no leilão.
          </p>

          {/* DADOS DO EVENTO */}
          <div
            className="
              mx-auto
              mt-10
              flex
              max-w-[760px]
              flex-wrap
              items-center
              justify-center
              gap-x-7
              gap-y-3
              border-y
              border-[#F7F3EF]/12
              py-6
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#F7F3EF]
              "
            >
              07 de outubro
            </span>

            <span
              className="
                hidden
                h-4
                w-px
                bg-[#D8B980]/50
                sm:block
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#F7F3EF]
              "
            >
              17h
            </span>

            <span
              className="
                hidden
                h-4
                w-px
                bg-[#D8B980]/50
                sm:block
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#F7F3EF]/65
              "
            >
              Plataforma Bastos Leilões
            </span>
          </div>

          {/* BOTÕES */}
          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <a
              href="https://wa.me/5521993530012?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20para%20participar%20do%20leil%C3%A3o%20do%20Diamante%20Natural%20de%208%2C06%20ct%20da%20Madiha%20Maison."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                border
                border-[#C7A87A]
                bg-[#C7A87A]
                px-9
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#4F1720]
                transition-all
                duration-300
                hover:border-[#D6BD96]
                hover:bg-[#D6BD96]
              "
            >
              Quero participar do leilão
            </a>

            <a
              href="#localizacao"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                border
                border-[#F7F3EF]/25
                bg-transparent
                px-9
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#F7F3EF]
                transition-all
                duration-300
                hover:border-[#D8B980]
                hover:text-[#D8B980]
              "
            >
              Atendimento no Vogue Square
            </a>
          </div>

          {/* FECHO */}
{/* FECHO */}
<div
  className="
    mx-auto
    mt-12
    max-w-[760px]
    border-t
    border-[#F7F3EF]/10
    pt-8
  "
>
  <p
    className="
      text-[9px]
      uppercase
      tracking-[0.2em]
      text-[#F7F3EF]/55
    "
  >
    Madiha Maison · Alta Joalheria · Rio de Janeiro
  </p>

  <p
    className="
      mt-2
      text-[8px]
      uppercase
      tracking-[0.18em]
      text-[#F7F3EF]/35
    "
  >
    CNPJ 60.455.616/0001-89
  </p>
</div>
        </div>
      </div>
    </section>
  );
}