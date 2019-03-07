import React from "react";

export default function Container(props) {
    return (
        <div style={{margin: "auto", width: "50%", padding: "2%"}}>
            {props.children}
        </div>
    );
}