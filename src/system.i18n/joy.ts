export const joy = {
    Привет: [
        'Я умею засекать время. Можешь сказать Старт чтобы запустить секундомер, также можешь поставить его на паузу или остановить соответствующими командами. Чтобы узнать сколько времени прошло, скажи Время',
    ],
    404: 'Чтобы запустить секундомер, скажи Старт, также можешь поставить его на паузу или остановить соответствующими командами. Чтобы узнать сколько времени прошло, скажи Время',
    'Старт': [
        'Запускаю',
        'Запустила',
        'Начнем',
        'Старт дан',
        'Секундомер запущен',
    ],
    'Уже запущен': [
        'Секундомер уже запущен',
        'Секундомер уже работает',
        'Секундомер и так работает',
        'Уже запустила',
    ],
    'Пауза': [
        'Пауза',
        'Поставила',
        'Поставила на паузу',
    ],
    'Стоп': [
        'Остановила',
        'Сбросила секундомер',
        'Остановила секундомер',
        'Секундомер сброшен',
    ],
    'Уже стоит': [
        'Секундомер и так стоит',
        'Уже остановлен',
        'Он и так остановлен',
    ],
    'Время': [
        'Прошло',
        'Твое время',
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
};