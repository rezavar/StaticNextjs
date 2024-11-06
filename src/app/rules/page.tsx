import React from 'react';
import HeaderDesc from "@/components/content/ParagraphWithHeader";
import {rules} from "@/constants/content/rules";
import {IParagraphHeader} from "@/interface/content";

function Rules() {

    return (
        <div className={"mx-36 mt-6 mb-8 p-5 border border-stone-50 shadow-2xl rounded-xl"}>
            <div className={"[&>*>b]:text-blue-600 [&>*]:text-sm [&>*]:leading-6"}>
                <HeaderDesc descriptionText={''} headerText={'تعاریف'}/>
                {
                    rules.map((rule:IParagraphHeader,i)=> <HeaderDesc {...rule} key={'rule'+i} />)
                }
            </div>
        </div>
    );
}

export default Rules;