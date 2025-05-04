import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import { transacaoVazia } from "@/logic/core/financas/Transacao";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import Cabecalho from "../template/Cabecalho";
import CampoMesAno from "../template/CampoMesAno";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Grade from "./Grade";
import Lista from "./Lista";
import Sumario from "./Sumario";
import { useState } from "react";
import Transacao from "@/logic/core/financas/Transacao";

export default function Financas() {
    const {
        data, alterarData, alterarExibicao, tipoExibicao,
        transacoes, transacao, selecionar, salvar, excluir
    } = useTransacao()
    
    const [modalAberto, setModalAberto] = useState(false)
    const [transacaoAtual, setTransacaoAtual] = useState<Transacao | null>(null)
    
    function criarNovaTransacao() {
       
        setTransacaoAtual(transacaoVazia)
        setModalAberto(true)
    }
    
    function editarTransacao(transacao: Transacao) {
        setTransacaoAtual(transacao)
        setModalAberto(true)
    }
    
    function fecharModal() {
        setModalAberto(false)
        setTransacaoAtual(null)
    }
    
    function salvarTransacao(transacao: Transacao) {
        salvar(transacao)
        fecharModal()
    }
    
    function excluirTransacao(transacao: Transacao) {
        excluir(transacao)
        fecharModal()
    }

    function renderizarControles() {
        return (
            <div className="flex justify-between">
                <CampoMesAno
                    data={data}
                    dataMudou={alterarData}
                />
                <div className="flex gap-5   justify-between">
                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={criarNovaTransacao}
                    >Nova transação</Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>
        )
    }

    function renderizarTransacoes() {
        const props = { 
            transacoes, 
            selecionarTransacao: editarTransacao 
        }
        return tipoExibicao === 'lista' 
            ? <Lista {...props} />
            : <Grade {...props} />
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes} />
                {renderizarControles()}
                {transacoes.length ? (
                    renderizarTransacoes()
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )}
                
                {transacaoAtual && (
                    <Formulario
                        transacao={transacaoAtual}
                        aberto={modalAberto}
                        salvar={salvarTransacao}
                        excluir={excluirTransacao}
                        fechar={fecharModal}
                    />
                )}
            </Conteudo>
        </Pagina>
    )
}