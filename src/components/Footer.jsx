import { useState } from "react";

const Footer = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <footer
                className="flex flex-col gap-y-2 items-center pt-6 pb-6 mt-8 bg-amber-700"
            >
                <div className="flex gap-6 flex-wrap justify-center">
                    <a href="https://wa.me/5582996125491" rel="noopener noreferrer" target="_blank">
                        <i class="text-2xl fa-brands fa-whatsapp hover:cursor-pointer transition-transform duration-200 hover:scale-125"></i>
                    </a>
                    <a href="https://www.instagram.com/douglas_uzu" rel="noopener noreferrer" target="_blank">
                        <i class="text-2xl fa-brands fa-instagram hover:cursor-pointer transition-transform duration-200 hover:scale-125"></i>
                    </a>
                    <a href="https://github.com/Arggusx" rel="noopener noreferrer" target="_blank">
                        <i className="text-2xl fa-brands fa-github hover:cursor-pointer transition-transform duration-200 hover:scale-125"></i>
                    </a>

                </div>

                <div className="text-xs md:text-md text-amber-100  italic hover:text-amber-200 transition-colors duration-200">
                    © 2025 Digital Sanctum - Douglas/Arggusx
                </div>
            </footer>
        </>
    )
}

export default Footer