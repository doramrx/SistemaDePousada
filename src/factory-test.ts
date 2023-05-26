import {
    AndarACavaloFactory,
    PescaFactory,
    TrilhaFactory,
    criarAtividade,
} from "./classes/factory";

const atividade1 = criarAtividade(
    new TrilhaFactory(),
    new Date("2023-05-26 14:00:00")
);
const atividade2 = criarAtividade(
    new PescaFactory(),
    new Date("2023-06-28 11:00:00")
);
const atividade3 = criarAtividade(
    new AndarACavaloFactory(),
    new Date("2023-05-20 10:00:00")
);

console.log(atividade1);
console.log(atividade2);
console.log(atividade3);
