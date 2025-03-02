import React, { useState, useEffect } from 'react';

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

    const coresLiturgia = {
      "verde": "text-green-500",
      "branco": "text-white",
      "roxo": "text-purple-500",
      "vermelho": "text-red-500"
    };

    const diasSemana = {
      "2ª feira": "Segunda-feira",
      "3ª feira": "Terça-feira",
      "4ª feira": "Quarta-feira",
      "5ª feira": "Quinta-feira",
      "6ª feira": "Sexta-feira",
      "Sábado": "Sábado",
      "Domingo": "Domingo"
    };
    
    useEffect(() => {
      fetch('https://liturgia.up.railway.app/v2/')
        .then(response => response.json())
        .then(data => {
          console.log("Dados recebidos:", data); // Para depuração
          setLeituras(data.leituras || {}); 
          setLiturgia(data.liturgia || ""); 
          setCor(data.cor || {});
        })
        .catch(error => console.error("Erro ao buscar liturgia:", error));
    }, []);
    
    const formatarLiturgia = (texto) => {
      if (!texto) return "";
      
      // Substituir os dias da semana pelo formato desejado
      let textoFormatado = texto;
      Object.keys(diasSemana).forEach((chave) => {
        if (texto.includes(chave)) {
          textoFormatado = texto.replace(chave, diasSemana[chave]); 
        }
      });
    
      return textoFormatado;
    };
    

    return (
      <>
        <h1 className={`text-2xl font-bold text-left ml-10 pt-5 sm:text-2xl ${
            cor === "Verde" ? "text-green-500" :
            cor === "Branco" ? "text-white" :
            cor === "Vermelho" ? "text-red-500" :
            cor === "Roxo" ? "text-purple-500" :
            "text-gray-500"
      }`}>{formatarLiturgia(liturgia)} | Cor {cor}</h1>
      {/* Contêiner geral */}
      <div className="mt-20 ml-10 relative">
        {/* Botões lado a lado */}
        <div className="flex space-x-2">
          {/* Primeira Leitura */}
          {leituras.primeiraLeitura.length > 0 && (
            <button
              className="bg-yellow-200 text-xl font-bold p-2 border hover:bg-green-300 hover:cursor-pointer rounded-l-md"
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
              className="bg-yellow-200 text-xl font-bold p-2 border hover:bg-green-300 hover:cursor-pointer"
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
              className="bg-yellow-200 text-xl font-bold p-2 border hover:bg-green-300 hover:cursor-pointer"
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
              className="bg-yellow-200 text-xl font-bold p-2 rounded-r-md border hover:bg-green-300 hover:cursor-pointer"
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

        {/* Exibição do conteúdo */}
        {mostrarPrimeiraLeitura && (
          <div className="gap-y-4 grid absolute left-0 p-5 bg-white w-[90%] md:w-[60%] lg:w-[50%]">
            <p className="text-xl font-bold leading-loose">Primeira leitura ({leituras.primeiraLeitura[0].referencia}) {leituras.primeiraLeitura[0].titulo}</p>
            <p className="italic border-l-2 border-gray-400 pl-3 text-lg" 
               dangerouslySetInnerHTML={{ __html: inserirQuebrasDeLinha(leituras.primeiraLeitura[0].texto, 15) }}></p>
            <p className='text-xl mt-10 '>-Palavra do Senhor</p>
            <p className='text-xl font-bold'> -Graças a Deus</p>
          
          </div>
        )}

        {mostrarSalmo && (
          <div className="absolute left-0 mt-2 p-5 bg-white w-[90%] md:w-[60%] lg:w-[50%]">
            <h2 className="text-2xl font-bold">Responsório {leituras.salmo[0].referencia}</h2>
            <p className="text-lg font-semibold">Refrão: {leituras.salmo[0].refrao}</p>
            <p className="italic border-l-2 border-gray-300 pl-3 text-lg"
               dangerouslySetInnerHTML={{ __html: inserirQuebrasDeLinha(leituras.salmo[0].texto, 10) }}></p>
          </div>
        )}

        {mostrarSegundaLeitura && (
          <div className="absolute left-0 mt-2 p-5 bg-white w-[90%] md:w-[60%] lg:w-[50%]">
            <p className="text-xl font-bold">Segunda leitura ({leituras.segundaLeitura[0].referencia})</p>
            <p className="text-xl font-bold">{leituras.segundaLeitura[0].titulo}</p>
            <p className="text-lg italic">{leituras.segundaLeitura[0].texto}</p>
          </div>
        )}

        {mostrarEvangelho && (
          <div className="absolute left-0 mt-2 p-5 bg-white w-[90%] md:w-[60%] lg:w-[50%]">
            <p className="text-lg italic">Evangelho {leituras.evangelho[0].referencia}</p>
            <h2 className="text-2xl font-bold">{leituras.evangelho[0].titulo}</h2>
            <p className="italic border-l-2 border-gray-300 pl-3 text-lg"
               dangerouslySetInnerHTML={{ __html: inserirQuebrasDeLinha(leituras.evangelho[0].texto, 15) }}></p>
          </div>
        )}
      </div>
    </>
  );
};

export default Leituras;
