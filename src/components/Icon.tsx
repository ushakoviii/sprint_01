import SvgSprite from "../icons/SvgSprite.svg";
import React from "react";

type IconPropsType = {
    width?: string;
    height?: string;
    viewBox?: string;
    iconId?: string;
}
export function Icon(props: IconPropsType) {
    return (
        <svg width={props.width} height={props.height} viewBox={props.viewBox} >
            <use xlinkHref={`${SvgSprite}#${props.iconId}`}/>
        </svg>
    )
}