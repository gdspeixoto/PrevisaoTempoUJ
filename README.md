# Previsão do Tempo

Este é um projeto de Previsão do Tempo que permite aos usuários obter informações sobre as condições climáticas de uma determinada cidade.

## Recursos

- Consulta de previsão do tempo para uma cidade específica
- Exibição de informações como temperatura, umidade, direção do vento e velocidade do vento
- Atualização automática dos dados conforme a seleção da cidade

## Tecnologias Utilizadas

- Angular
- TypeScript
- HTML
- CSS
- OpenWeather API

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/previsao-do-tempo.git`
2. Acesse o diretório do projeto: `cd previsao-do-tempo`
3. Instale as dependências: `npm install`

## Configuração da API

Para utilizar a API do OpenWeather, siga as etapas abaixo:

1. Acesse o site do OpenWeather (https://openweathermap.org) e crie uma conta
2. Obtenha uma chave de API (API key) válida
3. No arquivo `environment.ts`, substitua a constante `apiKey` pela sua chave de API

## Como Usar

1. Inicie o servidor local: `ng serve`
2. Acesse o sistema no seu navegador: `http://localhost:4200`
3. Selecione a cidade desejada na lista suspensa
4. Aguarde a exibição dos dados da previsão do tempo

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork do repositório
2. Crie uma branch para a sua contribuição: `git checkout -b minha-contribuicao`
3. Faça as alterações desejadas e commit: `git commit -m "Minha contribuição"`
4. Envie as alterações para o seu fork: `git push origin minha-contribuicao`
5. Abra um pull request no repositório original

Certifique-se de seguir as diretrizes de contribuição e respeitar o código de conduta.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
