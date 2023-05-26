"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pousada = void 0;
const endereco_1 = require("./endereco");
var Estrutura;
(function (Estrutura) {
    Estrutura["Chale"] = "Chal\u00E9";
    Estrutura["Bangalo"] = "Bangal\u00F4";
    Estrutura["Casinha"] = "Casinha";
})(Estrutura || (Estrutura = {}));
var Arquitetura;
(function (Arquitetura) {
    Arquitetura["Classica"] = "Arquitetura cl\u00E1ssica";
    Arquitetura["Medieval"] = "Arquitetura medieval";
    Arquitetura["Moderna"] = "Arquitetura moderna";
    Arquitetura["Tropical"] = "Arquitetura tropical";
    Arquitetura["Minimalista"] = "Arquitetura minimalista";
})(Arquitetura || (Arquitetura = {}));
var PublicoAlvo;
(function (PublicoAlvo) {
    PublicoAlvo[PublicoAlvo["Familiar"] = 0] = "Familiar";
    PublicoAlvo[PublicoAlvo["Casal"] = 1] = "Casal";
    PublicoAlvo[PublicoAlvo["Individual"] = 2] = "Individual";
    PublicoAlvo[PublicoAlvo["Grupo"] = 3] = "Grupo";
})(PublicoAlvo || (PublicoAlvo = {}));
class Pousada {
    constructor(_estrutura, _arquitetura, _capacidade, _quantidadeLeitos, _publicoAlvo, _classificacao, _endereco, _reservaAtual, _historicoReservas) {
        this._estrutura = _estrutura;
        this._arquitetura = _arquitetura;
        this._capacidade = _capacidade;
        this._quantidadeLeitos = _quantidadeLeitos;
        this._publicoAlvo = _publicoAlvo;
        this._classificacao = _classificacao;
        this._endereco = _endereco;
        this._reservaAtual = _reservaAtual;
        this._historicoReservas = _historicoReservas;
    }
    static get instancia() {
        if (Pousada._instancia === undefined || Pousada._instancia === null) {
            Pousada._instancia = new Pousada();
            Pousada._instancia._estrutura = Estrutura.Chale;
            Pousada._instancia._arquitetura = Arquitetura.Classica;
            Pousada._instancia._capacidade = 2;
            Pousada._instancia._quantidadeLeitos = 1;
            Pousada._instancia._publicoAlvo = PublicoAlvo.Casal;
            Pousada._instancia._classificacao = 5;
            Pousada._instancia._endereco = new endereco_1.Endereco("Rua das Flores", "123", "Bairro Nobre", "8906200", "Blumenau", "SC");
            Pousada._instancia._historicoReservas = [];
        }
        return Pousada._instancia;
    }
    realizaReserva(reserva) {
        // Pousada pode ser alugada
        if (Pousada._instancia?._reservaAtual === undefined) {
            Pousada._instancia._reservaAtual = reserva;
            Pousada._instancia._historicoReservas?.push(reserva);
        }
    }
    finalizaReserva() {
        Pousada._instancia._reservaAtual = undefined;
    }
}
exports.Pousada = Pousada;
