'use client';

import Image from 'next/image';

export default function DiamondHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="diamond-hero-title"
      className="
        relative
        min-h-[88svh]
        w-full
        overflow-hidden
        bg-[#F7F3EF]
        pt-28
        md:min-h-[100svh]
        md:pt-32
      "
    >
      {/* FUNDO EDITORIAL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_72%_42%,rgba(199,168,122,0.14),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(90,16,23,0.08),transparent_32%)]
        "
      />

      {/* DETALHE VERTICAL */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-[12%]
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#C7A87A]/25
          to-transparent
          lg:block
        "
      />

      {/* CONTEÚDO PRINCIPAL */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(88svh-7rem)]
          w-full
          max-w-[90rem]
          grid-cols-1
          items-center
          gap-14
          px-6
          pb-16
          md:min-h-[calc(100svh-8rem)]
          md:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-20
        "
      >
        {/* TEXTO */}
        <div className="max-w-[650px]">
          <p
            className="
              mb-5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#7B4F56]
              md:text-[10px]
            "
          >
            Madiha Maison · Alta Joalheria
          </p>

          <h1
            id="diamond-hero-title"
            className="
              font-serif
              text-[2.8rem]
              font-normal
              leading-[1.02]
              text-[#4F1720]
              sm:text-[3.5rem]
              md:text-[4.2rem]
              lg:text-[4.7rem]
            "
          >
            Leilão de
            <br />
            Diamante Natural
            <br />
            <span className="text-[#8C692E]">
              8,06 ct
            </span>
          </h1>

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
            Um diamante natural da Madiha Maison será apresentado
            em leilão no dia 7 de outubro, às 17h. Interessados
            podem falar diretamente com nossa equipe para receber
            informações sobre a joia e orientação para participação
            no leilão.
          </p>

          {/* DATA */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-3
              border-y
              border-[#6D4C42]/15
              py-5
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#4F1720]
              "
            >
              07 de outubro
            </span>

            <span
              className="
                hidden
                h-4
                w-px
                bg-[#C7A87A]/60
                sm:block
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#4F1720]
              "
            >
              17h
            </span>

            <span
              className="
                hidden
                h-4
                w-px
                bg-[#C7A87A]/60
                sm:block
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#755F61]
              "
            >
              Plataforma Bastos Leilões
            </span>
          </div>

          {/* CTAS */}
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
              href="https://api.whatsapp.com/send?phone=552199353-0012&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20leil%C3%A3o%2064350%0ahttp://www.bastosleiloes.com.br/catalogo.asp?Num%3d64350"
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
              Quero participar do leilão
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

        {/* ÁREA VISUAL DO DIAMANTE */}
        <div
          className="
            relative
            flex
            min-h-[420px]
            items-center
            justify-center
            md:min-h-[560px]
            lg:min-h-[650px]
          "
        >
          {/* LUZ DE FUNDO */}
          <div
            aria-hidden="true"
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#E9DDCF]/45
              blur-3xl
              md:h-[440px]
              md:w-[440px]
            "
          />

          {/* IMAGEM PRINCIPAL */}
          <div
            className="
              relative
              z-10
              aspect-square
              w-full
              max-w-[560px]
              overflow-hidden
              border
              border-[#C7A87A]/25
              bg-[#F7F3EF]
              shadow-[0_30px_90px_rgba(79,23,32,0.10)]
            "
          >
            <Image
              src="/diamante-natural-806ct-madiha-v2.webp"
              alt="Diamante natural de 8,06 ct da Madiha Maison em leilão"
              fill
              priority
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 560px"
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.02]
              "
            />

            {/* GRADIENTE INFERIOR */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-0
                bottom-0
                h-32
                bg-gradient-to-t
                from-black/20
                to-transparent
              "
            />

            {/* LEGENDA */}
            <div
              className="
                absolute
                bottom-6
                left-6
                z-20
                border
                border-white/25
                bg-black/20
                px-5
                py-4
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-white/80
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[1.4rem]
                  leading-none
                  text-white
                "
              >
                Diamante Natural 8,06 ct
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INDICADOR INFERIOR */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-5
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          xl:flex
        "
      >
        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#715B5D]/70
          "
        >
          Descubra o leilão
        </span>

        <span
          className="
            h-8
            w-px
            bg-gradient-to-b
            from-[#715B5D]/50
            to-transparent
          "
        />
      </div>
    </section>
  );
}