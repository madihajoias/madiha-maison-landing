'use client';

import { useEffect, useMemo, useState } from 'react';

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  encerrado: boolean;
};

function getTimeLeft(targetDate: Date): TimeLeft {
  const now = Date.now();
  const target = targetDate.getTime();
  const distance = target - now;

  if (distance <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
      encerrado: true,
    };
  }

  return {
    dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
    horas: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((distance / (1000 * 60)) % 60),
    segundos: Math.floor((distance / 1000) % 60),
    encerrado: false,
  };
}

export default function AuctionCountdown() {
  const auctionDate = useMemo(
    () => new Date('2026-10-07T17:00:00-03:00'),
    []
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(auctionDate));
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, [auctionDate]);

  return (
    <section
      id="leilao"
      aria-labelledby="auction-countdown-title"
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
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_28%),radial-gradient(circle_at_88%_80%,rgba(247,243,239,0.05),transparent_30%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#D8B980]/10
          to-transparent
          lg:block
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
            gap-14
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* TEXTO */}
          <div className="max-w-[570px]">
            <p
              className="
                mb-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#D7BE97]
                md:text-[10px]
              "
            >
              Leilão de Alta Joalheria
            </p>

            <h2
              id="auction-countdown-title"
              className="
                font-serif
                text-[2.65rem]
                font-normal
                leading-[1.03]
                text-[#F7F3EF]
                sm:text-[3.2rem]
                md:text-[3.7rem]
                lg:text-[4rem]
              "
            >
              O leilão acontece
              <br className="hidden sm:block" />
              <span className="text-[#D8B980]">
                {' '}em 07 de outubro
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[530px]
                text-[13px]
                font-light
                leading-7
                text-[#F7F3EF]/72
                md:text-[15px]
                md:leading-8
              "
            >
              O Diamante Natural de 8,06 ct da Madiha Maison será
              apresentado em leilão às 17h. Interessados podem falar
              com nossa equipe para receber informações e orientação
              sobre o processo de participação.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                border-t
                border-[#F7F3EF]/12
                pt-6
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
          </div>

          {/* CONTADOR */}
          <div>
            <p
              className="
                mb-6
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D8B980]
              "
            >
              Contagem regressiva
            </p>

            {!timeLeft ? (
              <div
                className="
                  grid
                  grid-cols-2
                  overflow-hidden
                  border
                  border-[#F7F3EF]/12
                  bg-white/[0.015]
                  md:grid-cols-4
                "
              >
                <CountdownItem value={0} label="Dias" />
                <CountdownItem value={0} label="Horas" />
                <CountdownItem value={0} label="Minutos" />
                <CountdownItem value={0} label="Segundos" />
              </div>
            ) : timeLeft.encerrado ? (
              <div
                className="
                  border
                  border-[#D8B980]/25
                  bg-white/[0.025]
                  p-8
                  backdrop-blur-sm
                  md:p-10
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D8B980]
                  "
                >
                  Evento
                </p>

                <p
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    text-[#F7F3EF]
                    md:text-4xl
                  "
                >
                  Leilão iniciado
                </p>
              </div>
            ) : (
              <div
                className="
                  grid
                  grid-cols-2
                  overflow-hidden
                  border
                  border-[#F7F3EF]/12
                  bg-white/[0.015]
                  md:grid-cols-4
                "
              >
                <CountdownItem
                  value={timeLeft.dias}
                  label="Dias"
                />

                <CountdownItem
                  value={timeLeft.horas}
                  label="Horas"
                />

                <CountdownItem
                  value={timeLeft.minutos}
                  label="Minutos"
                />

                <CountdownItem
                  value={timeLeft.segundos}
                  label="Segundos"
                />
              </div>
            )}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >
              <a
                href="#participar"
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  border
                  border-[#C7A87A]
                  bg-[#C7A87A]
                  px-8
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
                  border-[#F7F3EF]/22
                  bg-transparent
                  px-8
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
                Ver detalhes do diamante
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownItem({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        relative
        flex
        min-h-[150px]
        flex-col
        items-center
        justify-center
        border-b
        border-r
        border-[#F7F3EF]/12
        p-5
        md:min-h-[184px]
        md:border-b-0
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute
          inset-x-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#D8B980]/22
          to-transparent
        "
      />

      <span
        className="
          font-serif
          text-[3.3rem]
          font-normal
          leading-none
          text-[#F7F3EF]
          md:text-[4rem]
          lg:text-[4.3rem]
        "
      >
        {String(value).padStart(2, '0')}
      </span>

      <span
        className="
          mt-4
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#D8B980]
          md:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
}