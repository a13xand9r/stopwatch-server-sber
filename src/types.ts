import {
    AppState,
    SaluteHandler,
    SaluteRequest,
    SaluteRequestVariable
} from '@salutejs/scenario'


export interface ScenarioAppState extends AppState {
    ms?: number;
    s?: number;
    m?: number;
    h?: number;
    isGoing?: boolean;
}

export interface ScenarioIntentsVariables extends SaluteRequestVariable {
    // https://github.com/sberdevices/salutejs/issues/170
    product?: string;
    number?: string;
    ordinal?: string;
    category?: string;
    quantity?: string;
}

export type ScenarioRequest = SaluteRequest<ScenarioIntentsVariables, ScenarioAppState>
export type ScenarioHandler = SaluteHandler<ScenarioRequest>