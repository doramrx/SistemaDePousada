abstract class AtividadeLazer {
    constructor(
        protected nomeAtividade: string,
        protected descricao: string,
        protected duracaoAproximada: number,
        protected horarioInicio: Date
    ) {}

    abstract obterDescricao(): string;
}

abstract class AtividadeLazerFactory {
    public abstract factory(horarioInicio: Date): AtividadeLazer;
}

class Trilha extends AtividadeLazer {
    obterDescricao(): string {
        return `[Trilha]`;
    }
}

class Pesca extends AtividadeLazer {
    obterDescricao(): string {
        return `[Pesca]`;
    }
}

class AndarACavalo extends AtividadeLazer {
    obterDescricao(): string {
        return `[AndarACavalo]`;
    }
}

export class TrilhaFactory extends AtividadeLazerFactory {
    factory(horarioInicio: Date) {
        const duraçãoEmMinutos = 180;
        const dataFinal = new Date();
        dataFinal.setMinutes(horarioInicio.getMinutes() + duraçãoEmMinutos);

        return new Trilha(
            "Trilha",
            `Essa atividade consiste em realizar uma trilha, que inicia as ${horarioInicio.toLocaleTimeString(
                "pt-BR"
            )} na base da montanha do piriri pororo.`,
            duraçãoEmMinutos,
            horarioInicio
        );
    }
}

export class PescaFactory extends AtividadeLazerFactory {
    factory(horarioInicio: Date) {
        const duraçãoEmMinutos = 140;

        return new Pesca(
            "Pesca",
            `Essa atividade consiste em realizar uma pesca na lagoa azul, que inicia as ${horarioInicio.toLocaleTimeString(
                "pt-BR"
            )} e é próximo ao vale dourado.`,
            duraçãoEmMinutos,
            horarioInicio
        );
    }
}

export class AndarACavaloFactory extends AtividadeLazerFactory {
    factory(horarioInicio: Date) {
        const duraçãoEmMinutos = 120;

        return new AndarACavalo(
            "AndarACavalo",
            `Essa atividade consiste em realizar um passeio a cavalo no Haras Real, que inicia as ${horarioInicio.toLocaleTimeString(
                "pt-BR"
            )} e que fica localizado no campo central.`,
            duraçãoEmMinutos,
            horarioInicio
        );
    }
}

export function criarAtividade(
    factory: AtividadeLazerFactory,
    dataInicio: Date
) {
    console.log("Criando uma atividade");

    return factory.factory(dataInicio);
}
