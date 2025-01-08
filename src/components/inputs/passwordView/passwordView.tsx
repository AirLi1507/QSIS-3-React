import React from "react";

const view = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (event.currentTarget.innerText === "visibility") {
        event.currentTarget.innerText = "visibility_off"
        event.currentTarget.previousElementSibling?.setAttribute("type","text")
    } else {
        event.currentTarget.innerText = "visibility"
        event.currentTarget.previousElementSibling?.setAttribute("type","password")
    }
}

const PasswordView = () => {
    return (
        <span className="font-symbol text-2xl select-none cursor-pointer mr-2" onClick={(e)=>{view(e)}}>visibility</span>
    );
}

export { PasswordView };