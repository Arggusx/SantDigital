import { useState } from "react";
import instaIcon from '/img2/instagram-icon.png';
import gitIcon from '/img2/github-icon.png';
import whatsIcon from '/img2/whatsapp-icon.png';
import faceIcon from '/img2/facebook-icon.png';
import xIcon from '/img2/x-icon.png';

const Footer = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
        <footer
          className="flex flex-col gap-y-2 items-center pt-6 pb-6 mt-8 bg-gradient-to-b from-yellow-200 via-white to-yellow-300 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
        >
            <div className="flex gap-6 flex-wrap justify-center">
                <a href="">
                <img
                    src={faceIcon}
                    alt="Facebook"
                    className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-125"
                />
                </a>
                <a href="https://wa.me/5582996125491" rel="noopener noreferrer" target="_blank">
                <img
                    src={whatsIcon}
                    alt="WhatsApp"
                    className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-125"
                />
                </a>
                <a href="https://www.instagram.com/douglas_uzu" rel="noopener noreferrer" target="_blank">
                <img
                    src={instaIcon}
                    alt="Instagram"
                    className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-125"
                />
                </a>
                <a href="https://github.com/Arggusx" rel="noopener noreferrer" target="_blank">
                <img
                    src={gitIcon}
                    alt="GitHub"
                    className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-125"
                />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                <img
                    src={xIcon}
                    alt="X"
                    className="w-6 h-6 hover:cursor-pointer transition-transform duration-200 hover:scale-125"
                />
                </a>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            <div className="text-sm md:text-base text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
                © 2025 Digital Sanctum - Douglas/Arggus
            </div>
        </footer>
        </>
    )    
}

export default Footer