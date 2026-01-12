import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const Leituras = () => {
  const [mostrarPrimeiraLeitura, setMostrarPrimeiraLeitura] = useState(false);
  const [mostrarSalmo, setMostrarSalmo] = useState(false);
  const [mostrarSegundaLeitura, setMostrarSegundaLeitura] = useState(false);
  const [mostrarEvangelho, setMostrarEvangelho] = useState(false);
  const [liturgia, setLiturgia] = useState("");
  const [cor, setCor] = useState(false);


  const [leituras, setLeituras] = useState({
    primeiraLeitura: [],
    salmo: [],
    segundaLeitura: [],
    evangelho: [],
    extras: []
  });

  const diasSemana = {
    "2ª feira": "Segunda-feira",
    "3ª feira": "Terça-feira",
    "4ª feira": "Quarta-feira",
    "5ª feira": "Quinta-feira",
    "6ª feira": "Sexta-feira",
    "Sábado": "Sábado",
    "Domingo": "Domingo"
  };

  // Quebras de linha
  const inserirQuebrasDeLinha = (texto, numeroDePalavras) => {
    const palavras = texto.split(' ');
    let resultado = '';

    for (let i = 0; i < palavras.length; i++) {
      resultado += palavras[i] + ' ';
      if ((i + 1) % numeroDePalavras === 0) {
        resultado += '<br />';
      }
    }

    return resultado.trim();
  };

  // API
  useEffect(() => {
    fetch('https://liturgia.up.railway.app/v2/')
      .then(response => response.json())
      .then(data => {
        setLeituras(data.leituras || {});
        setLiturgia(data.liturgia || "");
        setCor(data.cor || {});
      })
      .catch(error => console.error("Erro ao buscar liturgia:", error));
  }, []);

  // Formata os dia corretamente
  const formatarLiturgia = (texto) => {
    if (!texto) return "";

    let textoFormatado = texto;
    Object.keys(diasSemana).forEach((chave) => {
      if (texto.includes(chave)) {
        textoFormatado = texto.replace(chave, diasSemana[chave]);
      }
    });

    return textoFormatado;
  };

  function getTextColor(cor) {
    const colors = {
      Verde: "text-green-500",
      Branco: "text-white",
      Vermelho: "text-red-500",
      Roxo: "text-purple-500"
    };

    return colors[cor] || "bg-gray-300 text-gray-500";
  }

  function getBgColor(cor) {
    const colors = {
      Verde: "bg-green-400",
      Branco: "bg-white-400",
      Vermelho: "bg-red-400",
      Roxo: "bg-purple-400",
      Rosa: "bg-pink-400"
    };

    return colors[cor] || "bg-gray-300 text-gray-500";
  }
  function getHoverBgColor(cor) {
    const colors = {
      Verde: "hover:bg-green-300 hover:text-white",
      Branco: "hover:bg-gray-200 hover:text-gray-500",
      Vermelho: "hover:bg-red-300 hover:text-white",
      Roxo: "hover:bg-purple-300 hover:text-white",
      Rosa: "hover:bg-pink-300 hover:text-white"
    };

    return colors[cor] || "hover:bg-gray-300 text-black";
  }

  function getBorder(cor) {
    const colors = {
      Verde: "border-green-500",
      Branco: "border-gray-500",
      Vermelho: "border-red-500",
      Roxo: "border-purple-500",
      Rosa: "border-pink-500"
    };

    return colors[cor] || "bg-gray-500";
  }

  function getHoverText(cor) {
    const colors = {
      Verde: "hover:text-green-600",
      Branco: "hover:text-gray-600",
      Vermelho: "hover:text-red-600",
      Roxo: "hover:text-purple-600",
      Rosa: "hover:text-pink-600"
    };

    return colors[cor] || "bg-gray-500";
  }

  function getBgWrites(cor) {
    const colors = {
      Verde: "bg-green-200",
      Branco: "bg-gray-100",
      Vermelho: "bg-red-200",
      Roxo: "bg-purple-200",
      Rosa: "bg-pink-200"
    };

    return colors[cor] || "bg-gray-100";
  }

  function getTextColor(cor) {
    const colors = {
      Branco: "text-gray-600",
      Verde: "text-green-600",
      Vermelho: "text-red-600",
      Roxo: "text-purple-600",
      Rosa: "text-pink-600"
    };

    return colors[cor] || "text-gray-500";
  }

  return (

    // Botões

    <main className="pt-22 min-h-screen py-8">
      <section className="">
        {/* Título Principal */}
        <div className='mt-15 md:gap-5 flex flex-col items-center justify-center mx-auto'>
          <h1
            id="title2"
            className="text-2xl md:text-4xl font-cursive text-amber-600  italic text-center"
          >
            {formatarLiturgia(liturgia)}
          </h1>
          <div className='mt-2 justify-center flex'>
            <span class="relative group">
              <abbr class={`fa-solid fa-cross text-3xl ${getTextColor(cor)}`}>

              </abbr>
              <span class={`${getBgColor(cor)} whitespace-nowrap normal-case absolute bottom-full left-1/2 text-gray-800 -translate-x-1/2 mb-2 hidden group-hover:block text-[15px] px-5 py-1 font-bold rounded-lg`}>
                Cor {cor}
              </span>
            </span>
          </div>
        </div>

        {/* Container de Leituras */}
        <div className="mt-10 flex flex-col items-center">
          {/* Botões Lado a Lado */}
          <div
            className={clsx(
              "flex flex-wrap items-center gap-3 md:gap-4 pb-8 text-sm md:text-base",
              mostrarPrimeiraLeitura || mostrarSalmo || mostrarSegundaLeitura || mostrarEvangelho
                ? "pb-8"
                : "pb-20"
            )}
          >
            {/* Primeira Leitura */}
            {leituras.primeiraLeitura.length > 0 && (
              <>
                <button
                  className={clsx(
                    "transition-colors font-medium text-xl",
                    mostrarPrimeiraLeitura
                      ? ["font-semibold", getTextColor(cor)]
                      : ["text-gray-500", getHoverText(cor)]
                  )}
                  onClick={() => {
                    setMostrarPrimeiraLeitura(!mostrarPrimeiraLeitura)
                    setMostrarSalmo(false)
                    setMostrarSegundaLeitura(false)
                    setMostrarEvangelho(false)
                  }}
                >
                  1ª Leitura
                </button>
                {(leituras.salmo.length > 0 ||
                  leituras.segundaLeitura.length > 0 ||
                  leituras.evangelho.length > 0) && (
                    <span className="text-gray-300 select-none">|</span>
                  )}
              </>
            )}

            {/* Salmo */}
            {leituras.salmo.length > 0 && (
              <>
                <button
                  className={clsx(
                    "transition-colors font-medium text-xl",
                    mostrarSalmo
                      ? ["font-semibold", getTextColor(cor)]
                      : ["text-gray-500", getHoverText(cor)]
                  )}
                  onClick={() => {
                    setMostrarSalmo(!mostrarSalmo)
                    setMostrarPrimeiraLeitura(false)
                    setMostrarSegundaLeitura(false)
                    setMostrarEvangelho(false)
                  }}
                >
                  Salmo
                </button>
                {(leituras.segundaLeitura.length > 0 ||
                  leituras.evangelho.length > 0) && (
                    <span className="text-gray-300 select-none">|</span>
                  )}
              </>
            )}

            {/* Segunda Leitura */}
            {leituras.segundaLeitura.length > 0 && (
              <>
                <button
                  className={clsx(
                    "transition-colors font-medium text-xl",
                    mostrarSegundaLeitura
                      ? ["font-semibold", getTextColor(cor)]
                      : ["text-gray-500", getHoverText(cor)]
                  )}
                  onClick={() => {
                    setMostrarSegundaLeitura(!mostrarSegundaLeitura)
                    setMostrarPrimeiraLeitura(false)
                    setMostrarSalmo(false)
                    setMostrarEvangelho(false)
                  }}
                >
                  2ª Leitura
                </button>
                {leituras.evangelho.length > 0 && (
                  <span className="text-gray-300 select-none">|</span>
                )}
              </>
            )}

            {/* Evangelho */}
            {leituras.evangelho.length > 0 && (
              <button
                className={clsx(
                  "transition-colors font-medium text-xl",
                  mostrarEvangelho
                    ? ["font-semibold", getTextColor(cor)]
                    : ["text-gray-500", getHoverText(cor)]
                )}
                onClick={() => {
                  setMostrarEvangelho(!mostrarEvangelho)
                  setMostrarPrimeiraLeitura(false)
                  setMostrarSalmo(false)
                  setMostrarSegundaLeitura(false)
                }}
              >
                Evangelho
              </button>
            )}
          </div>

          {/* Primeira Leitura */}
          {mostrarPrimeiraLeitura && (
            <div className={`${getBgWrites(cor)} border-l-[3px] ${getBorder(cor)} gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-6 rounded-lg shadow-sm`}>
              <p className="text-xl md:text-lg font-semibold text-gray-800">
                Primeira Leitura ({leituras.primeiraLeitura[0].referencia})
              </p>
              <p className="text-xl md:text-lg font-semibold text-gray-700">
                {leituras.primeiraLeitura[0].titulo}
              </p>
              <div className="pl-5 italic text-gray-600 text-base md:text-sm leading-relaxed">
                {leituras.primeiraLeitura[0].texto}
              </div>
              <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra do Senhor</p>
              <p className="text-lg md:text-base font-semibold text-gray-800">- Graças a Deus</p>
            </div>
          )}

          {/* Salmo */}
          {mostrarSalmo && (
            <div className={`${getBgWrites(cor)} border-l-[3px] ${getBorder(cor)} gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-6 rounded-lg shadow-sm`}>
              <h2 className="text-xl md:text-lg font-semibold text-gray-800">
                Responsório {leituras.salmo[0].referencia}
              </h2>
              <p className="text-lg md:text-base font-semibold text-gray-700">
                Refrão: {leituras.salmo[0].refrao}
              </p>
              <p className="italic text-gray-600 text-base md:text-sm leading-relaxed">
                {leituras.salmo[0].texto}
              </p>
            </div>
          )}

          {/* Segunda Leitura */}
          {mostrarSegundaLeitura && (
            <div className={`${getBgWrites(cor)} border-l-[3px] ${getBorder(cor)} gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-6 rounded-lg shadow-sm`}>
              <p className="text-xl md:text-lg font-semibold text-gray-800">
                Segunda Leitura ({leituras.segundaLeitura[0].referencia})
              </p>
              <p className="text-xl md:text-lg font-semibold text-gray-700">
                {leituras.segundaLeitura[0].titulo}
              </p>
              <p className="italic text-gray-600 text-base md:text-sm leading-relaxed">
                {leituras.segundaLeitura[0].texto}
              </p>
              <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra do Senhor</p>
              <p className="text-lg md:text-base font-semibold text-gray-800">- Graças a Deus</p>
            </div>
          )}

          {/* Evangelho */}
          {mostrarEvangelho && (
            <div className={`${getBgWrites(cor)} border-l-[3px] ${getBorder(cor)} gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto p-6 rounded-lg shadow-sm`}>
              <p className="text-xl md:text-lg font-semibold text-gray-800">
                Evangelho ({leituras.evangelho[0].referencia})
              </p>
              <h2 className="text-xl md:text-lg font-semibold text-gray-700">
                {leituras.evangelho[0].titulo}
              </h2>
              <p className="italic text-gray-600 text-base md:text-sm leading-relaxed">
                {leituras.evangelho[0].texto}
              </p>
              <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra da Salvação</p>
              <p className="text-lg md:text-base font-semibold text-gray-800">- Glória a vós, Senhor</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Leituras;
