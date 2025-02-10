"use client";
import { useState } from "react"
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { SiGithub } from "react-icons/si";

import PokemonImg from "../assets/img/pokemon.webp";

import { motion, AnimatePresence } from "framer-motion";

import { NavItemsProps } from "../types";

const NavItems: React.FC<NavItemsProps> = ({ closeMenu }) => (
    <ul className="flex flex-col items-center gap-0 lg:flex-row lg:gap-6 relative z-20 w-full">
        {navLinks.map(({ id, href, name }) => (
            <li
                key={id}
                className="md:text-white text-black text-base hover:text-yellow-400 transition-all duration-500  w-full whitespace-nowrap font-medium">
                <Link to={href} onClick={closeMenu || undefined} className="block w-full py-3 lg:py-0 border-b border-customRed lg:border-b-0">
                    {name}
                </Link>
            </li>
        ))}
    </ul>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuVariants = {
        hidden: { x: "-100%", opacity: 0 }, // Fuera de la pantalla a la izquierda
        visible: { x: "0%", opacity: 1 }, // Totalmente visible
        exit: { x: "-100%", opacity: 0 }, // Deslizándose hacia afuera
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-customRed">
            <div className="header-lower">
                <div className="container">
                    <div className="flex justify-between lg:relative items-center h-16 lg:h-18">
                        <div className="flex gap-x-16">
                            <Link to="/" title="Go to Homepage" aria-label="Homepage">
                                <img src={PokemonImg} alt="Pokemon Img" className="h-10 w-full" />
                            </Link>
                            <nav className="lg:flex hidden">
                                <NavItems closeMenu={null} />
                            </nav>
                        </ div>


                        <div className="flex items-center">
                            <a
                                href="https://github.com/BenjaminVeli/react-pokemon-crud"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my Repository"
                                className="lg:flex hidden"
                            >
                                <SiGithub className="h-8 w-8 text-white hover:text-yellow-400 transition-colors duration-200" />
                            </a>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex relative w-6 h-6"
                            aria-label="Toggle Menu"
                        >
                            <motion.span
                                className="absolute right-0 top-[3px] block h-0.5 w-6 rounded-full bg-white"
                                animate={{
                                    rotate: isOpen ? 45 : 0,
                                    y: isOpen ? 8 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute right-0 top-[11px] block h-0.5 w-6 rounded-full bg-white"
                                animate={{
                                    opacity: isOpen ? 0 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute right-0 bottom-[3px] block h-0.5 w-6 rounded-full bg-white"
                                animate={{
                                    rotate: isOpen ? -45 : 0,
                                    y: isOpen ? -8 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </button>

                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute z-20 w-full h-screen bg-white"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <nav className="px-5">
                                <NavItems closeMenu={closeMenu} />
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header