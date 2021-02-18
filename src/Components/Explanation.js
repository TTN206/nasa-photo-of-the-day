import React from "react";

export default function Explanation( props ){

    const { info } = props;

    return (
        <div>
            <p>{ info }</p>
        </div>
    )

}