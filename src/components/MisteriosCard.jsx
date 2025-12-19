import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MisteriosCard({
    title,
    children,
    buttonClass = "",
    contentClass = "",
    childrenClass = "",
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-center flex flex-col items-center">
            {/* BOTÃO */}
            <button
                onClick={() => setOpen(!open)}
                className={`${open ? "rounded-t-lg border-l-[3px] border-t-[3px] border-r-[3px]" : "rounded-lg border-l-[3px] "} ${buttonClass}`}
            >
                <span className="text-md md:text-xl font-serif text-left font-bold ">{title}</span>

                <motion.svg
                    className="w-4 h-4 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </motion.svg>
            </button>

            {/* CONTEÚDO */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`${open ? "rounded-b-lg" : "rounded-lg"} ${contentClass}`}
                    >
                        <div>
                            <ol className={`${childrenClass}`}>
                                {children}
                            </ol>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
