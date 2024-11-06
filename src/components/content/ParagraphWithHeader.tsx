import React from 'react';
import {IParagraphHeader} from "@/interface/content";

function HeaderDesc(props: IParagraphHeader) {

    const descriptionText = props.descriptionText;
    const headerText = props.headerText;

    return (
        <p className={"text-justify pb-4"}>
                {
                    headerText && <><b>{headerText}</b><br/></>
                }
                {
                    descriptionText && descriptionText
                }
        </p>
    );
}

export default HeaderDesc;