import React from 'react';
import {ITextContent} from "@/interface/content";

function HeaderDesc(props: ITextContent) {

    const headerMainText = props.header.mainText;
    const headerSubText = props.header.subText;
    const DescriptionMainText = props.description.mainText;
    const DescriptionSubText = props.description.subText;

    return (
        <div className={"text-justify flex-1"}>
            <h2 className={"-indent-2 mb-1.5 pb-1 border-b inline-block text-lg"}>
                {
                    headerMainText && <><b>{headerMainText}</b><br/></>
                }
                {
                    headerSubText && headerSubText
                }
            </h2>
            <p className={""}>
                {
                    DescriptionMainText && DescriptionMainText
                }
                {
                    DescriptionSubText && DescriptionSubText
                }
            </p>
        </div>
    );
}

export default HeaderDesc;