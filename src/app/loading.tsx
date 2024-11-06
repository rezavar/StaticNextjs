import React from 'react';

function Loading() {
    return (
        <>
            <div className="absolute inset-0 bg-blue-600 opacity-20 z-50 ">

            </div>
            <div className="absolute inset-0 z-40 opacity-100 flex items-center justify-center">
                <div
                    className="w-16 h-16 rounded-full animate-[1.5s_linear_infinite_spin] border-4 border-dashed border-indigo-500 border-t-transparent"></div>

            </div>
        </>
    );
}

export default Loading;