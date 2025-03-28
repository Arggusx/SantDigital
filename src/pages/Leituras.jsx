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

  // Aplica as cores litúrgicas
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
      Roxo: "bg-purple-400"
    };
  
    return colors[cor] || "bg-gray-300 text-gray-500";
  }
  function getHoverBgColor(cor) {
    const colors = {
      Verde: "bg-green-300",
      Branco: "bg-white-300",
      Vermelho: "bg-red-300",
      Roxo: "bg-purple-800"
    };
  
    return colors[cor] || "bg-gray-300 text-gray-500";
  }
    

  return (

    // Botões

    <div className="bg-gradient-to-r from-gray-100 to-blue-100 pt-22 min-h-screen py-8">
  <div className="md:w-[80%] mx-auto bg-white shadow-md rounded-b-lg overflow-hidden">
    {/* Título Principal */}
    <div
      id="title2"
      className="bg-gradient-to-r from-gray-100 to-blue-100 font-serif font-bold text-4xl md:text-3xl text-gray-800 flex flex-col pl-6 md:pl-10 pt-8 pb-6"
    >
      {formatarLiturgia(liturgia)}
      <div className="mt-2">
        <span className="text-xl md:text-lg">Cor: </span>
        <span className={`${getTextColor(cor)} text-xl md:text-lg font-bold`}>{cor}</span>
      </div>
    </div>

    {/* Container de Leituras */}
    <div className="pt-6 pl-5 md:pl-10 pb-10 bg-gray-50 md:bg-transparent">
      {/* Botões Lado a Lado */}
      <div
        className={clsx(
          "flex flex-wrap gap-3 md:gap-4 pb-8",
          mostrarPrimeiraLeitura || mostrarSalmo || mostrarSegundaLeitura || mostrarEvangelho ? "pb-8" : "pb-20"
        )}
      >
        {/* Primeira Leitura */}
        {leituras.primeiraLeitura.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-white text-xl md:text-base font-semibold px-4 py-2 rounded-l-full shadow-md hover:${getHoverBgColor(
              cor
            )} hover:text-white transition-all duration-200`}
            onClick={() => {
              setMostrarPrimeiraLeitura(!mostrarPrimeiraLeitura);
              setMostrarSegundaLeitura(false);
              setMostrarEvangelho(false);
              setMostrarSalmo(false);
            }}
          >
            1ª Leitura
          </button>
        )}

        {/* Salmo */}
        {leituras.salmo.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-white text-xl md:text-base font-semibold px-4 py-2 shadow-md hover:${getHoverBgColor(
              cor
            )} hover:text-white transition-all duration-200`}
            onClick={() => {
              setMostrarSalmo(!mostrarSalmo);
              setMostrarEvangelho(false);
              setMostrarSegundaLeitura(false);
              setMostrarPrimeiraLeitura(false);
            }}
          >
            Salmo
          </button>
        )}

        {/* Segunda Leitura */}
        {leituras.segundaLeitura.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-white text-xl md:text-base font-semibold px-4 py-2 shadow-md hover:${getHoverBgColor(
              cor
            )} hover:text-white transition-all duration-200`}
            onClick={() => {
              setMostrarSegundaLeitura(!mostrarSegundaLeitura);
              setMostrarEvangelho(false);
              setMostrarSalmo(false);
              setMostrarPrimeiraLeitura(false);
            }}
          >
            2ª Leitura
          </button>
        )}

        {/* Evangelho */}
        {leituras.evangelho.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-white text-xl md:text-base font-semibold px-4 py-2 rounded-r-full shadow-md hover:${getHoverBgColor(
              cor
            )} hover:text-white transition-all duration-200`}
            onClick={() => {
              setMostrarEvangelho(!mostrarEvangelho);
              setMostrarSegundaLeitura(false);
              setMostrarSalmo(false);
              setMostrarPrimeiraLeitura(false);
            }}
          >
            Evangelho
          </button>
        )}
      </div>

      {/* Primeira Leitura */}
      {mostrarPrimeiraLeitura && (
        <div className="gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white p-6 rounded-lg shadow-sm">
          <p className="text-xl md:text-lg font-semibold text-gray-800">
            Primeira Leitura ({leituras.primeiraLeitura[0].referencia})
          </p>
          <p className="text-xl md:text-lg font-semibold text-gray-700">
            {leituras.primeiraLeitura[0].titulo}
          </p>
          <div className="border-l-4 border-gray-400 pl-5 italic text-gray-600 text-base md:text-sm leading-relaxed">
            {leituras.primeiraLeitura[0].texto}
          </div>
          <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra do Senhor</p>
          <p className="text-lg md:text-base font-semibold text-gray-800">- Graças a Deus</p>
        </div>
      )}

      {/* Salmo */}
      {mostrarSalmo && (
        <div className="gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-lg font-semibold text-gray-800">
            Responsório {leituras.salmo[0].referencia}
          </h2>
          <p className="text-lg md:text-base font-semibold text-gray-700">
            Refrão: {leituras.salmo[0].refrao}
          </p>
          <p className="border-l-4 border-gray-400 pl-5 italic text-gray-600 text-base md:text-sm leading-relaxed">
            {leituras.salmo[0].texto}
          </p>
        </div>
      )}

      {/* Segunda Leitura */}
      {mostrarSegundaLeitura && (
        <div className="gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white p-6 rounded-lg shadow-sm">
          <p className="text-xl md:text-lg font-semibold text-gray-800">
            Segunda Leitura ({leituras.segundaLeitura[0].referencia})
          </p>
          <p className="text-xl md:text-lg font-semibold text-gray-700">
            {leituras.segundaLeitura[0].titulo}
          </p>
          <p className="border-l-4 border-gray-400 pl-5 italic text-gray-600 text-base md:text-sm leading-relaxed">
            {leituras.segundaLeitura[0].texto}
          </p>
          <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra do Senhor</p>
          <p className="text-lg md:text-base font-semibold text-gray-800">- Graças a Deus</p>
        </div>
      )}

      {/* Evangelho */}
      {mostrarEvangelho && (
        <div className="gap-y-3 grid w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white p-6 rounded-lg shadow-sm">
          <p className="text-xl md:text-lg font-semibold text-gray-800">
            Evangelho ({leituras.evangelho[0].referencia})
          </p>
          <h2 className="text-xl md:text-lg font-semibold text-gray-700">
            {leituras.evangelho[0].titulo}
          </h2>
          <p className="border-l-4 border-gray-400 pl-5 italic text-gray-600 text-base md:text-sm leading-relaxed">
            {leituras.evangelho[0].texto}
          </p>
          <p className="text-lg md:text-base text-gray-700 mt-4">- Palavra da Salvação</p>
          <p className="text-lg md:text-base font-semibold text-gray-800">- Glória a vós, Senhor</p>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default Leituras;
