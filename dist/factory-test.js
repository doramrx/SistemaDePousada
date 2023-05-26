"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./classes/factory");
const atividade1 = (0, factory_1.criarAtividade)(new factory_1.TrilhaFactory(), new Date("2023-05-26 14:00:00"));
const atividade2 = (0, factory_1.criarAtividade)(new factory_1.PescaFactory(), new Date("2023-06-28 11:00:00"));
const atividade3 = (0, factory_1.criarAtividade)(new factory_1.AndarACavaloFactory(), new Date("2023-05-20 10:00:00"));
console.log(atividade1);
console.log(atividade2);
console.log(atividade3);
