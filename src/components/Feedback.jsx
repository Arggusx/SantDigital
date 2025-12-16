import { useState } from "react";
const Feedback = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="flex justify-end bottom-15 mr-10 mt-6 sticky">
        <button
          className="hover:cursor-pointer  bg-sky-500 text-white md:mr-0 mr-5 text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
          onClick={() => setShowForm(true)}
        >
          <span>💬</span>
          <span className='hidden md:inline'>Enviar Feedback</span>
        </button>
      </div>



      {showForm && (
        <div
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
          className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md md:max-w-lg h-auto max-h-[70vh] flex flex-col">
            {/* Título */}
            <h2 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-4">
              Enviar Feedback
            </h2>

            {/* Mensagem Informativa */}
            <div className="p-4 mb-4 bg-gray-100 rounded-2xl text-gray-700 text-sm md:text-base leading-relaxed">
              Escreva abaixo sua sugestão do que precisa ser modificado ou do que pode ser melhorado.
            </div>

            {/* Formulário */}
            <form action="https://formspree.io/f/mqapqejd" method="POST" className="flex flex-col">
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-inner text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Digite seu feedback..."
                required
              ></textarea>

              {/* Botão Enviar */}
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
              >
                Enviar
              </button>

              {/* Botão Cancelar */}
              <button
                className="mt-3 text-red-600 hover:text-red-700 hover:underline text-sm md:text-base transition-colors duration-200"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </>

  )
}

export default Feedback
