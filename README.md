# challenge-accepted

Desafio para desenvolvedores

## Iniciar projeto:

- para iniciar o projeto basta ir na pasta raiz e usar o comando no terminal "docker-compose build" e depois "docker-compose up -d", o docker baixara todas as dependencias, iniciará o front, o back o mongodb, espera alguns instantes e já pode usar tanto o back quanto o front, a url do back: http://localhost:8082/weathers/locale-name/{localeName}?startDate={startDate}&endDate={endDate}
  http://localhost:8082/weathers -> findAll
  http://localhost:8082/weathers/range-date/{dateStart}/{dateEnd}, url do front: http://localhost:3000

### GitFlow

Nesse projeto o padrão dos commits é o gitFlow.

### O Backend

Foi criado como objetivo de demonstrar conhecimentos de docker,ESLint, padrões de projeto, como DDD e injeção de dependencias, typescript, orm, nesse caso o mongoose, paths-resolvers, express, variaveis de ambiente. Criado de maneira otimizada, com cors, para que o front consiga consumir ele em qualquer navegador sem problemas

### O front

Usei nele uma arquitetura simples, usando css padrão com flex-box, layout responsivo com media-query, para alguns componentes e icones usei o material ui.
OBS: Para que não perdessemos muito tempo esperando o npm baixar as dependencias do front, ele apenas baixa as de produção, builda o projeto e roda ele com server -p 3000

### O Docker

Todo o ambiente foi criado no docker-compose bastando só buildar ele com docker-compose build e logo depois docker-compose up -d para rodar em background, a aplicação é capaz de rodar em qualquer ambiente devido ao docker-compose
