import React from 'react'
import { useState, useEffect } from 'react'

// Função "Separar texto e inserir de quebra de linha"
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
const leituras = () => {
    const [mostrarPrimeiraLeitura, setMostrarPrimeiraLeitura] = useState(false);
    const [mostrarSalmo, setMostrarSalmo] = useState(false);
    const [mostrarSegundaLeitura, setMostrarSegundaLeitura] = useState(false);
    const [mostrarEvangelho, setMostrarEvangelho] = useState(false);

    const [leituras, setleituras] = useState({
      primeiraLeitura: [],
      salmo: [],
      segundaLeitura: [],
      evangelho: [],
      extras: []
    });
  
    useEffect(() => {
      fetch('https://liturgia.up.railway.app/v2/')
        .then(response => response.json())
        .then(data => setleituras(data.leituras || {})) // Corrige o acesso à API
        .catch(error => console.error("Erro ao buscar leituras:", error));
    }, []);
  
    return (
      <div className="p-4">
      <h1 className="text-2xl font-bold text-center pt-20">leituras do Dia</h1>
        <p className="text-gray-700 text-center mt-2">Aqui estarão as leituras diárias da liturgia.</p>
        
        
        <div className='flex justify-center relative'>
        
        {/* Primeira Leitura */}
          {leituras.primeiraLeitura.length > 0 && (
              <div className='relative'>
                <button className=' text-xl font-bold mt-10 bg-green-500 p-2 border-t border-b border-l text-nowrap hover:bg-green-300 hover:cursor-pointer' 
                        onClick={() => {setMostrarPrimeiraLeitura(!mostrarPrimeiraLeitura);
                                        setMostrarSegundaLeitura(false);
                                        setMostrarEvangelho(false);
                                        setMostrarSalmo(false);
                        }}>
                        1º Leitura
                </button>
                {mostrarPrimeiraLeitura && (
                  <div className="text-nowrap absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-5 bg-white text-left flex flex-col items-start w-[90%] md:w-[60%] lg:w-[50%] space-y-4">
                    <p className='text-xl font-bold mt-10'>Primeira leitura ({leituras.primeiraLeitura[0].referencia})</p>
                    <p className='text-xl font-bold mt-10'>{leituras.primeiraLeitura[0].titulo}</p>
                    <p className="text-lg" dangerouslySetInnerHTML={{ __html: inserirQuebrasDeLinha(leituras.primeiraLeitura[0].texto, 15) }}></p>
                  </div>
                )}

              </div>
          )}

          {/* Salmo */}
          {leituras.salmo.length > 0 && (
            <div>
              <button className='text-xl font-bold mt-10 bg-green-500 p-2 border hover:bg-green-300 hover:cursor-pointer' 
                      onClick={() => {setMostrarSalmo(!mostrarSalmo)
                                      setMostrarEvangelho(false);
                                      setMostrarSegundaLeitura(false);
                                      setMostrarPrimeiraLeitura(false);
                      }}>
                      Salmo
              </button>
              {mostrarSalmo && (
                <div className="absolute left-0 right-0 top-full mt-2">
                  <h2 className='text-2xl font-bold mt-10'>Responsório {leituras.salmo[0].referencia}</h2>
                  <p className='text-lg font-semibold'>Refrão: {leituras.salmo[0].refrao}</p>
                  <p className='text-lg'>{leituras.salmo[0].texto}</p>
                </div>
              )}

            </div>
          )}

          {/* Segunda Leitura (se existir) */}
          {leituras.segundaLeitura.length > 0 && (
            <div>
              <button className='text-xl font-bold mt-10 bg-green-500 p-2 border-t border-b border-r hover:bg-green-300 hover:cursor-pointer' 
                      onClick={() => {setMostrarSegundaLeitura(!mostrarSegundaLeitura)
                                      setMostrarEvangelho(false);
                                      setMostrarSalmo(false);
                                      setMostrarPrimeiraLeitura(false);
                      }}>
                      2º Leitura
              </button>
                {mostrarSegundaLeitura && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-5 bg-white text-left flex flex-col items-start w-[90%] md:w-[60%] lg:w-[50%] space-y-4">
                    <p className='text-xl font-bold mt-10'>Segunda leitura ({leituras.segundaLeitura[0].referencia})</p>
                    <p className='text-xl font-bold mt-10'>{leituras.segundaLeitura[0].titulo}</p>
                    <p className='text-lg'>{leituras.segundaLeitura[0].texto}</p>
                  </div>
                )}
            </div>
          )}

          {/* Evangelho */}
          {leituras.evangelho.length > 0 && (
            <div>
              <button className='text-xl font-bold mt-10 mb-10 bg-green-500 p-2 border-t border-b border-r hover:bg-green-300 hover:cursor-pointer' 
                      onClick={() => {setMostrarEvangelho(!mostrarEvangelho)
                                      setMostrarSegundaLeitura(false);
                                      setMostrarSalmo(false);
                                      setMostrarPrimeiraLeitura(false);
                      }}>
                      Evangelho
              </button>
              {mostrarEvangelho && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 p-5 bg-white text-left flex flex-col items-start w-[90%] md:w-[60%] lg:w-[50%] space-y-4">
                  <p>Evangelho {leituras.evangelho[0].referencia}</p>
                  <p>-Aleluia, Aleluia, Aleluia.</p>
                  <p>-Sou o Caminho, a Verdade e a Vida, ninguém vem ao Pai, senão por mim.</p>
                  <h2 className='text-2xl font-bold mt-10'>{leituras.evangelho[0].titulo}</h2>
                  <p>-Glória a vós, Senhor.</p>
                  <p className='text-lg'>{leituras.evangelho[0].texto}</p>
                  <p>-Palavra da Salvação</p>
                  <p>-Glória a vós senhor</p>	
                </div>
              )}
              
            </div>
          )}
        </div>
      </div>
    );
  }

export default leituras
