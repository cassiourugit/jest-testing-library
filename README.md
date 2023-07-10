# Exemplos Jest - Testing Library

Nesse projeto estão exemplos e boas práticas para testes com jest e testing library

## Como instalar?

    yarn

## Como rodar os testes?

    yarn jest

### Comando para rodar os testes controlando o número de Threads

    yarn jest --maxWorkers=1

### Comando para rodar os testes com log de consumo de memória

    yarn jest --logHeapUsage

### Comando para rodar os testes no modo live

    yarn react-scripts test

## Problemas comuns / Dicas

    -> Evitar nodes com versões superiores a 16.10.0 por conta do problema de consumo de memória

    -> Lembre-se de usar --maxWorkers=1 para rodar os testes em ambiente de pipeline, caso a máquina da sua pipeline não suporte multithread

    -> Se possível, utilizar typescript, facilita muito a vida do desenvolvedor, do tester e evita vários erros