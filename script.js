"use strict";
(function() {

    /**
     * Класс демонстрирующий синхронизацию текста введенного offline
     * @class
     */
    class DeferedDelivery {

        /**
         * Инициализируем Swarm.ja сервер и обработчики событий
         * @constructor
         */
        constructor () {

            Offline.options = {
                checkOnLoad: true,
                interceptRequests: true,
                requests: true,
                reconnect: {
                    initialDelay: 3,
                    delay: 3
                }
            };

            Offline.on('up', this.goUp, this);
            Offline.on('down', this.goDown, this);
            Offline.on('checking', this.checking, this);

            this.form = document.querySelector('.messanger');
            this.form.addEventListener('submit', this.sendData.bind(this));
            this.input = this.form.querySelector('.messanger__input');
        }

        checking () {
            console.log('Проверяем соединение. Текущее состояние: ',Offline.state);
        }

        goUp () {
            console.log('Соединение установлено');
        }

        goDown () {
            console.log('Соединение потеряно');
        }

        /**
         * Отправка формы AJAX'ом
         * @param event {DOM Event} событие, блокируем действие по умолчанию, что бы избежать перезагрузки проекта
         */
        sendData (event) {
            event.preventDefault();

            try {
                let xhr = new XMLHttpRequest();

                xhr.open(this.form.getAttribute('method'), this.form.getAttribute('action')+'?message='+encodeURIComponent(this.input.value));
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send();

            } catch (err) {
                console.log('error: ', err);
            }
        }
    }

    let ready = new Promise((resolve, reject) => {
        if (document.readyState != "loading") return resolve();
        document.addEventListener("DOMContentLoaded", () => resolve());
    });

    ready.then(() => {
        new DeferedDelivery;
    });

})();
