import React from "react";

export const Increaser = ({ size, height, width, ...props }) => {
    return (
        <svg
            width={size || width || 42} 
            height={size || height || 42} 
            viewBox="0 0 42 42" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0C18.282 0 16 2.224 16 4.941V16H4.941C2.224 16 0 18.282 0 21C0 23.718 2.224 26 4.941 26H16V37.059C16 39.776 18.282 42 21 42C23.718 42 26 39.776 26 37.059V26H37.059C39.776 26 42 23.718 42 21C42 18.282 39.776 16 37.059 16Z" fill="white"/>
        </svg>
    )
}