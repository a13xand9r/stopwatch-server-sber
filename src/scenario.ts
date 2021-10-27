import { SmartAppBrainRecognizer } from '@salutejs/recognizer-smartapp-brain'
import {
    createIntents,
    createMatchers,
    createSaluteRequest,
    createSaluteResponse,
    createScenarioWalker,
    createSystemScenario,
    createUserScenario,
    NLPRequest,
    NLPResponse,
    SaluteRequest
} from '@salutejs/scenario'
import { SaluteMemoryStorage } from '@salutejs/storage-adapter-memory'
import { noMatchHandler, pauseHandler, roundHandler, runAppHandler, startHandler, stopHandler, timeHandler } from './handlers'
import model from './intents.json'
import { ScenarioRequest } from './types'
require('dotenv').config()

const storage = new SaluteMemoryStorage()
const intents = createIntents(model.intents)
const { intent } = createMatchers<ScenarioRequest, typeof intents>()

const userScenario = createUserScenario<ScenarioRequest>({
    Start: {
        match: intent('/Старт', {confidence: 0.2}),
        handle: startHandler
    },
    Pause: {
        match: intent('/Пауза', {confidence: 0.2}),
        handle: pauseHandler
    },
    Stop: {
        match: intent('/Стоп', {confidence: 0.2}),
        handle: stopHandler
    },
    Time: {
        match: intent('/Время', {confidence: 0.2}),
        handle: timeHandler
    },
    Round: {
        match: intent('/Круг', {confidence: 0.2}),
        handle: roundHandler
    },
})

const systemScenario = createSystemScenario({
    RUN_APP: runAppHandler,
    NO_MATCH: noMatchHandler
})

const scenarioWalker = createScenarioWalker({
    recognizer: new SmartAppBrainRecognizer(process.env.SMARTAPP_BRAIN_TOKEN),
    intents,
    systemScenario,
    userScenario
})

export const handleNlpRequest = async (request: NLPRequest): Promise<NLPResponse> => {
    const req = createSaluteRequest(request)
    const res = createSaluteResponse(request)

    const sessionId = request.uuid.sub
    const session = await storage.resolve(sessionId)

    await scenarioWalker({ req, res, session })

    await storage.save({ id: sessionId, session })

    return res.message
}