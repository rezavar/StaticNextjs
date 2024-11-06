import React from 'react';
import Image from "next/image";
import logo from "@/assets/image/footerLogo.png"

function FooterDescription() {
    return (
        <div className={"bg-[#f1f1f1] pt-4 px-20"}>
            <div>
                <Image src={logo} alt={'بامن24'} className={"w-12 inline"} />
                <span className={"font-bold text-lg "}>بامَن 24</span>
            </div>
            <p className={"text-sm pb-6 font-normal"}>
                شرکت ساینا پردازش گسترش شرق در سال 1394 با هدف ارائه خدمات در بستر آنلاین تأسیس گردیده است. بامَن24 یکی از دستاوردهای این شرکت می‌باشد که در زمینه خرید شارژ، بسته اینترنت و پرداخت قبوض (آب، برق، گاز و سایر) فعالیت خود را آغاز کرده است. این سرویس با قالب پنل فروشگاه، وب سایت و اپلیکیشن خدمات خود را در اختیار مخاطبان خود قرار می‌دهد. برای کسب اطلاعات بیشتر می‌توانید با پشتیبانی تماس بگیرید
            </p>
        </div>
    );
}

export default FooterDescription;
