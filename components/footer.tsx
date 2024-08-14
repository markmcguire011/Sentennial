"use client";

import NavItem from "@/components/navbar"
import Link from "next/link"

function Footer(){
    return (
        <div className="border-t-2 px-[calc(12vw)]">
            <div className="flex justify-between p-6 gap-10">
                <Link href={"/"}>
                    <svg className="xs:flex hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z" stroke="#1E1E1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0295 11 11 15.0294 11 20C11 24.9706 15.0295 29 20 29Z" stroke="#1E1E1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <div className="flex gap-5">
                    <div className="flex items-center">
                        <Link href={"/articles"} className="opacity-75 hover:opacity-100">Articles</Link>
                    </div>
                    <div className="flex items-center">
                        <Link href={"/musings"} className="opacity-75 hover:opacity-100">Musings</Link>
                    </div>
                    <div className="flex items-center">
                        <Link href={"/about"} className="opacity-75 hover:opacity-100">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer