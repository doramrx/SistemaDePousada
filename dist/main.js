"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hospede_1 = require("./classes/hospede");
const pousada_1 = require("./classes/pousada");
const reserva_1 = require("./classes/reserva");
const hospede1 = new hospede_1.Hospede("Renato Cariani", "123.523.256.52", new Date("1912-05-29"));
const hospede3 = new hospede_1.Hospede("Mariana Possato", "588.663.452.85", new Date("1980-12-31"));
const pousada = pousada_1.Pousada.instancia;
const reserva1 = new reserva_1.Reserva(new Date("2023-01-22"), new Date("2023-01-25"), 280, hospede1, 1);
const reserva2 = new reserva_1.Reserva(new Date("2023-02-13"), new Date("2023-02-17"), 280, hospede3, 1);
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
