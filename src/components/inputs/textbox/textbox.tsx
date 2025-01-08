import { useEffect } from "react"
import { rmWarntext } from "../../functions/warning"
import { isPropertySignature } from "typescript"

const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentElParentNext = event.currentTarget.parentElement?.nextElementSibling as HTMLElement
    if (event.key === "Enter") {
        event.preventDefault()
        if (currentElParentNext.childNodes[0].nodeName === "SPAN") {
            if ((currentElParentNext.childNodes[0] as Element).nextElementSibling?.nodeName === "INPUT") {
                ((currentElParentNext.childNodes[0] as Element).nextElementSibling as HTMLInputElement).focus()
            } else {(currentElParentNext.nextElementSibling?.childNodes[0] as HTMLElement).focus()}
        } else if (currentElParentNext.childNodes[0].nodeName === "INPUT") {
            (currentElParentNext.childNodes[0] as HTMLElement).focus()
        } else if (currentElParentNext.childNodes[0].nodeName === "A") {
            if (currentElParentNext.nextElementSibling?.childNodes[0].nodeName === "BUTTON") {
                (currentElParentNext.nextElementSibling?.childNodes[0] as HTMLButtonElement).click()
            }
        }
    }
}

type Props = {
    children?: React.ReactNode;
    compStyle?: number;
    classExtra?: string;
    symbol?: string;
    placeholder?: string;
    inputType: string;
    autoComp: string;
}

var styles: string
var stylesIcon: string

const style0 = [`
    text-gray-700
    bg-zinc-100
    hover:bg-neutral-50
    focus-within:bg-white
    border-[2px]
    border-gray
    rounded-[10px]
`, `
    border-r-gray-700
`]

const style1 = [`
    bg-zinc-50/30
    hover:bg-gray-50/50
    focus-within:bg-gray-50/50
    border-[0.85px]
    border-blue-300
    rounded-lg
    duration-150
`, `
    border-r-cyan-700
`]

const Textbox = ({children, classExtra, compStyle = 0, symbol, placeholder, inputType, autoComp}: Props) => {
    useEffect(()=>{
        document.querySelectorAll(".placeholderSymbol").forEach((e: Element)=>{if (e.innerHTML === "") {e.remove()}})
    },[])

    if (compStyle === 0) {styles = style0[0] + (classExtra ? classExtra : "")} else {styles = style1[0] + (classExtra ? classExtra : "")}
    if (compStyle === 0) {stylesIcon = style0[1]} else {stylesIcon = style1[1]}

    return (
        <div
        onClick={(e)=>{rmWarntext(); document.querySelectorAll("input").forEach((e: Element)=>{e.parentElement?.classList.remove("border-rose-600/75")})}}
        className={"w-full flex items-center" + styles}>
            <span className={"text-xl select-none placeholderSymbol font-symbol ml-2 border-r-[1.5px] pr-[.375rem]" + stylesIcon}>{symbol}</span>
            <input autoCapitalize="none" type={inputType} autoComplete={autoComp} placeholder={placeholder} onKeyDown={(e) => {enter(e)}} className="
                text-xl
                tracking-normal
                select-none
                w-full
                bg-transparent
                outline-none
                p-2
            " />
            {children}
        </div>
    );
}

export { Textbox };