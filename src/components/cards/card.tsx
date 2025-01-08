type Props = {children: React.ReactNode; compStyle?: Number}

let styles: string

const style0 = `
    w-[300px]
    mb-landscape:w-[62.5vw]
    backdrop-blur-md
    rounded-2xl
    shadow-custom-1
    p-4
    mb-landscape:pl-1.5
    mb-landscape:scale-[.85]
`

const style1 = `
    text-cyan-700
    w-[290px]
    h-fit
    mb-landscape:w-[62.5vw]
    bg-sky-300/20
    border-2
    border-sky-200/30
    rounded-xl
    shadow-custom-1
    backdrop-blur-[6px]
    p-3
    mb-landscape:pl-1.5
    mb-landscape:scale-[.85]
`

const Card = ({children, compStyle = 0}: Props) => {
    if (compStyle === 0) {styles = style0} else if (compStyle === 1) {styles = style1}
    return (
        <div className={"cards flex flex-col mb-landscape:flex-row justify-center items-center overflow-hidden duration-300" + styles}>
            {children}
        </div>
    );
}

export { Card };