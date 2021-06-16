# Test task autotests

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Тестовое задание
## Автотесты написаны с использованием
- NightWatchJS
- Selenium
- Javascript

## Инструкция по установке

Nightwatch требует [Node.js](https://nodejs.org/) v10+ для запуска.

Установите NightWatch

```sh
npm install nightwatch -g
```

Установите ChromeDriver

```sh
npm install chromedriver --save-dev
```
Установите SeleniumServer

```sh
npm install selenium-server --save-dev
```

## Запуск тестов
Перейдите в директорию с тестами и запустите
```sh
nightwatch test.js
```


## Описание тестов

1) Проверка наличия записи после выборки всех записей SQL запросом
2) Добавление новой записи в таблицу
3) Обновление всех полей в записи
4) Проверка количества записей где город = Лондон
5) Восстановление базы данных




