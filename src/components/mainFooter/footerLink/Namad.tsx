import React from 'react';
import Image from "next/image";
import logoPark from "@/assets/image/footerLogoPark.svg";
import logoSadad from "@/assets/image/footerLogoSadad.svg";

function Namad() {
    const cssLinkClass = "flex flex-col items-center justify-center " +
        " h-20 w-20 p-1 rounded-2xl box-content " +
        " bg-white shadow-md m-1 border border-gray-300";
    const cssImgClass = "w-14";
    return (
        <>
            <a href="https://trustseal.enamad.ir/?id=118658&amp;Code=Z282AJQiIvNqfhWSiCfD"
               className={cssLinkClass} target="_blank" data-tooltip="نماد اعتماد الکترونیکی"
               referrerPolicy="origin">
                <Image alt="" src="https://trustseal.enamad.ir/logo.aspx?id=118658&amp;Code=Z282AJQiIvNqfhWSiCfD"
                     className={cssImgClass} id="Z282AJQiIvNqfhWSiCfD"
                     referrerPolicy="origin" style={{cursor: "pointer"}}/>
            </a>
            <a href="https://www.kstp.ir/fa/member/18177" className={cssLinkClass}  target="_blank"
               rel="noopener noreferrer" data-tooltip="پارک علم و فناوری">
                <Image src={logoPark} alt={"پارک علم و فناوری خراسان"} className={cssImgClass}/>
            </a>
            <a href="https://sadadpsp.ir/" className={cssLinkClass}  target="_blank"
               rel="noopener noreferrer" data-tooltip="درگاه سداد">
                <Image src={logoSadad} alt={"درگاه سداد"} className={cssImgClass}/>
            </a>
        </>
    );
}

export default Namad;