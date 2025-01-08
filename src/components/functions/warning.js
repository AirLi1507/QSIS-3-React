const Warntext = (text, element) => {
    const span = document.createElement("span")
    span.classList.add(...["text-md", "text-rose-600", "text-shadow-2", "warntext"]);
    span.innerText = text
    element?.after(span)
}

const rmWarntext = () => {document.querySelectorAll(".warntext").forEach((e)=>{e.remove()})}

export { Warntext, rmWarntext };