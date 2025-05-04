import ForcarAutenticacao from "../autenticacao/ForcarAutenticacao"

interface PaginaProps {
  externa?: boolean
  children: any
  className?: string
}

export default function Pagina(props: PaginaProps) {
  function renderizar() {
    return (
        <div className={`
            flex flex-col min-h-screen
              bg-gradient-to-r from-neutral-900 via-neutral to-zinc-600
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}

return props.externa ? renderizar() : (
    <ForcarAutenticacao>
        {renderizar()}
    </ForcarAutenticacao>
)

}
