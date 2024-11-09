import React from "react";

function addWidthAndHeight(className:string):string{

    if(!className.includes('w-'))
        className+= ' w-6'
    if(!className.includes('h-'))
        className+= ' h-6'

    return className;
}

export const SvgBar = ({ className = "" }: { className?: string }) => {
    className = addWidthAndHeight(className)
    return (
        <svg
            className={className}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
        >
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
    )
}

export const SvgClose = ({ className = "" }: { className?: string }) => {
    className = addWidthAndHeight(className)
    return (
        <svg
            className={className}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
        >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
    )
}