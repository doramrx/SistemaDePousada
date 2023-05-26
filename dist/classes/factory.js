"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarAtividade = exports.AndarACavaloFactory = exports.PescaFactory = exports.TrilhaFactory = void 0;
class AtividadeLazer {
    constructor(nomeAtividade, descricao, duracaoAproximada, horarioInicio) {
        this.nomeAtividade = nomeAtividade;
        this.descricao = descricao;
        this.duracaoAproximada = duracaoAproximada;
        this.horarioInicio = horarioInicio;
    }
}
class AtividadeLazerFactory {
}
class Trilha extends AtividadeLazer {
    obterDescricao() {
        return `[Trilha]`;
    }
}
class Pesca extends AtividadeLazer {
    obterDescricao() {
        return `[Pesca]`;
    }
}
class AndarACavalo extends AtividadeLazer {
    obterDescricao() {
        return `[AndarACavalo]`;
    }
}
class TrilhaFactory extends AtividadeLazerFactory {
    factory(horarioInicio) {
        const duraçãoEmMinutos = 180;
        const dataFinal = new Date();
        dataFinal.setMinutes(horarioInicio.getMinutes() + duraçãoEmMinutos);
        return new Trilha("Trilha", `Essa atividade consiste em realizar uma trilha, que inicia as ${horarioInicio.toLocaleTimeString("pt-BR")} na base da montanha do piriri pororo.`, duraçãoEmMinutos, horarioInicio);
    }
}
exports.TrilhaFactory = TrilhaFactory;
class PescaFactory extends AtividadeLazerFactory {
    factory(horarioInicio) {
        const duraçãoEmMinutos = 140;
        return new Pesca("Pesca", `Essa atividade consiste em realizar uma pesca na lagoa azul, que inicia as ${horarioInicio.toLocaleTimeString("pt-BR")} e é próximo ao vale dourado.`, duraçãoEmMinutos, horarioInicio);
    }
}
exports.PescaFactory = PescaFactory;
class AndarACavaloFactory extends AtividadeLazerFactory {
    factory(horarioInicio) {
        const duraçãoEmMinutos = 120;
        return new AndarACavalo("AndarACavalo", `Essa atividade consiste em realizar um passeio a cavalo no Haras Real, que inicia as ${horarioInicio.toLocaleTimeString("pt-BR")} e que fica localizado no campo central.`, duraçãoEmMinutos, horarioInicio);
    }
}
exports.AndarACavaloFactory = AndarACavaloFactory;
function criarAtividade(factory, dataInicio) {
    console.log("Criando uma atividade");
    return factory.factory(dataInicio);
}
exports.criarAtividade = criarAtividade;
