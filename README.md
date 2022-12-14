# 👾 Лента постов Reddit

## Задача

Написать приложение для просмотра ленты Reddit

## Функционал

- Авторизация через Reddit
- Просмотр ленты постов с бесконечной подгрузкой
- Просмотр полного текста поста с комментариями

Самый базовый функционал без интерактивности для знакомства с React

## Создание приложения разработчика Reddit

Данные приложения разработчика понадобятся для конфигурации сборки. Для создания приложения:

1. Перейдите [по ссылке](https://www.reddit.com/prefs/apps)
2. Нажмите на кнопку **create another app...**
3. Введите любое название приложения
4. Выберите вариант **web app**
5. В **redirect uri** нужно указать `http://localhost:3000/auth` для локальной сборки или `[Ваш URL]/auth` для сборки, размещенной на сервере

## Конфигурация среды приложения

После регистрации приложения разработчика Reddit вы получите `id` приложения и `secret`. Эти данные нужно добавить в файл `.env`

В репозитории есть шаблон `.env.example`. Переименуйте его в `.env` и впишите соответствующие данные:

- **NODE_ENV** – `development` для разработки и `production` для продакшн сборки
- **URI** – `http://localhost:3000` для локальной сборки или `[Ваш URI]` для сборки, размещенной на сервере (без слеша в конце)
- **CLIENT_ID** – `id` вашего приложения разработчика Reddit
- **SECRET** – `secret` вашего приложения разработчика Reddit

После заполнения файла `.env` можно приступать к сборке

## Сборка проекта

Перед началом необходимо установить зависимости через `npm`:

```
npm i
```

### Сборка проекта с запуском локального сервера:

```
npm run dev
```

### Сборка проекта в папку dist:

```
npm run build
```

### Запуск сборки проекта из папки dist:

```
npm start
```
