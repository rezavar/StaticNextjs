import img_bio from "@/assets/image/content/bio.svg"
import img_charge from "@/assets/image/content/charge.svg"
import img_internet from "@/assets/image/content/internet.svg"
import img_inquiry from "@/assets/image/content/bill-inquiry.svg"
import img_cheque from "@/assets/image/content/cheque.svg"

import {IContents} from "@/interface/content";

export const contents :IContents = {
    main:{
        header:{
            mainText:"بامَن 24؛",
            subText:"سامانه‌ای جامع برای پرداخت‌های الکترونیکی و مدیریت خدمات ارتباطی و مالی",
        },
        description:{
            mainText:"سامانه بامَن 24 فعالیت خود را با هدف ساده‌سازی فرآیندهای پرداخت و ارائه خدمات متنوع ارتباطی و " +
                " مالی آغاز کرده است. بامَن 24 با در نظر گرفتن نیازهای روز کاربران، امکاناتی چون خرید شارژ، خرید " +
                "   بسته اینترنت، استعلام و پرداخت قبوض، و مدیریت چک‌های صیاد را به کاربران ارائه می‌دهد تا در هر ",
            subText:"",
        },
        img:img_bio,
        imgAlt:'فعالیت های بامن24'
    },
    charge:{
        header:{
            mainText:"خرید شارژ",
            subText:"",
        },
        description:{
            mainText:"بامَن 24 علاوه بر استعلام قبض و پرداخت برای مشترکین سیم کارت های اعتباری، خرید شارژ سیم کارت های تمامی اپراتورها (همراه اول، ایرانسل و رایتل) را در هر شرایط زمانی و مکانی را برای شما عزیزان امکان پذیر نموده است.",
            subText:"",
        },
        img:img_charge,
        imgAlt:'خدمات شارژ'
    },
    internet:{
        header:{
            mainText:"خرید بسته اینترنت",
            subText:"",
        },
        description:{
            mainText:"مقرون به صرفه ترین طرح های اینترنت و پرتخفیف ترین بسته ها را در سامانه بامَن 24 خریداری کنید. بسته های شگفت انگیز برای کاربران سیم کارتهای اعتباری، دائمی و TD LTE به همراه طرح های مناسبتی و دوره ای ویژه.",
            subText:"",
        },
        img:img_internet,
        imgAlt:'خدمات بسته اینترنت'
    },
    inquiry:{
        header:{
            mainText:"استعلام و پرداخت قبوض",
            subText:"",
        },
        description:{
            mainText:"در بامَن 24 می‌توانید اقدام به استعلام قبض و پرداخت آن از هر سازمانی مانند آب، برق، گاز و تلفن نمایید. پرداخت قبوض تلفن های همراه، جرایم رانندگی، پرداخت مالیات و عوارض شهرداری از دیگر خدمات سامانه بامن24 می باشد.",
            subText:"",
        },
        img:img_inquiry,
        imgAlt:'خدمات استعلام و قبض'
    },
    cheque:{
        header:{
            mainText:"چک صیاد:",
            subText:"",
        },
        description:{
            mainText:"ثبت و مدیریت چک‌های صیاد در سامانه بامَن 24، امکان ثبت، تأیید یا رد چک‌های صیاد و همچنین انتقال آن‌ها به راحتی فراهم شده است. این خدمت به شما اجازه می‌دهد تا تمامی مراحل مربوط به چک‌های صیاد خود را به صورت آنلاین و در هر زمان مدیریت کنید. با بامَن 24، پیگیری و کنترل چک‌های صیاد سریع‌تر و ساده‌تر از همیشه خواهد بود.",
            subText:"",
        },
        img:img_cheque,
        imgAlt:'خدمات چک صیاد'
    },
}