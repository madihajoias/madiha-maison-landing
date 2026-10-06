export default function AuctionLocation() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr";

  const directionsUrl =
    "https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z/data=!3m1!4b1!4m6!3m5!1s0x9bdbf2521f3707:0xa54921f2f3d36fd8!8m2!3d-23.0020172!4d-43.3961147!16s%2Fg%2F11zz3zxm21?entry=ttu";

  const auctionUrl =
    "https://www.bastosleiloes.com.br/leilao.asp?Num=64350";

  return (
    <section
      id="localizacao"
      aria-labelledby="auction-location-title"
      className="
        relative
        overflow-hidden
        bg-[#F2ECE6]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* FUNDO EDITORIAL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_10%_15%,rgba(199,168,122,0.10),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(90,16,23,0.05),transparent_30%)]
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
            mb-12
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
              Localização
            </p>

            <h2
              id="auction-location-title"
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
              Madiha Maison
              <br />
              no Vogue Square
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
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
              Interessados no leilão do Diamante Natural de 8,06 ct
              podem receber atendimento da equipe Madiha Maison em
              nosso escritório no Vogue Square, na Barra da Tijuca,
              mediante disponibilidade.
            </p>
          </div>
        </div>

        {/* MAPA + DADOS */}
        <div
          className="
            grid
            overflow-hidden
            border
            border-[#5A1017]/12
            bg-[#F7F3EF]
            shadow-[0_30px_80px_rgba(79,23,32,0.06)]
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          {/* MAPA */}
          <div
            className="
              relative
              min-h-[430px]
              w-full
              lg:min-h-[560px]
            "
          >
            <iframe
              src={mapUrl}
              title="Madiha Maison no Vogue Square"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
            />
          </div>

          {/* INFORMAÇÕES */}
          <div
            className="
              flex
              flex-col
              justify-between
              p-8
              md:p-10
              lg:p-12
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8C692E]
                "
              >
                Escritório Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.2rem]
                  font-normal
                  leading-tight
                  text-[#4F1720]
                  md:text-[2.6rem]
                "
              >
                Vogue Square
              </h3>

              {/* ENDEREÇO */}
              <div
                className="
                  mt-8
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
                  Endereço
                </p>

                <address
                  className="
                    mt-4
                    not-italic
                    text-[13px]
                    font-light
                    leading-7
                    text-[#5F5050]
                  "
                >
                  Av. das Américas, 8585
                  <br />
                  Sala 490
                  <br />
                  Vogue Square
                  <br />
                  Barra da Tijuca
                  <br />
                  Rio de Janeiro – RJ
                  <br />
                  CEP 22793-081
                </address>
              </div>

              {/* CONTATO */}
              <div
                className="
                  mt-8
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
                    mt-4
                    text-[13px]
                    font-light
                    leading-7
                    text-[#5F5050]
                  "
                >
                  Informações sobre o diamante e orientação para
                  interessados em participar do leilão.
                </p>
              </div>
            </div>

            {/* BOTÕES */}
            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
              "
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  border
                  border-[#5A1017]
                  bg-[#5A1017]
                  px-8
                  text-center
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
                Como chegar
              </a>

              <a
                href={auctionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  border
                  border-[#5A1017]/25
                  bg-transparent
                  px-8
                  text-center
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
        </div>

        {/* NOTA INFERIOR */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-2
            border-t
            border-[#5A1017]/10
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#755F61]
            "
          >
            Madiha Maison · Alta Joalheria
          </p>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#755F61]/75
            "
          >
            Vogue Square · Barra da Tijuca · Rio de Janeiro
          </p>
        </div>
      </div>
    </section>
  );
}