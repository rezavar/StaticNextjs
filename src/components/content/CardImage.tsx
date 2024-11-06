import React from 'react';
import {ICardImage} from "@/interface/content";
import Image from "next/image";

function CardImage(props: ICardImage) {

    const descriptionText = props.descriptionText;
    const headerText = props.headerText;
    const img = props.img;

    return (
        <div className="bg-gray-100 p-6 rounded-lg grid grid-rows-[10rem_2rem_auto] h-full">
            <Image
                className={"h-3/4 max-w-36 rounded object-cover object-center mb-6 mx-auto"}
                src={img}
                alt={headerText}/>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{headerText}</h2>
            <p className="leading-relaxed text-base">
                {descriptionText}
            </p>
        </div>
    );
}

export default CardImage;