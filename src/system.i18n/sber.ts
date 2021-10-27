export const sber = {
    Привет: [
        'Я умею засекать время. Можете сказать Старт чтобы запустить секундомер, также можете поставить его на паузу или остановить соответствующими командами. Чтобы узнать сколько времени прошло, скажите Время',
    ],
    404: 'Чтобы запустить секундомер, скажите Старт, также можете поставить его на паузу или остановить соответствующими командами. Чтобы узнать сколько времени прошло, скажите Время. Сказав Круг, вы запишете текущее время',
    'Старт': [
        'Запускаю',
        'Запустил',
        'Начнем',
        'Старт дан',
        'Секундомер запущен',
    ],
    'Уже запущен': [
        'Секундомер уже запущен',
        'Секундомер уже работает',
        'Секундомер и так работает',
        'Уже запустил',
    ],
    'Пауза': [
        'Пауза',
        'Поставил',
        'Поставил на паузу',
    ],
    'Стоп': [
        'Остановил',
        'Сбросил секундомер',
        'Остановил секундомер',
        'Секундомер сброшен',
    ],
    'Уже стоит': [
        'Секундомер и так стоит',
        'Уже остановлен',
        'Он и так остановлен',
    ],
    'Время': [
        'Прошло',
        'Ваше время',
        '',
    ],
    'Часы': {
        many: '{count} часов',
        none: '',
        one: '{count} час',
        some: '{count} часа',
    },
    'Минуты': {
        many: '{count} минут',
        none: '',
        one: '<say-as interpret-as="cardinal" format="feminine_nominative">{count}</say-as> минута',
        some: '<say-as interpret-as="cardinal" format="feminine_nominative">{count}</say-as> минуты',
    },
    'Секунды': {
        many: '{count} секунд',
        none: 'ноль секунд',
        one: '<say-as interpret-as="cardinal" format="feminine_nominative">{count}</say-as> секунда',
        some: '<say-as interpret-as="cardinal" format="feminine_nominative">{count}</say-as> секунды',
    },
    'Круг': [
        'Записал круг',
        'Записал',
        'Готово',
    ],
    'Максимум кругов': [
        'Можно только 5 кругов',
        'Всего можно 5 кругов',
        'Максимум можно 5 кругов',
        '5 кругов - это максимум',
    ]
};