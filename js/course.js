(() => {
    //Information for page of each course:
    const pagesData = {
        'art-and-space': {
            title: 'Искусство и пространство: от пинакотеки до TikTok',
            type: 'Курс',
            date: 'С 11 февраля',
            age: '16+ лет',
            description: '«Искусство и пространство: от пинакотеки до TikTok» — курс, который откроет для вас мир искусства через призму пространства. <br><br class="course__extra-line">Вы познакомитесь с основными стилями и направлениями в искусстве, а также узнаете о том, как пространство влияет на восприятие произведений.',
            questions: [{
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                }, {
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                }, {
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                },
            ],
            modules: [{
                    title: 'Модуль 1. Введение',
                    description: 'В этом модуле мы кратко обсудим основные виды искусства, поразмышляем, какие пространства искусства существуют в современном мире, обсудим проблематику взаимодействия искусства и пространства',
                    lessons: '5 занятий',
                    illustration: 'img/illustrations/module-picture.png',
                }, {
                    title: 'Модуль 2. Введение',
                    description: 'В этом модуле мы кратко обсудим основные виды искусства, поразмышляем, какие пространства искусства существуют в современном мире, обсудим проблематику взаимодействия искусства и пространства',
                    lessons: '9 занятий',
                    illustration: 'img/illustrations/module-picture.png',
                }, {
                    title: 'Модуль 3. Введение',
                    description: 'В этом модуле мы кратко обсудим основные виды искусства, поразмышляем, какие пространства искусства существуют в современном мире, обсудим проблематику взаимодействия искусства и пространства',
                    lessons: '8 занятий',
                    illustration: 'img/illustrations/module-picture.png',
                },
            ],
            program: 'programs/image.png',
        },
        'some-other-course': {
            title: 'Название нового курса',
            type: 'Курс',
            date: 'С 35 февраля',
            age: '12+ лет',
            description: '«БлалалаИскусство и пространство: от пинакотеки до TikTok» — курс, который откроет для вас мир искусства через призму пространства. <br><br class="course__extra-line">Вы познакомитесь с основными стилями и направлениями в искусстве, а также узнаете о том, как пространство влияет на восприятие произведений.',
            questions: [{
                    title: 'А как записатсья?',
                    answer: 'там внизу форма записи',
                }, {
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                }, {
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                }, {
                    title: 'О чём курсы?',
                    answer: 'Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                }, {
                    title: 'ещё вопрос?',
                    answer: 'Недавно яффффф прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства. Недавно я прошла курс по искусствоведению, посвящённый искусству и пространству. Он оказался очень познавательным. Я узнала много нового об истории искусства, его направлениях и стилях, а также о том, как пространство влияет на восприятие  произведений искусства.',
                },
            ],
            modules: [{
                    title: 'Модуль 1. ляляля',
                    description: 'В этом модуле мы кратко обсудим основные виды искусства, поразмышляем, какие пространства искусства существуют в современном мире, обсудим проблематику взаимодействия искусства и пространства',
                    lessons: '555 занятий',
                    illustration: 'img/illustrations/module-picture.png',
                }, {
                    title: 'Модуль 2. лблла',
                    description: 'В этом модуле мы кратко обсудим основные виды искусства, поразмышляем, какие пространства искусства существуют в современном мире, обсудим проблематику взаимодействия искусства и пространства',
                    lessons: '555 занятий',
                    illustration: 'img/illustrations/module-picture.png',
                },
            ],
            program: 'programs/image.png',
        },
    };
    //Using information for a page
    let location = new URLSearchParams(document.location.search);
    const pageData = pagesData[location.get('course')];
    const addText = (selector, text, element = document) => element.querySelector(selector).innerHTML = text;
    addText('.course__parameter--type', pageData.type);
    addText('.course__parameter--date', pageData.date);
    addText('.course__parameter--age', pageData.age);
    addText('.course__title', pageData.title);
    addText('.course__description', pageData.description);
    const questionList = document.querySelector('.course__questions');
    const questionTemplate = document.getElementById('question').content;
    pageData.questions.forEach(({title, answer}) => {
        const newQuestion = questionTemplate.cloneNode(true);
        addText('.course__question p', title, newQuestion);
        addText('.course__answer', answer, newQuestion);
        questionList.appendChild(newQuestion);
    });
    const moduleList = document.querySelector('.program__modules');
    const moduleTemplate = document.getElementById('module').content;
    pageData.modules.forEach(({title, description, lessons, illustration}) => {
        const newModule = moduleTemplate.cloneNode(true);
        addText('.program__module-name', title, newModule);
        addText('.program__module-description', description, newModule);
        addText('.program__lessons', lessons, newModule);
        newModule.querySelector('.program__image').src = illustration;
        moduleList.appendChild(newModule);
    });
    document.querySelector('.program__download').href = pageData.program;
    //Sign-up button
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.course__sign-up');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running questions
    window.runQuestions('course');
    //Running modules
    const addClickListener = (currentModule, nextModule) => {
        currentModule.querySelector('.program__next').addEventListener('click', () => {
            currentModule.classList.add('program__module--gotta-leave');
            nextModule.style.display = 'flex';
            setTimeout(() => {
                currentModule.style.display = 'none';
                currentModule.classList.remove('program__module--gotta-leave');
            }, 1000);
        });
    };
    const modules = document.querySelectorAll('.program__module');
    for (let i = 1; i < modules.length; i++) {
        modules[i].style.display = 'none';
    }
    for (let i = 0; i < modules.length - 1; i++) {
        addClickListener(modules[i], modules[i + 1]);
    }
    addClickListener(modules[modules.length - 1], modules[0]);
})();
