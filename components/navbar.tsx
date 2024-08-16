"use client";

import Link from "next/link"
import React, { useState } from 'react'

function NavItem({text, onClick} : { text: string, onClick: () => void }) {
    return (
        <div className="flex p-[8px] justify-center items-center gap-[8px]">
            <Link href={"/" + text.toLocaleLowerCase()} className="opacity-75 hover:opacity-100" onClick={onClick}>
                {text}
            </Link>
        </div>
    )
}

function NavList({onClick}: {onClick: () => void}) {
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-end items-center content-center gap-[8px] flex-[1_0_0%]">
            <NavItem text={"Articles"} onClick={onClick}/>
            <NavItem text={"Musings"} onClick={onClick}/>
            <NavItem text={"About"} onClick={onClick}/>
            {/* <NavItem text={"Newsletter"} onClick={onClick} /> */}
        </div>
    )
}

function NewsletterForm() {
    return (
        <div className="flex items-start gap-[12px]">
            <input placeholder="ikant@metaphysical.org" type="text" className="flex w-[260px] py-[10px] px-[14px] items-center rounded-[10px] border-sloid border-2"/>
            <button className="flex p-[10px] content-center items-center g-[12px] rounded-[10px] hover:rounded-[18px] duration-300 border-solid border-2 bg-[#4D88B8]">
                <h1 className="text-white ">
                    Submit
                </h1>
            </button>
        </div>
    )
}

function LogoButton() {
    return (
    <Link href="/">
        <div className="flex justify-center items-center gap-[10px] self-stretch">
            <div className="w-[40px] h-[40px]">
                <div className="w-[40px] h-[30px] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z" stroke="#4D88B8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <h1 className="leading-7 font-semibold">
                Sentennial.
            </h1>
        </div>
    </Link>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    } 

    return (
        <nav className="p-4 border-b-2">
            <div className="container max-w-[1200px] mx-auto flex justify-between items-center text-black">
                <LogoButton />
                <div className="hidden md:flex space-x-4">
                    <NavList onClick={handleLinkClick}/>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-black flex flex-col items-center justify-center">
                    <NavList onClick={handleLinkClick}/>
                </div>
            )}
        </nav>
    )
}

export default Navbar;