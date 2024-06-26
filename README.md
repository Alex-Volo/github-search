# GitHub Search

_Приложение для поиска пользователей GitHub_

## Ссылка на приложение

[**GitHub Search**](https://github-search-sigma-lake.vercel.app/)

## Установка и запуск

- `npm i` для установки проекта
- `npm run start` для запуска проекта в режиме разработки
- `npm run build` билд проекта

После запуска приложение откроется по адресу: http://localhost:3000/

## Техническое задание

_Необходимо реализовать интерфейс поиска пользователей. Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} [документация](https://developer.github.com/v3/search/#search-users)._

**Требования:**
 - поиск: по логину;
 - сортировка: по количеству репозиториев (возрастанию/убыванию);
 - использовать React;
 - пагинация;
 - при клике на элемент открываются подробности (как и какие — на усмотрение разработчика);
 - nice to have: реализовать 3 юнит-теста на функционал.

## Используемые технологии (стек проекта)

- **Шаблон Create React App** - исключительно из-за webpack под капотом
- **React**
- **TypeScript**
- **ESLint**
- **Prettier**
- **Tanstack/React-Query**
- **Styled Components**