export default function InstagramSection() {
  return (
    <section
      id="instagram"
      aria-labelledby="instagram-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.10),transparent_28%),radial-gradient(circle_at_88%_80%,rgba(90,16,23,0.05),transparent_30%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[90rem]
          gap-10
          px-6
          md:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* TEXTO */}
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
            Instagram Madiha Maison
          </p>

          <h2
            id="instagram-title"
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
            Acompanhe o leilão
            <br />
            também pelo Instagram
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
            Acompanhe conteúdos da Madiha Maison, novidades sobre
            o leilão e informações sobre o Diamante Natural de
            8,06 ct em nosso perfil oficial.
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
              href="https://www.instagram.com/madihamaison"
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
              Ver Instagram
            </a>

            <a
              href="https://www.bastosleiloes.com.br/leilao.asp?Num=64350"
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
              Falar sobre o leilão
            </a>
          </div>
        </div>

        {/* CARD INSTAGRAM */}
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
              right-[-70px]
              top-[-70px]
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
                tracking-[0.28em]
                text-[#8C692E]
              "
            >
              Perfil oficial
            </p>

            <p
              className="
                mt-5
                font-serif
                text-[2.2rem]
                leading-tight
                text-[#4F1720]
                md:text-[2.8rem]
              "
            >
              @madihamaison
            </p>

            <p
              className="
                mt-6
                max-w-[470px]
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
              "
            >
              Um canal direto para acompanhar a Madiha Maison,
              conhecer nossas joias e receber novidades relacionadas
              ao leilão.
            </p>

            <div
              className="
                mt-9
                grid
                grid-cols-3
                gap-3
              "
            >
              <a
                href="https://www.instagram.com/madihamaison"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  border
                  border-[#5A1017]/10
                  bg-[#F7F3EF]/70
                "
              >
                <img
                  src="/instagram-madiha-01.webp"
                  alt="Publicação da Madiha Maison no Instagram"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </a>

              <a
                href="https://www.instagram.com/madihamaison"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  border
                  border-[#5A1017]/10
                  bg-[#F7F3EF]/70
                "
              >
                <img
                  src="/instagram-madiha-02.webp"
                  alt="Publicação da Madiha Maison no Instagram"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </a>

              <a
                href="https://www.instagram.com/madihamaison"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  border
                  border-[#5A1017]/10
                  bg-[#F7F3EF]/70
                "
              >
                <img
                  src="/instagram-madiha-03.webp"
                  alt="Publicação da Madiha Maison no Instagram"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </a>
            </div>

            <p
              className="
                mt-5
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[#755F61]/65
              "
            >
              Últimas publicações da Madiha Maison
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}