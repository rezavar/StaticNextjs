import React from 'react';
import {IZFlowContentProps} from "@/interface/content";
import Image from "next/image";
import HeaderDesc from "@/components/content/HeaderDesc";

function ZFlowContents(props: IZFlowContentProps) {
    const { content, rtl } = props;

    const cssClassImg = "w-3/4  min-w-64"

    return (
        <article className={"flex lg:flex-row flex-col gap-7 items-center justify-items-center my-12"}>

            <HeaderDesc header={content.header} description={content.description} />
            <div className={"flex-1 " + (rtl ? ' lg:order-first':'')} >
                <Image className={cssClassImg+' '} src={content.img} alt={content.imgAlt}/>
            </div>

        </article>
    );
}

export default ZFlowContents;