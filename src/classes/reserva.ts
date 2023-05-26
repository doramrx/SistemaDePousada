import { Hospede } from "./hospede";

export class Reserva {
    constructor(
        private dataEntrada: Date,
        private dataSaida: Date,
        private valorDiario: number,
        private hospede: Hospede,
        private quantidadeAcompanhantes: number
    ) {}
}
