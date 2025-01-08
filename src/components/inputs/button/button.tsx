import React from "react"

const btnClick = (event: React.MouseEvent<HTMLButtonElement>, func: ()=>void) => {
    event.preventDefault()
    func()
}

type Props = {
    func: ()=>void;
    compStyle?: number;
    classExtra?: string;
    text: string;
}

let styles: string

const style0 = [`
    text-gray-700
    bg-zinc-100
    hover:bg-gray-700
    hover:text-neutral-50
    hover:border-gray-800
    border-[2px]
    border-gray
    rounded-[10px]
    duration-[250ms]
`]

const style1 = [`
    bg-zinc-50/30
    hover:bg-teal-500/75
    hover:text-blue-50
    active:text-blue-50
    border-[0.85px]
    border-blue-300
    rounded-lg
    duration-300
`]

const Button = ({func, compStyle = 0, classExtra, text}: Props) => {
    if (compStyle === 0) {styles = style0[0] + (classExtra ? classExtra : "")} else {styles = style1[0] + (classExtra ? classExtra : "")}
    return (
        <div className={"w-full" + styles}>
            <button onClick={(e)=>(btnClick(e,func))} className="
                text-xl
                select-none
                font-bold
                w-full
                bg-transparent
                outline-none
                p-2
                py-[10px]
            ">
                {text}
            </button>
        </div>
    );
}

export { Button };