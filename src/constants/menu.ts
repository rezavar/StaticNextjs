import {INavItems,INavItem} from "@/interface/Menu";

const navs:INavItems = [
    {
        title:'home page',
        link:'/',
        text:'صفحه اصلی',
        target:'_self'
    },
    {
        title:'contact us',
        link:'/contact/',
        text:'تماس با ما',
        target:'_self'
    },
    {
        title:'about company',
        link:'/about/',
        text:'درباره ما',
        target:'_self'
    },
    {
        title:'rules',
        link:'/rules/',
        text:'قوانین',
        target:'_self'
    },
    {
        title:'weblog',
        link:'/blog/',
        text:'وبلاگ',
        target:'_blank'
    },
]

export function getMainMenu(){
    return navs.filter((item: INavItem) => item.title !== 'rules');
}

export function getFooterMenu(){
    return navs;
}