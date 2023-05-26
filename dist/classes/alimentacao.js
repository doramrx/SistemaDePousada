"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prato = exports.Alimentacao = exports.PeriodoRefeicao = void 0;
var PeriodoRefeicao;
(function (PeriodoRefeicao) {
    PeriodoRefeicao[PeriodoRefeicao["CafeManha"] = 0] = "CafeManha";
    PeriodoRefeicao[PeriodoRefeicao["Almoco"] = 1] = "Almoco";
    PeriodoRefeicao[PeriodoRefeicao["CafeTarde"] = 2] = "CafeTarde";
    PeriodoRefeicao[PeriodoRefeicao["Janta"] = 3] = "Janta";
})(PeriodoRefeicao = exports.PeriodoRefeicao || (exports.PeriodoRefeicao = {}));
class Alimentacao {
    constructor(_periodoRefeicao, _horarioInicio, _horarioFim, _cardapio) {
        this._periodoRefeicao = _periodoRefeicao;
        this._horarioInicio = _horarioInicio;
        this._horarioFim = _horarioFim;
        this._cardapio = _cardapio;
        this._cardapio = [];
    }
    set periodoRefeicao(_periodoRefeicao) {
        this._periodoRefeicao = _periodoRefeicao;
    }
    set horarioInicio(_horarioInicio) {
        this._horarioInicio = _horarioInicio;
    }
    set horarioFim(_horarioFim) {
        this._horarioFim = _horarioFim;
    }
    addPrato(_prato) {
        this._cardapio?.push(_prato);
    }
    resetCardapio() {
        this._cardapio = [];
    }
}
exports.Alimentacao = Alimentacao;
class Prato {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
exports.Prato = Prato;
