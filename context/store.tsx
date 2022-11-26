import React, { useReducer } from 'react';

const SET_APP_CONTENT = 'SET_APP_CONTENT';

type InitialStateType = {
    home: any;
};

interface IAction {
    type: typeof SET_APP_CONTENT;
    payload?: any;
}

interface ContextType {
    state: InitialStateType;
    dispatch: (action: IAction) => void;
}

export const Store = React.createContext<ContextType | undefined>(undefined);

const appReducer = (state: InitialStateType, action: IAction) => {
    switch (action.type) {
        case SET_APP_CONTENT: {
            return { ...state, ...action.payload };
        }
    }
};

// initial state
const initialState: InitialStateType = {
    home: undefined,
};

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, { ...initialState });

    Store.displayName = 'StoreContext';

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
