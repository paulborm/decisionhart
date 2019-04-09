import React from "react";
import { CSSTransition } from 'react-transition-group';
import image from "./photo.jpg";

import "./_LoadingIndicator.scss";

export default function LoadingIndicator({ isLoading }) {
    const baseName = "LoadingIndicator";

    return(
        <CSSTransition in={isLoading} timeout={1000} classNames={baseName}>
            <div className={baseName}>
                <img width="400" height="400" src={image} alt="" />
            </div>
        </CSSTransition>
    );
}