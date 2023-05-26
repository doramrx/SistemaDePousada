import { Alimentacao, PeriodoRefeicao, Prato } from "./alimentacao";

export class AlimentacaoBuilder {
    private _alimentacao = new Alimentacao();

    constructor() {}

    reset() {
        this._alimentacao = new Alimentacao();
        return this;
    }

    resetCardapio() {
        this._alimentacao.resetCardapio();
        return this;
    }

    iniciaEm(inicio: Date) {
        this._alimentacao.horarioInicio = inicio;
        return this;
    }

    terminaEm(termino: Date) {
        this._alimentacao.horarioFim = termino;
        return this;
    }

    servidoNoPeriodo(periodoRefeicao: PeriodoRefeicao) {
        this._alimentacao.periodoRefeicao = periodoRefeicao;
        return this;
    }

    servirOmelete() {
        this._alimentacao.addPrato(new Prato("Omelete", 7.5));
        return this;
    }

    servirIogurteComGranola() {
        this._alimentacao.addPrato(new Prato("Iogurte com granola", 4.8));
        return this;
    }

    servirMistoQuente() {
        this._alimentacao.addPrato(new Prato("Misto-quente", 6.4));
        return this;
    }

    servirCafe() {
        this._alimentacao.addPrato(new Prato("Café", 3.9));
        return this;
    }

    servirCha() {
        this._alimentacao.addPrato(new Prato("Chá de camomila", 2.5));
        return this;
    }

    servirToddynho() {
        this._alimentacao.addPrato(new Prato("Toddynho", 4.5));
        return this;
    }

    servirMacarraoCarbonara() {
        this._alimentacao.addPrato(new Prato("Macarrão à carbonara", 24.5));
        return this;
    }

    servirFeijoada() {
        this._alimentacao.addPrato(new Prato("Feijoada", 22.5));
        return this;
    }

    servirStrogonoffDeFrango() {
        this._alimentacao.addPrato(new Prato("Strogonoff de frango", 22.8));
        return this;
    }

    servirSopa() {
        this._alimentacao.addPrato(new Prato("Sopa de legumes", 22.6));
        return this;
    }

    servirSaladaFrutas() {
        this._alimentacao.addPrato(new Prato("Salada de frutas", 13.87));
        return this;
    }

    servirPudim() {
        this._alimentacao.addPrato(new Prato("Pudim de chocolate", 4.57));
        return this;
    }

    servirMousse() {
        this._alimentacao.addPrato(new Prato("Mousse de maracuja", 3.50));
        return this;
    }

    servirAgua() {
        this._alimentacao.addPrato(new Prato("Agua", 0));
        return this;
    }

    servirRefrigerante() {
        this._alimentacao.addPrato(new Prato("Coca-cola", 8.0));
        return this;
    }

    servirSucoNatural() {
        this._alimentacao.addPrato(new Prato("Suco natural", 6.0));
        return this;
    }

    build() {
        return this._alimentacao;
    }
}

export class AlimentacaoDirector {
    constructor(private _builder: AlimentacaoBuilder) {}

    servirCafeDaManhaPadrao() {
        this._builder.servirMistoQuente();
        this._builder.servirCafe();
    }

    servirCafeDaManhaEspecial() {
        this._builder.servirMistoQuente();
        this._builder.servirOmelete();
        this._builder.servirCafe();
        this._builder.servirIogurteComGranola();
        this._builder.servirSaladaFrutas();
    }

    servirAlmocoPadrao() {
        this._builder.servirStrogonoffDeFrango();
        this._builder.servirFeijoada();
        this._builder.servirPudim();
        this._builder.servirAgua();
    }

    servirAlmocoEspecial() {
        this._builder.servirMacarraoCarbonara();
        this._builder.servirFeijoada();
        this._builder.servirAgua();
        this._builder.servirRefrigerante();
        this._builder.servirPudim();
        this._builder.servirMousse();
    }

    servirJantaPadrao() {
        this._builder.servirCafe();
        this._builder.servirCha();
        this._builder.servirSopa();
        this._builder.servirMistoQuente();
        this._builder.servirSaladaFrutas();
    }
}
