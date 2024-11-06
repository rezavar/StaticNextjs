"use client"
import React from 'react';
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

function NotFound() {
    return (
        <div>
            <DotLottieReact
                src="./animate/404.lottie"
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