"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { TbSunFilled } from "react-icons/tb";
import { TbMoonFilled } from "react-icons/tb";

const Navbar = () => {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const currentTheme = theme === 'system'? systemTheme:theme

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
  return (
    <>
        <header className="w-full fixed top-0 border-b z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <a className="p-3 bg-dark dark:bg-light">
                        <Image
                            src={ currentTheme === "dark" ? "/logo-light.webp" : "/logo-dark.webp" }
                            alt="Muzammil Ansari Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                    <nav className="flex items-center justify-center">
                    <a className="mx-3 text-xs font-semibold">WORK</a>
                    <a className="mx-3 text-xs font-semibold">ABOUT</a>
                    </nav>
                </div>
                <button className="p-3 border-0 focus:outline-none">
                    {currentTheme === 'dark'? <TbSunFilled onClick={()=>setTheme("light")} /> : <TbMoonFilled onClick={()=>setTheme("dark")} /> }
                </button>
            </div>
        </header>
    </>
  )
}

export default Navbar