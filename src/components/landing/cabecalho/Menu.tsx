import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useContext } from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <header className="bg-[#f7f7f4] py-10 w-full">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-[#3A3A3A] font-bold text-2xl">Dash Finance</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#" className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium">Home</a>
                        <a href="#features" className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium">Funcionalidades</a>
                        <a href="#contact" className="text-[#3A3A3A] hover:text-[#6B5CE7] transition-colors text-sm font-medium">Contato</a>
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
                    <div className="md:hidden flex items-center">
                        <button className="text-[#3A3A3A]" aria-label="Menu">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
