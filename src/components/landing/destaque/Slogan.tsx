import Image from "next/image";
import principal from "../../../../public/principal.jpg"

export default function Slogan() {
  return (
    <section className="py-20 md:py-32 bg-[#f1f1f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#575656] leading-tight mb-6">
              Gerencie suas Finanças Pessoais com Facilidade
            </h1>
            <p className="text-[#6B6B6B] text-lg mb-10">
              Tome o controle da sua vida financeira com nosso dashboard intuitivo. 
              Monitore gastos, planeje seu orçamento e alcance seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                className="bg-[#6B5CE7] text-white hover:bg-[#5D4ED6] px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all"
                onClick={() => window.location.href = '#features'}
              >
                Começar agora
               
              </button>
              <button 
                className="border border-[#6B5CE7] text-[#6B5CE7] hover:bg-[#6B5CE7] hover:text-white px-8 py-3 rounded-full font-medium transition-all"
                onClick={() => window.location.href = '#features'}
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F5D3C8] rounded-full opacity-60 blur-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#C8E1F5] rounded-full opacity-60 blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-3 md:p-3 transform transition-transform hover:scale-[1.02] duration-300">
                <Image
                width={100}
                height={100}
                  src={principal}
                  alt="Dashboard Preview" 
                  className="w-full rounded-xl shadow-sm"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
