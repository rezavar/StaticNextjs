import React from 'react';
import Links from "@/components/mainFooter/footerLink/Links";
import CenterBox from "@/components/mainFooter/footerLink/CenterBox";
import Namad from "@/components/mainFooter/footerLink/Namad";

function FooterLink() {
    return (
        <div className="grid grid-cols-3 gap-1 justify-items-center px-20 pt-3.5">
            <div className="justify-self-start">
               <Links />
            </div>
            <div className="footer-image">
               <CenterBox />
            </div>
            <div className="grid grid-cols-3">
               <Namad />
            </div>
        </div>
    );
}

export default FooterLink;