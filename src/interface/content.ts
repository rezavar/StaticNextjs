interface IText {
    mainText: string,
    subText: string,
}

export interface ITextContent {
    header: IText,
    description: IText,
}

export interface IContent  {
    header: IText,
    description: IText,
    img: string,
    imgAlt: string,
}

export interface IContents {
    [key: string]: IContent;
}

export interface IZFlowContentProps {
    content: IContent;
    rtl: boolean;
}

export interface IParagraphHeader {
    headerText: string,
    descriptionText: string,
}
export type IParagraphHeaders = IParagraphHeader[];

export interface ICardImage {
    headerText: string,
    descriptionText: string,
    img:string
}
export type ICardImages = ICardImage[];