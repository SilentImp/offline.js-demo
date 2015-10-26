# Пример использования Offline.js

Для запуска:

    // Устанавливаем сервер
    npm install -g http-server
    // Устанавливаем browserify
    npm install -g browserify
    // Клонируем репозиторий
    git clone https://github.com/SilentImp/offline.js-demo.git
    // Входим в директорий
    cd offline.js-demo
    // Устанавливаем зависимости
    bower install
    npm install
    // Собираем бандл для браузера (так как используется es6)
    npm run rebuild
    // Запускаем сервер
    http-server
    // Откроем в браузере url, который обслуживает сервер
    open http://127.0.0.1:8080/

# Сслыки

* [offline.js](http://github.hubspot.com/offline/docs/welcome/)
