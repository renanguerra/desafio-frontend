# Desafio-Frontend


## 📝 Relatório sobre o desafio

Sobre os requisitos:

1. A agenda deverá mostrar uma visão semanal dos eventos e ao carregar deverá ser mostrada a semana atual 
2. Deve ser possível avançar e retroceder datas
3. Eventos que ocorrem em um mesmo período devem ser apresentados de forma clara
4. Ao clicar em um evento deverá ser mostrado suas informações

Problema que tive:
- Usei dois calendarios diferentes no projeto, um foi o <a href='https://fullcalendar.io/'>FullCalendar</a> e o outro o <a href='https://github.com/jquense/react-big-calendar'>BigCalendar</a>, porém tive um problema onde os eventos as vezes eram renderizados e as vezes não, creio que o erro está dentro do useEffect onde executo um for e o componente dos calendarios é renderizado antes do termino do for, assim ficando sem mostrar os eventos.

FullCalendar             |  BigCalendar
:-------------------------:|:-------------------------:
![Tela 1](https://user-images.githubusercontent.com/53278938/104131719-fce39c00-5356-11eb-8a7d-788d3f7cbcbe.png)  |  ![Tela 2](https://user-images.githubusercontent.com/53278938/104131721-fd7c3280-5356-11eb-826f-0b90206eccf9.png)
Nesse primeiro fixei para mostrar apenas semanalmente | Nesse deixei à escolha do usuário o tipo de visualização

## Alguns Funcionalidades

* Escolha de calendário.
* Página listando todos os eventos.
* Header responsivo.

# 💻 Projeto

## Parar executar o FrontEnd

* Clone o repositorio
* Use o comando `npm install` para instalar as dependências 
* Depois `npm start`

## Para executar o backend

Criar o backend não é o foco deste teste, portanto está sendo disponibilizado um serviço Rest que deve ser utilizado para recuperar a lista de produtos do projeto.

Para rodar o serviço, é necessário instalar o json-server:

`npm install -g json-server`

Após isso, rodar o comando: `json-server --watch rest-api/events.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3000/events.

Um produto especifico pode ser acessado através da url http://localhost:3000/events/{id};

## Recursos

* React com Typescript.
* Layout responsivo.
* LocalStorage simples para mudança de calendários.
* Axios para fazer requisições


---

<p align="center">Desenvolvido com 💜 por Renan Guerra</p>
