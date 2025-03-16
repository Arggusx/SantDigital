import React, { useState, useEffect } from 'react';

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
      Verde: "bg-green-300",
      Branco: "bg-white-300",
      Vermelho: "bg-red-300",
      Roxo: "bg-purple-300"
    };
  
    return colors[cor] || "bg-gray-300 text-gray-500";
  }
    

  return (
    <>

        {/* Desfoque */}

          <div
            id="title2"
            className={`font-bold text-left text-4xl mt-10 md:mt-20 px-5 py-2 text-gray-800 z-10`}
            // style={{ textSdadow: '3px 2px 3px rgba(128, 0, 128, 0.5)' }}
          >
            {formatarLiturgia(liturgia)}ﾠ-ﾠCor: 
            <span className={`${getTextColor(cor)}`}>ﾠ{cor}</span>
          </div>


      
    <div className="mt-5 ml-5 sm:ml-5 md:ml-10">

      {/* Botões lado a lado */}
      <div className="flex space-x-2">

        {/* Primeira Leitura */}
        {leituras.primeiraLeitura.length > 0 && (
          <button
            className={`text-xl ${getBgColor(cor)} font-bold px-2 py-1 border hover:text-yellow-400 hover:bg-gray-400 hover:cursor-pointer rounded-l-xl`}
            onClick={() => {
              setMostrarPrimeiraLeitura(!mostrarPrimeiraLeitura);
              setMostrarSegundaLeitura(false);
              setMostrarEvangelho(false);
              setMostrarSalmo(false);
            }}
          >
            1º Leitura
          </button>
        )}
        
        {/* Salmo */}
        {leituras.salmo.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-xl font-bold px-2 border hover:text-yellow-400 hover:bg-gray-400 hover:cursor-pointer`}
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
            className={`${getBgColor(cor)} text-xl font-bold px-2 border hover:text-yellow-400 hover:bg-gray-400 hover:cursor-pointer`}
            onClick={() => {
              setMostrarSegundaLeitura(!mostrarSegundaLeitura);
              setMostrarEvangelho(false);
              setMostrarSalmo(false);
              setMostrarPrimeiraLeitura(false);
            }}
          >
            2º Leitura
          </button>
        )}

        {/* Evangelho */}
        {leituras.evangelho.length > 0 && (
          <button
            className={`${getBgColor(cor)} text-xl font-bold px-2 rounded-r-xl border hover:text-yellow-400 hover:bg-gray-400 hover:cursor-pointer`}
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

      {mostrarPrimeiraLeitura && (
        <div className="gap-y-4 grid left-0 p-5 w-[90%] md:w-[60%] lg:w-[50%]">
          <p className="text-xl font-semibold leading-loose">Primeira leitura ({leituras.primeiraLeitura[0].referencia})</p>
          <p className='text-xl font-semibold pb-5'> {leituras.primeiraLeitura[0].titulo}</p>
            <div className="border-l-2 border-gray-500 pl-7">
              <p className="italic font-serif text-gray-700 leading-relaxed text-justify">
                    {leituras.primeiraLeitura[0].texto}
              </p>
          </div>
 
          <p className='text-xl mt-10 '>-Palavra do Senhor</p>
          <p className='text-xl font-semibold'> -Graças a Deus</p>
        </div>
      )}
      {mostrarSalmo && (
        <div className="left-0 mt-2 p-5  w-[90%] md:w-[60%] lg:w-[50%]">
          <h2 className="text-xl font-semibold mb-5">Responsório {leituras.salmo[0].referencia}</h2>
          <p className="text-xl font-semibold mb-5">Refrão: {leituras.salmo[0].refrao}</p>
          <p className="italic border-l-2 text-gray-700 border-gray-500 pl-7 md:text-lg leading-relaxed">
            {leituras.salmo[0].texto}
          </p>
        </div>
      )}
      {mostrarSegundaLeitura && (
        <div className="left-0 mt-2 p-5 w-[90%] md:w-[60%] lg:w-[50%]">
          <p className="text-xl font-bold">Segunda leitura ({leituras.segundaLeitura[0].referencia})</p>
          <p className="text-xl font-bold">{leituras.segundaLeitura[0].titulo}</p>
          <p className="text-lg italic leading-relaxed">{leituras.segundaLeitura[0].texto}</p>
          <p className='text-xl mt-10 '>-Palavra do Senhor</p>
          <p className='text-xl font-semibold'> -Graças a Deus</p>
        </div>
      )}
      {mostrarEvangelho && (
        <div className="left-0 mt-2 p-5 w-[90%] md:w-[60%] lg:w-[50%]">
          <p className="text-xl font-semibold mb-5">Evangelho {leituras.evangelho[0].referencia}</p>
          <h2 className="text-xl font-semibold mb-5">{leituras.evangelho[0].titulo}</h2>
          <p className="italic border-l-2 pl-7 border-gray-500 text-gray-700 md:text-lg mb-5 leading-relaxed">{leituras.evangelho[0].texto}</p>
          <p className='text-xl'>- Palavra da Salvação</p>
          <p className='font-semibold text-xl'>- Glória a vós, Senhor</p>   
        </div>
      )}
    </div>
  </>
  );
};

export default Leituras;
