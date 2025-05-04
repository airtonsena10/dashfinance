import Area from "../comum/Area";


import Link from "next/link"

export default function Rodape() {
    return (
        <Area className="bg-black py-20 justify-center">
            <div className="flex flex-col items-center  ">
              
                <div className="mt-3 text-zinc-400 text-center justify-center">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplifica</span> sua vida</div>
                </div>
            </div>
            <div className=" justify-center">
           
                <p className="text-zinc-100 mt-7 md:mt-0 text-center justify-center">
                <Link href="https://www.airtonjs.dev/" target="_blank">
                    <span className="font-bold">A<span className="">irton</span>sena</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </Link>
                </p>
            </div>
        </Area>
    )
}