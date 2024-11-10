import React from 'react';
import Links from "@/components/mainFooter/footerLink/Links";
import CenterBox from "@/components/mainFooter/footerLink/CenterBox";
import Namad from "@/components/mainFooter/footerLink/Namad";

function FooterLink() {
    return (
        <div className="grid md:grid-cols-[1fr_8rem_1fr] grid-cols-[1fr_1fr] gap-1 justify-items-center lg:px-20 md:px-8 px-6 pt-3.5">
            <div className="justify-self-start">
               <Links />
            </div>
            <div className="footer-image">
               <CenterBox />
            </div>
            <div className="grid grid-cols-3 md:col-span-1 col-span-3">
               <Namad />
            </div>
        </div>
    );
}

export default FooterLink;