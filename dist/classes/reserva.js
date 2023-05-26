"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
class Reserva {
    constructor(dataEntrada, dataSaida, valorDiario, hospede, quantidadeAcompanhantes) {
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.valorDiario = valorDiario;
        this.hospede = hospede;
        this.quantidadeAcompanhantes = quantidadeAcompanhantes;
    }
}
exports.Reserva = Reserva;
