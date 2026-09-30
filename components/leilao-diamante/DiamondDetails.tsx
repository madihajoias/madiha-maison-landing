import Image from 'next/image';

export default function DiamondDetails() {
  return (
    <section
      id="diamante"
      aria-labelledby="diamond-details-title"
      className="
        relative
        overflow-hidden
        bg-[#F2ECE6]
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
          bg-[radial-gradient(circle_at_18%_25%,rgba(199,168,122,0.10),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(90,16,23,0.06),transparent_30%)]
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
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* IMAGEM DA SEÇÃO ÂNCORA */}
          <div
            className="
              relative
              min-h-[500px]
              overflow-hidden
              border
              border-[#5A1017]/10
              bg-[#F7F3EF]
              shadow-[0_30px_70px_rgba(79,23,32,0.07)]
              md:min-h-[620px]
            "
          >
            <Image
              src="/diamante-detalhe-806ct-madiha.webp"
              alt="Diamante natural de 8,06 ct da Madiha Maison"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 620px"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-6
                left-6
                border
                border-white/20
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
                  tracking-[0.25em]
                  text-white/80
                "
              >
                Peça em leilão
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[1.2rem]
                  text-white
                "
              >
                Diamante Natural 8,06 ct
              </p>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="max-w-[610px]">
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
              O diamante
            </p>

            <h2
              id="diamond-details-title"
              className="
                font-serif
                text-[2.8rem]
                font-normal
                leading-[1.03]
                text-[#4F1720]
                sm:text-[3.4rem]
                md:text-[4.1rem]
              "
            >
              Um solitário de
              <br />
              presença rara
            </h2>

            <p
              className="
                mt-7
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[15px]
                md:leading-8
              "
            >
              No centro da joia está um diamante natural de 8,06 ct,
              com lapidação esmeralda. Suas linhas alongadas e facetas
              em degraus valorizam a geometria, a transparência e a
              presença visual da pedra.
            </p>

            <p
              className="
                mt-5
                text-[13px]
                font-light
                leading-7
                text-[#5F5050]
                md:text-[15px]
                md:leading-8
              "
            >
              A peça será apresentada em leilão pela Madiha Maison,
              reunindo características técnicas que reforçam sua
              singularidade dentro do universo da alta joalheria.
            </p>

            <div
              className="
                mt-9
                border-l
                border-[#C7A87A]
                pl-6
              "
            >
              <p
                className="
                  font-serif
                  text-[1.55rem]
                  leading-[1.35]
                  text-[#4F1720]
                  md:text-[1.9rem]
                "
              >
                Lapidação esmeralda, 8,06 ct e certificação gemológica.
              </p>
            </div>
          </div>
        </div>

        {/* FICHA TÉCNICA */}
        <div
          className="
            mt-16
            border-t
            border-[#5A1017]/12
            pt-12
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-start
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
                Ficha técnica
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[2rem]
                  leading-tight
                  text-[#4F1720]
                  md:text-[2.5rem]
                "
              >
                Dados do
                <br />
                diamante
              </h3>
            </div>

            <div
              className="
                grid
                border
                border-[#5A1017]/12
                bg-[#F7F3EF]/55
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              <TechnicalItem label="Peso" value="8,06 ct" />
              <TechnicalItem label="Lapidação" value="Esmeralda / Emerald Cut" />
              <TechnicalItem label="Pureza" value="VS2" />
              <TechnicalItem label="Cor" value="M" />
              <TechnicalItem label="Medidas" value="14,07 × 9,78 × 6,09 mm" />
              <TechnicalItem label="Fluorescência" value="Inerte" />
            </div>
          </div>
        </div>

        {/* CERTIFICAÇÃO */}
        <div
          className="
            mt-14
            grid
            gap-8
            border-t
            border-[#5A1017]/12
            pt-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
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
              Certificação gemológica
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[2rem]
                leading-tight
                text-[#4F1720]
                md:text-[2.5rem]
              "
            >
              Características técnicas documentadas
            </h3>
          </div>

          <p
            className="
              max-w-[680px]
              text-[13px]
              font-light
              leading-7
              text-[#5F5050]
              md:text-[15px]
              md:leading-8
            "
          >
            O diamante possui certificação gemológica com registro
            de peso, lapidação, medidas, cor, pureza, proporções e
            fluorescência. Informações adicionais poderão ser
            apresentadas aos interessados durante o atendimento da
            Madiha Maison.
          </p>
        </div>
      </div>
    </section>
  );
}

function TechnicalItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        min-h-[145px]
        border-b
        border-r
        border-[#5A1017]/10
        p-6
        sm:p-7
      "
    >
      <p
        className="
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#8C692E]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-4
          font-serif
          text-[1.45rem]
          leading-tight
          text-[#4F1720]
        "
      >
        {value}
      </p>
    </div>
  );
}