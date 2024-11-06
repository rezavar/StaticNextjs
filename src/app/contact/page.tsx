import React from 'react';
import img_hr_o from "@/assets/image/hr-o.png"
import Image from "next/image";

function Contact() {
    return (
        <section className="text-gray-600  lg:px-32  px-14">
            <div className="container py-8 mx-auto">
                <div className="flex flex-col text-center items-center w-full mb-20">
                    <h4 className="text-xl font-medium text-[#4870f5]">
                        اطلاعات تماس با ما
                    </h4>
                    <Image src={img_hr_o} alt={"اطلاعات تماس با ما"} className={"mb-4 w-48 h-1.5"}/>
                    <p className="lg:w-5/6 mx-auto leading-relaxed text-base">
                        وب سایت بامَن24 محصولی از شرکت ساینا پردازش گسترش شرق می باشد، که با هدف ارائه خدمات متمایز و
                        ایجاد حس امن در خرید شارژ، بسته اینترنت، استعلام پرداخت قبوض گام برداشته است. نظرات، انتقادات و
                        پیشنهادات شما همکاران و کاربران محترم موجب بهبود خدمات بامَن24 و دلگرمی ماست.
                    </p>
                </div>
                <div className="flex flex-wrap justify-around text-white text-xs">
                    <div className="lg:w-1/2 min-w-80 flex my-6 lg:px-10 px-4 relative">
                        <span className={"py-4 pr-8 pl-2 w-full inline-block bg-[#4870F5] rounded-l-full"}>
                            خراسان رضوی – کد پستی 9319975827
                        </span>
                        <span className={"absolute  bg-[#4870F5] rounded-full border-4 border-white w-14 h-14 flex -right-2.5 lg:right-3.5 -top-1"}>
                            <svg aria-hidden="true" className={"text-white w-8 m-auto"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"   d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="lg:w-1/2 min-w-80 flex my-6 lg:px-10 px-4 relative">
                        <span className={"py-4 pr-8 pl-2 w-full inline-block bg-[#4870F5] rounded-l-full"}>
                            info[at]baman24[dot]ir
                        </span>
                        <span
                            className={"absolute  bg-[#4870F5] rounded-full border-4 border-white w-14 h-14 flex -right-2.5 lg:right-3.5 -top-1"}>
                            <svg aria-hidden="true" className={"text-white w-8 m-auto"}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="lg:w-1/2 min-w-80 flex my-6 lg:px-10 px-4 relative">
                        <span
                            className={"py-4 pr-8 pl-2 w-full inline-block bg-[#4870F5] whitespace-nowrap rounded-l-full"}>
                            ۰۵۱-۴۱۴۲۴۰۰۰  پاسخگویی در روز های کاری ساعت 8 الی 20
                        </span>
                        <span
                            className={"absolute  bg-[#4870F5] rounded-full border-4 border-white w-14 h-14 flex -right-2.5 lg:right-3.5 -top-1"}>
                            <svg aria-hidden="true" className={"text-white w-8 m-auto"}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                               <path
                                   d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;