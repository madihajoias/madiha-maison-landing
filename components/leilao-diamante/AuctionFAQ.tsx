'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Como participar do leilão do Diamante Natural de 8,06 ct?',
    answer:
      'Interessados podem falar diretamente com a equipe da Madiha Maison para receber informações sobre o diamante, o evento e orientação sobre o processo de participação no leilão.',
  },
  {
    question: 'Quando será realizado o leilão?',
    answer:
      'O leilão está marcado para o dia 7 de outubro, às 17h.',
  },
  {
    question: 'Onde será realizado o leilão?',
    answer:
      'O leilão será realizado por meio da plataforma Bastos Leilões. A Madiha Maison oferece atendimento aos interessados e orientação sobre o processo de participação.',
  },
  {
    question: 'O diamante pertence à Madiha Maison?',
    answer:
      'Sim. O Diamante Natural de 8,06 ct apresentado nesta página é uma peça da Madiha Maison e será ofertado em leilão.',
  },
  {
    question: 'Quais são as características do diamante?',
    answer:
      'O diamante natural possui 8,06 ct, lapidação esmeralda, cor M, pureza VS2, medidas aproximadas de 14,07 × 9,78 × 6,09 mm e fluorescência inerte.',
  },
  {
    question: 'O diamante possui certificação gemológica?',
    answer:
      'Sim. O diamante possui certificação gemológica com registro de suas principais características técnicas.',
  },
  {
    question: 'Posso falar com a Madiha Maison antes do leilão?',
    answer:
      'Sim. Interessados podem entrar em contato com a equipe da Madiha Maison para receber informações sobre a joia e orientação antes do leilão.',
  },
  {
    question: 'É possível receber atendimento presencial?',
    answer:
      'Sim. Mediante disponibilidade, a Madiha Maison oferece atendimento em seu escritório no Vogue Square, na Barra da Tijuca, Rio de Janeiro.',
  },
];

export default function AuctionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      id="faq"
      aria-labelledby="auction-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F2ECE6]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_12%,rgba(199,168,122,0.10),transparent_28%),radial-gradient(circle_at_8%_88%,rgba(90,16,23,0.05),transparent_30%)]
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
          gap-12
          px-6
          md:px-8
          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-20
        "
      >
        {/* TÍTULO */}
        <div className="max-w-[500px]">
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
            Perguntas frequentes
          </p>

          <h2
            id="auction-faq-title"
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
            Informações sobre
            <br />
            o leilão
          </h2>

          <p
            className="
              mt-7
              max-w-[470px]
              text-[13px]
              font-light
              leading-7
              text-[#5F5050]
              md:text-[15px]
              md:leading-8
            "
          >
            Reunimos as principais informações para interessados no
            leilão do Diamante Natural de 8,06 ct da Madiha Maison.
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
                text-[1.4rem]
                leading-[1.35]
                text-[#4F1720]
                md:text-[1.7rem]
              "
            >
              Precisa de outra informação?
            </p>

            <a
              href="#contato"
              className="
                mt-4
                inline-flex
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#8C692E]
                transition-colors
                duration-300
                hover:text-[#5A1017]
              "
            >
              Falar com a Madiha Maison
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="
            border-t
            border-[#5A1017]/12
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="
                  border-b
                  border-[#5A1017]/12
                "
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    py-7
                    text-left
                    md:py-8
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[1.35rem]
                      font-normal
                      leading-[1.3]
                      text-[#4F1720]
                      md:text-[1.55rem]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#5A1017]/18
                      text-[1.2rem]
                      font-light
                      text-[#8C692E]
                      transition-transform
                      duration-300
                    "
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-[760px]
                        pb-8
                        pr-12
                        text-[13px]
                        font-light
                        leading-7
                        text-[#5F5050]
                        md:text-[14px]
                        md:leading-8
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}