import iconWhats from '../assets/img/whatsapp-icon.png';
import iconInsta from '../assets/img/instagram-icon.png';
import iconX from '../assets/img/x-icon.png';
import iconGit from '../assets/img/github-icon.png';
import { useState } from "react";

const Footer = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
        <footer 
            style={{ boxShadow: "0px -5px 10px rgba(0,0,0,0.3)" }} 
            className="flex flex-col gap-y-2 pb-4 items-center pt-5 bg-gradient-to-b via-white to-yellow-300 from-yellow-200">
                <div className='flex gap-5'>
                    <a href="">
                        <img src="/public/img2/facebook-icon.png" alt="Facebook" rel="noopener noreferrer" target='_blank' className="w-5 h-5 hover:cursor-pointer transition-transform duration-200 hover:scale-110"/>
                    </a>
                    <a href="https://wa.me/5582996125491" rel="noopener noreferrer" target='_blank'>
                        <img src={iconWhats} alt="WhatsApp" className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-110"/>
                    </a>
                    <a href="https://www.instagram.com/douglas_uzu" rel="noopener noreferrer" target='_blank'>
                        <img src={iconInsta} alt="Instagram" className="w-5 h-5 hover:cursor-pointer transition-transform duration-200 hover:scale-110"/>
                    </a>
                    <a href="https://github.com/Arggusx" rel="noopener noreferrer" target='_blank'>
                        <img src={iconGit} alt="GitHub" className="w-5 h-5 hover:cursor-pointer transition-transform duration-200 hover:scale-110"/>
                    </a>
                    <a href="">
                        <img src={iconX} alt="X" rel="noopener noreferrer" target='_blank' className="w-5 h-5 hover:cursor-pointer transition-transform duration-200 hover:scale-110"/>
                    </a>    
                </div> 

                <div className="text-sm text-blue-900 font-semibold">
                    © 2025 Digital Sanctum - Douglas/Arggus
                </div>

                <button 
                  className="fixed md:bottom-25 md:right-35 bottom-27 right-4 hover:cursor-pointer bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all"
                  onClick={() => setShowForm(true)}
                >
                    <span>💬</span>
                    <span className='hidden md:inline'>Enviar Feedback</span>
                </button>

        {/* Modal do Formulário */}
        {showForm && (
            <div style={{ background: "rgba(0, 0, 0, 0.7)" }} className="fixed inset-0 bg-gray-500 flex justify-center items-center">
                <div className="bg-white p-5 rounded-lg shadow-md md:w-90 w-70 h-[60%]">
                    <h2 className="text-lg font-semibold mb-3">Enviar Feedback</h2>
                    <h1 className='p-3 mb-4 bg-gray-200 rounded-2xl'>Escreva abaixo sua sugestão do que precisa ser modificado ou do que pode ser melhorado.</h1>
                    <form action="https://formspree.io/f/mqapqejd" method="POST">
                        <textarea 
                            name="message" 
                            className="w-full p-2 border rounded" 
                            placeholder="Digite seu feedback..." 
                            required 
                        >       
                        </textarea>
                        <button 
                          type="submit" 
                          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600 w-full"
                        >
                          Enviar
                        </button>
                    </form>
                    <button 
                        className="mt-2 text-red-500 w-full hover:cursor-pointer text-center" 
                        onClick={() => setShowForm(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        )}
        </footer>
        </>
    )    
}

export default Footer