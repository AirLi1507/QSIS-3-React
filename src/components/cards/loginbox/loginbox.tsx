import { Hyperlink } from "../../hyperlinks/hyperlink";
import { Button } from "../../inputs/button/button";
import { PasswordView } from "../../inputs/passwordView/passwordView";
import { Textbox } from "../../inputs/textbox/textbox";
import { Logo } from "../../brand/logo/logo";
import { Card } from "../card";
import { AppTitle } from "../../brand/appTitle/appTitle";
import { auth } from "../../functions/auth";
import { useNavigate } from "react-router-dom";

const Loginbox = () => {
    const navigate = useNavigate();
    return (
        <Card compStyle={1}>
            <div className="brand w-fit mt-8 flex flex-col">
                <Logo logoSize={40}/>
                <AppTitle/>
            </div>
            <form className="
                w-full
                m-0
                mt-3
            ">
                <Textbox inputType="text" symbol="tag" placeholder="Username" autoComp="username" compStyle={1} classExtra="mt-[2px] mb-2"></Textbox>
                <Textbox inputType="password" symbol="key" placeholder="Password" autoComp="current-password" compStyle={1} classExtra="mt-3 mb-2">
                    <PasswordView/>
                </Textbox>
                <Hyperlink func={()=>{navigate("/recovery")}} symbol="help" text="Forget Password" compStyle={1} classExtra="mb-1 mt-3"/>
                <Button func={()=>(auth({
                    username: document.querySelectorAll("input")[0].value,
                    password: document.querySelectorAll("input")[1].value
                }))} compStyle={1} text="Login" />
            </form>
        </Card>
    );
}

export { Loginbox };