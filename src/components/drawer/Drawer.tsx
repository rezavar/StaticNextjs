import React from "react";

import {SvgClose} from "@/assets/icons/icons";

interface DrawerProps {
    direction?: "right" | "bottom";
    children: React.ReactNode;
    closeOnClick?:boolean,
    isOpen: boolean;
    toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ direction = "right",closeOnClick=true, isOpen, toggleDrawer, children }) => {

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={closeOnClick?toggleDrawer:()=>{}}
            >
            </div>
            <div
                className={`fixed z-50 bg-white shadow-lg transition-transform duration-300 ${
                    direction === "right"
                        ? "top-0 right-0 h-full w-64 rounded-l-2xl"
                        : "bottom-0 left-0 w-full h-64 rounded-t-2xl"
                } ${isOpen ? "transform translate-x-0 translate-y-0" : direction === "right" ? "transform translate-x-full" : "transform translate-y-full"}`}
            >
                <div onClick={toggleDrawer} className={"p-1 py-2 text-gray-500 bg-blue-500"}>
                   <SvgClose className="w-6 h-6" />
                </div>
                <div className="">{children}</div>
            </div>
        </>
    );
};

export default Drawer;
