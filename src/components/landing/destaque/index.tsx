import Area from "../comum/Area";
import Slogan from "./Slogan";


export default function Destaque() {
    return (
        <Area id="inicio" className="pt-20 bg-[#f1f1f0] ">
            <div className={`
                flex items-center justify-around
                h-[500px]
            `}>
                <Slogan />
               
            </div>
        </Area>
    )
}   