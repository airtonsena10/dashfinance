import Area from "../comum/Area";

import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <Area className="bg-[#f7f7f4]">
            <div className="flex items-center justify-between h-20">
              
                <Menu />
            </div>
            
        </Area>
    )
}