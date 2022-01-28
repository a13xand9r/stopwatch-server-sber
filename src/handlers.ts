import { ScenarioHandler } from './types';
import * as dictionary from './system.i18n'
require('dotenv').config()

export const runAppHandler: ScenarioHandler = ({ req, res }) => {

    const keyset = req.i18n(dictionary)
    let responseText = keyset('Привет')

    res.setPronounceText(responseText)
}

export const noMatchHandler: ScenarioHandler = async ({ req, res }) => {
    const keyset = req.i18n(dictionary)
    res.setPronounceText(keyset('404'))
    res.appendSuggestions(['Выйти'])
}

export const startHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)

    if (!req.state?.isGoing){
        res.appendCommand({
            type: 'START_STOP_WATCH'
        })
        res.setPronounceText(keyset('Старт'))
    } else {
        res.setPronounceText(keyset('Уже запущен'))
    }
}

export const pauseHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)

    if (req.state?.isGoing){
        res.appendCommand({
            type: 'STOP_STOP_WATCH'
        })
        res.setPronounceText(keyset('Пауза'))
    } else {
        res.setPronounceText(keyset('Уже стоит'))
    }
}

export const stopHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)

    res.appendCommand({
        type: 'STOP_STOP_WATCH'
    })
    res.appendCommand({
        type: 'CLEAR_TIMER'
    })
    res.setPronounceText(keyset('Стоп'))
}

export const timeHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)
    const state = req.state

    console.log(state?.h, state?.m, state?.s)
    const responseText =
        `<speak>${keyset('Время')}${keyset('Часы', { count: state?.h })} ${keyset('Минуты', { count: state?.m })}, ${keyset('Секунды', { count: state?.s as number + 1 })}</speak>`

    res.setPronounceText(responseText, {ssml: true})
}
export const requestTimeHandler: ScenarioHandler = ({ req, res }) => {
    res.appendCommand({
        type: 'GET_CURRENT_TIME'
    })
}

export const roundHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)
    const state = req.state

    let responseText: string

    if (state?.points && state?.points?.length < 5){
        res.appendCommand({
            type: 'ADD_POINT'
        })
        responseText = keyset('Круг')
    } else responseText = keyset('Максимум кругов')

    res.setPronounceText(responseText)
}

