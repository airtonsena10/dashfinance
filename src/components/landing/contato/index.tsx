import Area from "../comum/Area";


export default function Depoimentos() {
    return (
        <Area id="depoimentos" className={`
           bg-[#f0f0ed]
            py-10 sm:py-20
        `}>
             {/* Contato */}
      <section id="contact" className="py-20 bg-[#F9F8F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3A3A3A] mb-4">Entre em Contato</h2>
            <p className="text-[#6B6B6B] text-lg max-w-3xl mx-auto">
              Tem dúvidas ou sugestões? Nossa equipe está pronta para ajudar
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-[#6B5CE7] focus:border-[#6B5CE7]"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-[#6B5CE7] focus:border-[#6B5CE7]"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-[#6B5CE7] focus:border-[#6B5CE7]"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#6B5CE7] text-white py-3 px-4 rounded-lg hover:bg-[#5D4ED6] transition-colors"
                    >
                      Enviar mensagem
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-[#6B5CE7] p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-8">Informações de contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    {/* <Mail className="h-6 w-6 mr-4" /> */}
                    <span className="text-lg">contato@dashfinace.com.br</span>
                  </div>
                  <div className="flex items-center">
                    {/* <Phone className="h-6 w-6 mr-4" /> */}
                    <span className="text-lg">(11) 99999-9999</span>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="text-xl font-medium mb-6">Siga-nos</h4>
                  <div className="flex space-x-6">
                    <a href="#" className="hover:text-[#E8E5FF] transition-colors">
                      {/* <Instagram className="h-7 w-7" /> */}
                    </a>
                    <a href="#" className="hover:text-[#E8E5FF] transition-colors">
                      {/* <Twitter className="h-7 w-7" /> */}
                    </a>
                    <a href="#" className="hover:text-[#E8E5FF] transition-colors">
                      {/* <Facebook className="h-7 w-7" /> */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Area>
    )
}