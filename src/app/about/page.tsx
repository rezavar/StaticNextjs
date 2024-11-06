import React from 'react';
import Image from "next/image";
import img_hr_o from "@/assets/image/hr-o.png";
import {aboutUs} from "@/constants/content/about";
import CardImage from "@/components/content/CardImage";
import {ICardImage} from "@/interface/content";

function About() {
    return (
        <section className="text-gray-600  lg:px-32  px-14 mb-9">
            <div className="container pt-8 mx-auto">
                <div className="flex flex-col text-center items-center w-full mb-8">
                    <h4 className="text-xl font-medium text-[#4870f5]">
                        خدمات بامَن24
                    </h4>
                    <Image src={img_hr_o} alt={"اطلاعات تماس با ما"} className={"mb-4 w-48 h-1.5"}/>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap -m-4">
                    {
                        aboutUs.map((item:ICardImage,i:number)=>(
                                <div className="p-4 xl:w-1/4 md:w-1/2 w-full"  key={'about' + i}>
                                    <CardImage {...item}/>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
);
}

export default About;