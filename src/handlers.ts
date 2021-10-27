import { ScenarioHandler } from './types';
import * as dictionary from './system.i18n'
require('dotenv').config()

export const runAppHandler: ScenarioHandler = ({ req, res }) => {

    const keyset = req.i18n(dictionary)
    let responseText = keyset('Привет')

    res.setPronounceText(responseText)
    res.appendBubble(responseText)
    res.setAutoListening(true)
    res.appendSuggestions(['Помощь', 'Выйти'])
}

export const noMatchHandler: ScenarioHandler = async ({ req, res }) => {
    console.log('state', req.state)
    const keyset = req.i18n(dictionary)
    res.appendBubble(keyset('404'))
    res.setPronounceText(keyset('404'))
    res.appendSuggestions(['Поменять номер', 'Выйти'])
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
        `<speak>${keyset('Время')}${keyset('Часы', { count: state?.h })} ${keyset('Минуты', { count: state?.m })}, ${keyset('Секунды', { count: state?.s })}</speak>`

    res.setPronounceText(responseText, {ssml: true})
}

export const roundHandler: ScenarioHandler = ({ req, res }) => {
    const keyset = req.i18n(dictionary)
    const state = req.state

    let responseText: string

    if (state?.points?.length && state?.points?.length < 5){
        res.appendCommand({
            type: 'ADD_POINT'
        })
        responseText = keyset('Круг')
    } else responseText = keyset('Максимум кругов')

    res.setPronounceText(responseText)
}

