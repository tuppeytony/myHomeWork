window.addEventListener('DOMContentLoaded', function () {

    'use strict';


    class Option {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createNewElement(text) {
            let element = document.createElement(text);
            element.innerText = text;
            element.classList.add('new-element');
            document.body.appendChild(element);
            element.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg};
            font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        }
    }


    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //время

    let deadline = '2020-05-09';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                } 
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    //модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');



    this.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //form

    let message = {
        loading: 'Загрузка...',
        succses: 'Спасибо! Мы с Вами свяжемся!',
        failure: 'Что-то пошло не так.'
    };
    console.log(message.loading);
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input');


    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        function formData () {

            return new Promise ((resolve, reject) => {
                form.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
                let formData = new FormData(form);
        
                let obj = {};
                formData.forEach(function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);

                request.onload = function () {
                        if (request.readyState < 4) {
                            statusMessage.innerText = message.loading;
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve(this.response);
                        } else {
                            reject();
                        }
                    
                };
            });
    }
        formData()
            .then(() => {
                statusMessage.innerText = message.succses;
                console.log('УРА!');
            })
            .catch(() =>{
                statusMessage.innerText = message.failure;
            })
            .finally (() => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            });
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        function contactFormData () {
            return new Promise ((resolve, reject) => {
                contactForm.appendChild(statusMessage);

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                let formData = new FormData(contactForm);
                let obj = {};
                formData.forEach(function (value, key) {
                    obj[key] = value;
        });
                let json = JSON.stringify(obj);
                request.send(json);
                request.onload = function () {
                    if (request.readyState < 4) {
                        statusMessage.innerText = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }
                };
                    
            });
            
        }
        
        contactFormData()
            .then(() =>{
                statusMessage.innerText = message.succses;
                console.log('СРАБОТАЛА ФОРМА!');
            })
            .catch(() =>{
                statusMessage.innerText = message.failure;
            })
            .finally(() =>{
                for (let i = 0; i < contactInput.length; i++) {
                    contactInput[i].value = '';
                }
            });
        


    });

    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(1);
    function showSlides (n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //более современный вариант
       /* for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        */
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides (n) {
        showSlides (slideIndex += n);
    }
    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function () {
            personsSum = +this.value;

            if (persons.value != null && personsSum != 0 && restDays.value != null && daysSum != 0) {
                total = (daysSum + personsSum) * 4000;
            }
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            console.log(persons.value);
        });

        restDays.addEventListener('change', function () {
            daysSum = +this.value;

            if (restDays.value != null && daysSum != 0 && persons.value != null && personsSum != 0) {
                total = (daysSum + personsSum) * 4000;
            }
            if (persons.value == '' || restDays.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            console.log(restDays.value);
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

});