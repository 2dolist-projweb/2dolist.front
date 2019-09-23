import { ItemLista } from './itemLista';

export interface Lista {
    id: number;
    descricao: string;
    prioridade: number;
    observacao: string;

    tarefas: ItemLista[];
}