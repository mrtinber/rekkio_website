import React from "react";

export const BackgroundBlob = () => {
    return (
        <div className="sticky top-0 w-full z-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-screen"
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="50"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0    0 1 0 0 0   0 0 1 0 0   0 0 0 180 -28"
                            result="goo"
                        />
                        {/* <feBlend in="SourceGraphic" in2="goo" /> */}
                    </filter>
                </defs>
            </svg>
            <div
                className="absolute w-full h-screen flex items-center justify-center"
                style={{ filter: "url(#goo)" }}
            >
                <div className="absolute right-[30%] top-[35%] h-[35%] w-[20%] bg-gradient-to-br from-[#0373A6] via-[#0296C6] to-[#A3DAF1] rounded-full animate-blob blur-[10px]"></div>
                <div className="absolute left-[40%] top-[40%] h-[40%] w-[25%] bg-gradient-to-br from-[#05739E] via-[#02324C] to-[#0F1921] rounded-full animate-blob-reverse blur-[10px]"></div>
                <div className="absolute left-[30%] top-[25%] h-[35%] w-[20%] bg-gradient-to-br from-[#FFD8A3] via-[#FA852D] to-[#EA4714] rounded-full animate-blob blur-[10px]"></div>
            </div>
        </div>
    );
};
