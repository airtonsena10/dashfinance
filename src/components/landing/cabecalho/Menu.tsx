import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useContext } from 'react' 
import MenuItem from './MenuItem'

export default function Menu() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <header className="bg-[#f7f7f4] py-6 md:py-10 w-full shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-[#3A3A3A] font-bold text-2xl">Dash Finance</span>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-10">
                        <a
                            href="#"
                            className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium"
                        >
                            Funcionalidades
                        </a>
                        <a
                            href="#contact"
                            className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium"
                        >
                            Contato
                        </a>
                        <MenuItem
                            onClick={loginGoogle}
                            className="bg-gradient-to-r from-indigo-600 to-cyan-600"
                        >
                            <div className="flex items-center gap-2">
                                <IconBrandGoogle size={15} />
                                <span>Entrar</span>
                            </div>
                        </MenuItem>
                    </div>

                 
                    <div className="md:hidden">
                        <MenuItem
                            onClick={loginGoogle}
                            className="bg-gradient-to-r from-indigo-600 to-cyan-600 py-2 px-3"
                        >
                            <div className="flex items-center gap-2">
                                <IconBrandGoogle size={15} />
                                <span>Entrar</span>
                            </div>
                        </MenuItem>
                    </div>
                </div>
            </nav>
        </header>
    )
}
