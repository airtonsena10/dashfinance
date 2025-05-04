import "dayjs/locale/pt-br"
import Transacao from "@/logic/core/financas/Transacao";
import Dinheiro from "@/logic/utils/Dinheiro";
import { Button, Group, Modal, Radio, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao";
import useFormulario from "@/data/hooks/useFormulario";

interface FormularioModalProps {
    transacao: Transacao
    aberto: boolean
    salvar?: (transacao: Transacao) => void
    excluir?: (transacao: Transacao) => void
    fechar: () => void
}

export default function FormularioModal(props: FormularioModalProps) {
    const { dados, alterarAtributo } = useFormulario<Transacao>(props.transacao)

    return (
        <Modal
            opened={props.aberto}
            onClose={props.fechar}
            title="Formulário de Transação"
            size="md"
            centered
        >
            <div className="flex flex-col gap-4">
                <TextInput
                    label="Descrição"
                    value={dados.descricao}
                    onChange={alterarAtributo('descricao')}
                />
                <TextInput
                    label="Valor"
                    value={Dinheiro.formatar(dados.valor)}
                    onChange={alterarAtributo('valor', Dinheiro.desformatar)}
                />
                <DatePickerInput
                    label="Data"
                    value={dados.data}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY"
                    onChange={alterarAtributo('data')}
                />
                <Radio.Group
                    value={dados.tipo}
                    onChange={alterarAtributo('tipo')}
                >
                    <Group>
                        <Radio value={TipoTransacao.RECEITA} label="Receita" />
                        <Radio value={TipoTransacao.DESPESA} label="Despesa" />
                    </Group>
                </Radio.Group>
                
                <div className="flex gap-3 mt-4">
                    <Button
                        className="bg-green-500" color="green"
                        onClick={() => props.salvar?.(dados)}
                    >Salvar</Button>
                    <Button
                        className="bg-zinc-500" color="gray"
                        onClick={props.fechar}
                    >Cancelar</Button>
                    <div className="flex-1"></div>
                    {props.transacao.id && (
                        <Button
                            className="bg-red-500" color="red"
                            onClick={() => props.excluir?.(props.transacao)}
                        >Excluir</Button>
                    )}
                </div>
            </div>
        </Modal>
    )
}