# Avaliação 1 - Padrões de Projeto de Software

## Integrantes:

- 202020901641 - Igor Semphoski de Assis
- 202020902751 - Isadora Cristina Marques Firmo

## Enunciado

Os domínios de um sistema são representados pelos objetos, nomes e atores que compõe um ecosistema de informação, por exemplo, quando se fala em um sistema aéreo, é comum que o domínio tenha informações como vôos (número, companhia, aeroporto de origem, destino), comissários de bordo e comandantes por exemplo. Dito isto, escolha um domínio abaixo e desenvolva aplicação de padrões de projeto criacionais para este domínio:

- Corrida de Fórmula 1
- Futebol
- Laboratório de Análises Clínicas
- Hospital
- **Pousada**

Os padrões de projeto obrigatórios que precisarão estar envolvidos são Singleton, Builder e UM outro de sua escolha (Factory, Abstract Factory e Prototype). A avaliação se dará da seguinte forma

1. (3,0 pontos) - Faça um documento texto de no máximo 2 páginas contendo informações a respeito dos design patterns escolhidos. Este documento precisa ter a aplicabilidade dos padrões escolhidos e justificativa para o uso dele (imagens são bem vindas neste texto também). Este documento precisa estar junto dos fontes no GitHub em uma pasta chamada "doc". No documento deve constar as informações da equipe nome e matrícula de cada integrante.
2. (3,0 pontos) - GitHub com os código-fontes (colocar os integrantes no README do Git)
3. (4,0 pontos) - Link do VÍDEO (youtube ou qualquer outra plataforma de vídeo contanto que seja enviado o link) incluído na página principal do GitHub.

Observações:

1. o exemplo não precisa necessariamente solicitar dados de usuário, pode ser conforme fazemos em aula, uma classe Main fazendo as chamadas das classes e métodos.
2. pode utilizar qualquer linguagem de programação que possa ser utilizada como exemplo (TypeScript, Java, C++, .NET, etc)
3. podem escolher UMA pessoa para apresentar
4. a atividade ficará aberta para entrega das 18:30 de 23/05 até 23:59 de 29/05, porém, os envios após o dia 23/05 tem um desconto de 1,0 ponto por dia de atraso, ou seja, se esforcem para entregar no dia de hoje (tem tempo para isso).
5. enviar como resposta apenas o link do github, uma vez que dentro dele deverá ter o documento e o vídeo linkado na página principal também.
6. APENAS UM ENVIO POR GRUPO.

## Anotações

- Entidades: recepção, alojamento e alimentação.
- Atributos da Pousada: arquitetura, decoração, capacidade, estrutura (chalés, bangalôs, casinha ou prédio), hóspedes, período (data entrada e saída), preço diária, valor total estadia, atividades de lazer, numero de unidades, numero de leitos, classificação

## Entidades (Classes)

- Hóspede:

  1. nome
  2. cpf
  3. dataNascimento

- Reserva:

  1. dataEntrada
  2. dataSaida
  3. valorDiario
  4. hospede
  5. quantidadeAcompanhantes

- Pousada:

  1. estrutura (chalé, bangalô, casinha)
  2. endereço (número da casa, logradouro, cidade, uf)
  3. arquitetura
  4. decoração
  5. capacidade
  6. qntLeitos
  7. publicoAlvo (familiar, casal, individual, grupo)
  8. classificacao (1-5)

- AtividadeLazer

  1. atividade (trilha, passeio, andar a cavalo, caiaque, pesca, etc.)
  2. descricao
  3. duracaoAproximada
  4. horarioInicio

- Alimentação

  1. periodoRefeição (café da manhã, almoço, café da tarde, janta)
  2. opções
  3. valorBuffetLivre
  4. data
