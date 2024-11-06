import React from 'react';
import FooterCopy from "@/components/mainFooter/FooterCopy";
import FooterDescription from "@/components/mainFooter/FooterDescription";
import FooterAddress from "@/components/mainFooter/FooterAddress";
import FooterLink from "@/components/mainFooter/footerLink/FooterLink";

function Footer() {
    return (
        <footer className={"bg-[#f7f7f7]"}>
            <FooterLink />
            <FooterAddress />
            <FooterDescription />
            <FooterCopy />
        </footer>
    );
}

export default Footer;