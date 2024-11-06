"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {INavItem, INavItems} from "@/interface/Menu";
import {getFooterMenu} from "@/constants/menu";

function Links() {
    const pathname = usePathname();
    const navs:INavItems = getFooterMenu()

    const cssClass = "text-sm"

    return (
        <div className="footer-link">
            <div className="border-b-[3px] border-b-[#4870f5] pb-2 mb-1.5">
                <span>دسترسی سریع</span>
            </div>
            <ul className="list-disc list-inside text-[#4870f5]">
                {
                    navs.map((nav:INavItem) => (
                        <li className={""} key={'footerLink_'+nav.link}>
                            <Link
                                className={cssClass + ' ' + (nav.link === pathname ? 'text-[#4870f5]':'text-gray-900')}
                                title={nav.title}
                                href={nav.link}
                                target={nav.target}
                            >
                                {nav.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Links;