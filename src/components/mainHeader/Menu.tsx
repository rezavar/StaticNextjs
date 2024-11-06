"use client"

import React from 'react';
import Link from "next/link";
import logo from "@/assets/image/headerLogo.png"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {INavItem, INavItems} from "@/interface/Menu";
import {getMainMenu} from "@/constants/menu";

function Menu() {

    const pathname = usePathname();
    const selectedCssClass = "border-b-[3px] border-[#ffce4a] text-[#ffce4a]"
    const cssClass = "mr-4 py-2 cursor-pointer hover:text-gray-200";

    const navs:INavItems = getMainMenu()

    return (
        <header className="body-font bg-[#353d425e]">
            <div className="container  mx-auto flex flex-wrap px-4 py-2.5 flex-col md:flex-row items-center">
                <Link  href="/" className={"flex items-center text-white mr-3.5 "}>
                    <Image  src={logo} alt="بامَن 24"/>
                    <span className="ml-3 font-semibold leading-8 text-lg">بامَن 24</span>
                </Link>

                <nav
                    className="md:ml-auto md:mr-7 md:pl-4  flex flex-wrap items-center text-base justify-center">
                    {
                        navs.map((nav:INavItem) => (
                                <Link
                                    key={'navKey_'+nav.link}
                                    className={cssClass+' '+(nav.link===pathname?selectedCssClass:'')}
                                    title={nav.title}
                                    href={nav.link}
                                    target={nav.target}
                                >
                                    {nav.text}
                                </Link>
                        ))
                    }
                </nav>
                <Link className="bg-white rounded-full text-[#4870F5] border
                cursor-pointer font-bold text-lg py-1.5 text-center px-6
                 hover:bg-[#0000] hover:text-white hover:border-[1px]"
                href={"/panel/login"} target={"_blank"}
                >
                    ورود نمایندگان
                </Link>
            </div>
        </header>
    );
}

export default Menu;