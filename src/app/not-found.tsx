"use client"
import React from 'react';
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import {getBasePath} from "@/helper/path";

function NotFound() {
    const basePath = getBasePath()
    return (
        <div>
            <DotLottieReact
                src={`${basePath}/animate/404.lottie`}
                loop
                autoplay
            />
            <p>
                صفحه مورد نظر پیدا نشد
            </p>
        </div>
    );
}

export default NotFound;