type Props = {
    linkUrl?: String;
    func? : () => void;
    compStyle?: Number;
    classExtra?: String;
    symbol: String;
    text: String
}

var styles: String

const style0 = `
    text-lg
    text-black
    active:text-sky-700
    text-shadow-2
    font-semibold
`

const style1 = `
    text-lg
    active:text-sky-50
    text-shadow-2
    font-semibold
`

const Hyperlink = ({linkUrl, func, compStyle = 0, classExtra, symbol, text}: Props) => {
    if (compStyle === 0) {styles = style0 + (classExtra ? classExtra : "")} else {styles = style1 + (classExtra ? classExtra : "")}
    return (
        <div className="
            select-none
            w-fit
        ">
            <a href={linkUrl ? `${linkUrl}` : undefined} onClick={func ? func : undefined} className={`
                w-fit
                pl-[2px]
                flex
                gap-1
                justify-start
                item-center
                cursor-pointer
            ` + styles}>
                <span className="font-symbol font-normal">{symbol}</span>
                {text}
            </a>
        </div>
    );
}

export { Hyperlink };