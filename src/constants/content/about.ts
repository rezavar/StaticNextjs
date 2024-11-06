import img_charge from "@/assets/image/about/charge.svg"
import img_internet from "@/assets/image/about/internet.svg"
import img_inquiry from "@/assets/image/about/inquiry.svg"
import img_cheque from "@/assets/image/about/cheque.svg"

import { ICardImages} from "@/interface/content";

export const aboutUs :ICardImages = [
    {
        headerText:'خرید شارژ',
        descriptionText:'با روش های متنوع خرید شارژ در هر شرایط زمانی و مکانی که باشید، می توانید به راحتی سیم کارت(همراه اول، ایرانسل، رایتل) خود را شارژ کرده و از خدمات بامَن24 لذت ببرید.',
        img:img_charge
    },
    {
        headerText:'خرید بسته اینترنت',
        descriptionText:'شما فقط با چند کلیک ساده می توانید بسته اینترنت(همراه اول، ایرانسل، رایتل)مقرون به صرفه را برای خود و یا دوستان به صورت آنلاین خریداری کنید.',
        img:img_internet
    },
    {
        headerText:'پرداخت قبض',
        descriptionText:'شما با استفاده از درگاه بانکی می توانید قبوض (آب، برق، تلفن ثابت، تلفن همراه ، قبض دائمی همراه اول) خود را در سریعترین زمان و به صورت ساده و ایمن پرداخت نمایید.',
        img:img_inquiry
    },
    {
        headerText:'چک صیاد',
        descriptionText:'به‌ راحتی و با چند کلیک ساده، چک ها را ثبت کنید ، تایید/رد کنید و وضعیت چک‌های صیادی خود را استعلام کرده و آن‌ها را پیگیری کنید. به این ترتیب، بدون نیاز به مراجعه حضوری، از وضعیت اعتبار چک‌های خود و طرف مقابل مطلع شوید و فرآیندهای مالی خود را امن‌تر و سریع‌تر انجام دهید.',
        img:img_cheque
    },
]