import React from 'react';

function FooterAddress() {
    return (
        <div className="flex flex-wrap px-20 py-3.5 text-xs text-slate-700	">
            <div className={"flex flex-wrap text-center md:w-2/3  w-full md:pb-0 pb-8"}>
                <span className="md:w-1/3 w-full px-2 md:border-l border-gray-300 md:pb-0 pb-2.5 text-right">
                    پاسخگویی در روزهای کاری از ساعت 8 الی 20
                </span>
                <span className="md:w-1/3  w-full px-2 md:border-l border-gray-300 md:pb-0 pb-2.5">
                    خراسان رضوی – کد پستی 9319975827
                </span>
                <span className="md:w-1/3  w-full px-2">
                   شماره تماس :   <span className={'inline-block'} style={{direction: 'ltr'}}>۰۵۱-۴۱۴۲۴۰۰۰</span>
                </span>
            </div>
            <span className="flex flex-wrap md:w-1/3  w-full px-4">
                <div className="  w-1/2 px-1">
                    ما را در شبکه های اجتماعی دنبال کنید
                </div>
                <div className="  w-1/2 px-1 flex justify-around">
                    <a href="https://www.instagram.com/bamanofficial/" className="social-logo" target="_blank"
                       rel="noopener noreferrer">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/ba.man.169405" className="social-logo" target="_blank"
                       rel="noopener noreferrer">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://t.me/baman24" className="social-logo" target="_blank" rel="noopener noreferrer">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             className="w-5 h-5" viewBox="0 0 24 24">
                        <path id="telegram-1"
                              d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
                        </svg>
                    </a>
                </div>
            </span>
        </div>
    );
}

export default FooterAddress;