export enum PeriodoRefeicao {
    CafeManha,
    Almoco,
    CafeTarde,
    Janta,
}

export class Alimentacao {
    constructor(
        private _periodoRefeicao?: PeriodoRefeicao,
        private _horarioInicio?: Date,
        private _horarioFim?: Date,
        private _cardapio?: Prato[],
    ) {
        this._cardapio = [];
    }

    set periodoRefeicao(_periodoRefeicao: PeriodoRefeicao) {
        this._periodoRefeicao = _periodoRefeicao;
    }

    set horarioInicio(_horarioInicio: Date) {
        this._horarioInicio = _horarioInicio;
    }

    set horarioFim(_horarioFim: Date) {
        this._horarioFim = _horarioFim;
    }

    addPrato(_prato: Prato) {
        this._cardapio?.push(_prato);
    }

    resetCardapio() {
        this._cardapio = [];
    }
}

export class Prato {
    constructor(private nome: string, private preco: number) {}
}
