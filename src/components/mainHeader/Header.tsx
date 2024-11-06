import React from 'react';
import Menu from "@/components/mainHeader/Menu";
import bgImg from "@/assets/image/headerBG.svg"
import headerLogo from "@/assets/image/headerLogo2.png"
import Image from "next/image";

function Header() {
    return (
        <header className={"bg-[#4870f5] text-white rounded-b-[3rem] shadow-lg"}>
            <Menu />
            <div
                className={"text-center"}
                style={{
                    backgroundImage: `url(${bgImg.src})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"86%",
                    backgroundPosition:"center top",
                }}

            >
                <div className={'pt-20 pb-10'}>
                    <div className={'flex justify-center items-center'}>
                        <Image src={headerLogo} alt={'بامن24'} className={"w-10 ml-3"}/>
                        <h1 className={'text-2xl'}>بامن24، پنل هوشمند خدمات اینترنتی</h1>
                    </div>
                    <div className={'mt-2.5 text-gray-300'}>
                        <h2>سامانه پرداخت استعلام و قبض، خرید شارژ، اینترنت و خدمات چک صیاد</h2>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;