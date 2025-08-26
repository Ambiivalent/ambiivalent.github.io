'use client'

import React from "react"
import { useState, useEffect } from "react"
import { Moon, MoonFilled } from "../ui/icons"


const changeTheme = () => {
  const darkModeOn = document.documentElement.classList.contains("dark")
  if (darkModeOn) {
    localStorage.setItem("theme", "light")
    document.documentElement.classList.remove("dark")
  }
  else {
    localStorage.setItem("theme", "dark")
    document.documentElement.classList.add("dark")
  }
}
export default function themeSetter() {

    useEffect(() => {
        // Get current theme from localStorage
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
            }
        }
        else {
            // Default to system
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add("dark")
            }
        }
    }, [])
    
    return (
        <>
            <div className="dark:hidden block fixed right-0 bottom-0 p-5" onClick={changeTheme}>
                <Moon />
            </div>
            <div className="dark:block hidden fixed right-0 bottom-0 p-5" onClick={changeTheme}>
                <MoonFilled />
            </div>
        </>
    )
}