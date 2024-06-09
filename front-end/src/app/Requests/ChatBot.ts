export interface ChatBot {
    id?: string;
    title: string,
    siteInfo: siteInfo,
    userId: string
}

interface siteInfo {
    siteName:string,
    category:string,
    imgSrc:string
}