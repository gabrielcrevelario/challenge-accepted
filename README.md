# challenge-accepted

Desafio para desenvolvedores

## Iniciar projeto:

- para iniciar o projeto basta ir na pasta raiz e usar o comando no terminal "docker-compose build" e depois "docker-compose up -d", o docker baixara todas as dependencias, start nos projetos e no banco mongodb, espera alguns instantes e já pode usar tanto o back quanto o front, a url do back: http://localhost:8082/weathers/locale-name/{localeName}
  http://localhost:8082/weathers/range-date/{dateStart}/{dateEnd}, url do front: http://localhost:3000

## Arquitetura

### O Backend

foi criado como objetivo de demonstrar conhecimentos de docker,ESLint, padrões de projeto, como DDD e injeção de dependencias, typescript, orm, nesse caso o mongoose, paths-resolvers, express, variaveis de ambiente. Criado de maneira otimizada
