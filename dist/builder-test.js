"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alimentacao_1 = require("./classes/alimentacao");
const alimentacaoBuilder_1 = require("./classes/alimentacaoBuilder");
const builder = new alimentacaoBuilder_1.AlimentacaoBuilder();
builder
    .iniciaEm(new Date("2023-05-20 07:00:00"))
    .terminaEm(new Date("2023-05-20 10:00:00"))
    .servidoNoPeriodo(alimentacao_1.PeriodoRefeicao.CafeManha);
const director = new alimentacaoBuilder_1.AlimentacaoDirector(builder);
director.servirCafeDaManhaPadrao();
const cardapioCafeManha = builder.build();
console.log(cardapioCafeManha);
console.log("==============================================================");
builder
    .resetCardapio()
    .iniciaEm(new Date("2023-05-20 11:30:00"))
    .terminaEm(new Date("2023-05-20 13:30:00"))
    .servidoNoPeriodo(alimentacao_1.PeriodoRefeicao.Almoco);
director.servirAlmocoPadrao();
const almocoPadrao = builder.build();
console.log(almocoPadrao);
console.log("==============================================================");
