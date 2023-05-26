import { Endereco } from "./endereco";
import { Reserva } from "./reserva";

enum Estrutura {
    Chale = "Chalé",
    Bangalo = "Bangalô",
    Casinha = "Casinha",
}

enum Arquitetura {
    Classica = "Arquitetura clássica",
    Medieval = "Arquitetura medieval",
    Moderna = "Arquitetura moderna",
    Tropical = "Arquitetura tropical",
    Minimalista = "Arquitetura minimalista",
}

enum PublicoAlvo {
    Familiar,
    Casal,
    Individual,
    Grupo,
}

export class Pousada {
    private static _instancia?: Pousada;

    private constructor(
        private _estrutura?: Estrutura,
        private _arquitetura?: string,
        private _capacidade?: number,
        private _quantidadeLeitos?: number,
        private _publicoAlvo?: PublicoAlvo,
        private _classificacao?: number,
        private _endereco?: Endereco,
        private _reservaAtual?: Reserva,
        private _historicoReservas?: Reserva[]
    ) {}

    public static get instancia(): Pousada {
        if (Pousada._instancia === undefined || Pousada._instancia === null) {
            Pousada._instancia = new Pousada();
            Pousada._instancia._estrutura = Estrutura.Chale;
            Pousada._instancia._arquitetura = Arquitetura.Classica;
            Pousada._instancia._capacidade = 2;
            Pousada._instancia._quantidadeLeitos = 1;
            Pousada._instancia._publicoAlvo = PublicoAlvo.Casal;
            Pousada._instancia._classificacao = 5;
            Pousada._instancia._endereco = new Endereco(
                "Rua das Flores",
                "123",
                "Bairro Nobre",
                "8906200",
                "Blumenau",
                "SC"
            );
            Pousada._instancia._historicoReservas = [];
        }

        return Pousada._instancia;
    }

    public realizaReserva(reserva: Reserva) {
        // Pousada pode ser alugada
        if (Pousada._instancia?._reservaAtual === undefined) {
            Pousada._instancia!._reservaAtual = reserva;
            Pousada._instancia!._historicoReservas?.push(reserva);
        }
    }

    public finalizaReserva() {
        Pousada._instancia!._reservaAtual = undefined;
    }
}
