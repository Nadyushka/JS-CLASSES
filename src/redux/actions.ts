import {useDispatch as _useDispatch} from 'react-redux'

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload: {
        amountOfBYN: string,
        amountOfCurrency: string
    }
};

// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {
            amountOfBYN: amountOfBYN,
            amountOfCurrency: amountOfCurrency
        }
    }
};

export type ChangeActionType = {
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    isBuying:boolean
};

// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        isBuying:isBuying
    }
};

export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    currentCurrency: string
};

// @ts-ignore
export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        currentCurrency:currentCurrency
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;

export function useDispatch(){
    const dispatch = _useDispatch();
    return (ac:CurrencyReducersTypes) => dispatch(ac)
}