import React, { createContext, useContext, useReducer } from "react";

// prep the data layer
export const StateContext = createContext();

// initialstate = what data layer looks like when app is loaded
// reducer = list changes for data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,
        initialState)}>
        {children}
    </StateContext.Provider>
);

// hook - allows pull info from the data layer
export const useStateValue = () => useContext(StateContext);