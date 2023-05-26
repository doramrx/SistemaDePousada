import { PeriodoRefeicao } from "./classes/alimentacao";
import {
    AlimentacaoBuilder,
    AlimentacaoDirector,
} from "./classes/alimentacaoBuilder";

const builder = new AlimentacaoBuilder();
builder
    .iniciaEm(new Date("2023-05-20 07:00:00"))
    .terminaEm(new Date("2023-05-20 10:00:00"))
    .servidoNoPeriodo(PeriodoRefeicao.CafeManha);

const director = new AlimentacaoDirector(builder);

director.servirCafeDaManhaPadrao();
const cardapioCafeManha = builder.build();
console.log(cardapioCafeManha);
console.log("==============================================================");

builder
    .resetCardapio()
    .iniciaEm(new Date("2023-05-20 11:30:00"))
    .terminaEm(new Date("2023-05-20 13:30:00"))
    .servidoNoPeriodo(PeriodoRefeicao.Almoco);
    
director.servirAlmocoPadrao();

const almocoPadrao = builder.build();
console.log(almocoPadrao);
console.log("==============================================================");
