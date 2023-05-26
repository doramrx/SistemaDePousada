import { Hospede } from "./classes/hospede";
import { Pousada } from "./classes/pousada";
import { Reserva } from "./classes/reserva";

const hospede1 = new Hospede(
    "Renato Cariani",
    "123.523.256.52",
    new Date("1912-05-29")
);
const hospede3 = new Hospede(
    "Mariana Possato",
    "588.663.452.85",
    new Date("1980-12-31")
);

const pousada = Pousada.instancia;

const reserva1 = new Reserva(
    new Date("2023-01-22"),
    new Date("2023-01-25"),
    280,
    hospede1,
    1
);
const reserva2 = new Reserva(
    new Date("2023-02-13"),
    new Date("2023-02-17"),
    280,
    hospede3,
    1
);

console.log("Situação da pousada antes das reservas");
console.log(pousada);
console.log("============================================================");

console.log("Realizando a primeira reserva");
pousada.realizaReserva(reserva1);
console.log(pousada);
console.log("Finalizar reserva");
pousada.finalizaReserva();
console.log("============================================================");
console.log(pousada);
console.log("============================================================");

console.log("Realizando a segunda reserva");
pousada.realizaReserva(reserva2);
console.log(pousada);
console.log("Finalizar reserva");
pousada.finalizaReserva();
console.log("============================================================");
console.log(pousada);
console.log("============================================================");
