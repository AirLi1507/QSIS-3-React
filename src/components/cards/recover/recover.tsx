import { useNavigate } from "react-router-dom";
import { AppTitle } from "../../brand/appTitle/appTitle";
import { Logo } from "../../brand/logo/logo";
import { Hyperlink } from "../../hyperlinks/hyperlink";
import { Textbox } from "../../inputs/textbox/textbox";
import { Card } from "../card";
import { Button } from "../../inputs/button/button";

const Recover = () => {
    const navigate = useNavigate()
    return (
        <Card>
            <div className="brand w-fit mt-8 flex flex-col">
                <Logo logoSize={40}/>
                <AppTitle/>
            </div>
            <form className="
                w-full
                m-0
                mt-1
            ">
                <div className="w-full flex justify-center"><span className="text-xl text-rose-600 text-shadow-2 font-semibold select-none">Account Recovery Process</span></div>
                <Textbox inputType="text" symbol="tag" placeholder="Username" autoComp="username" compStyle={0} classExtra="mt-4"></Textbox>
                <Button func={()=>{alert("recover")}} compStyle={0} text={"Recover"} classExtra={"mt-3"}/>
                <Hyperlink func={()=>{navigate("/login")}} symbol={"arrow_back"} text={"Go Back"} classExtra={"mt-3"} />
            </form>
        </Card>
    );
}

export { Recover };