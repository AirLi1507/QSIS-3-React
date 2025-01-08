import { useNavigate } from "react-router-dom";
import { AppTitle } from "../../brand/appTitle/appTitle";
import { Logo } from "../../brand/logo/logo";
import { Hyperlink } from "../../hyperlinks/hyperlink";
import { Card } from "../card";

const Notfound = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-404 bg-cover w-full h-full shadow-custom-inner-1 flex justify-center items-center overflow-scroll">

            <Card>
                <div className="w-full h-full bg-sky-200/50 blur-[4px] scale-105 absolute -z-10"></div>
                <div className="brand w-full mt-8 flex flex-col items-center mb-landscape:w-fit">
                    <Logo logoSize={40}/>
                    <AppTitle/>

                </div>
                <div className="
                    w-full
                ">
                    <div className="w-full mt-2 flex flex-col justify-center">
                        <span className="text-2xl text-center text-rose-600 text-shadow-2 font-semibold select-none mt-3">404 - Not Found</span>
                        <span className="text-3xl text-center select-none mt-3">🤔</span>
                        <span className="text-xl text-center text-sky-50 text-shadow-2 font-semibold select-none mt-1">How did you get here?</span>
                    </div>
                    <div className="w-full mt-5 flex">
                        <Hyperlink func={()=>{navigate("/")}} symbol="arrow_back" compStyle={1} text="Go Back"/>
                    </div>
                </div>

            </Card>

        </div>

    );
}

export { Notfound };