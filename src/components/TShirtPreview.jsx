import React from "react";
import { useTheme } from "../context/ThemeContext";
import { getOverlayStyles } from "../utils/overlayUtils";


import maleLean from '../assets/male-lean.png';
import maleRegular from '../assets/male-regular.png';
import maleAthletic from '../assets/male-athletic.png';
import maleBig from '../assets/male-big.png';

import femaleLean from '../assets/female-lean.png';
import femaleRegular from '../assets/female-regular.png';
import femaleAthletic from '../assets/female-athletic.png';
import femaleBig from '../assets/female-big.png';


export function getTshirtImage(gender, build) {
    if (gender === 'male') {
        switch (build) {
            case 'lean': return maleLean;
            case 'regular': return maleRegular;
            case 'athletic': return maleAthletic;
            case 'big': return maleBig;
            default: return maleRegular;
        }
    } else {
        switch (build) {
            case 'lean': return femaleLean;
            case 'regular': return femaleRegular;
            case 'athletic': return femaleAthletic;
            case 'big': return femaleBig;
            default: return femaleRegular;
        }
    }
}

export default function TShirtPreview({ designImage, customText, build, gender, scale, height, weight }) {
    const { theme } = useTheme();
    const overlayStyles = getOverlayStyles(build);

    return (
        <div className={`relative w-64 h-80 mx-auto border rounded-lg overflow-hidden shadow-md ${theme.className}`}
            style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>

            <img src={getTshirtImage(gender, build)} alt="T-shirt" className="w-full h-full object-cover" />


            {designImage && (
                <img src={designImage} alt="Uploaded Design"
                    className="absolute object-contain"
                    style={{ ...overlayStyles, position: "absolute" }} />
            )}


            {customText && (
                <div
                    className="absolute text-center font-semibold text-sm pointer-events-none"
                    style={{
                        top: overlayStyles.textTop,
                        left: overlayStyles.left,
                        width: overlayStyles.width,
                        fontSize: overlayStyles.fontSize,
                    }}
                >
                    {customText.split("\n").map((line, idx) => <p key={idx}>{line}</p>)}
                </div>
            )}
        </div>
    );
}
