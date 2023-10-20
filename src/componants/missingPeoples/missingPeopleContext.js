import React, { createContext, useContext, useState } from 'react';

const MissingPeopleContext = createContext();

export function MissingPeopleProvider({ children }) {
    const [missingGuyList, setMissingGuyList] = useState([]);
    const [missingGirlList, setMissingGirlList] = useState([]);

    const addMissingGuy = (name) => {
        setMissingGuyList([...missingGuyList, name]);
    };

    const addMissingGirl = (name) => {
        setMissingGirlList([...missingGirlList, name]);
    };

    const removeMissingGuy = (name) => {
        const updatedmissingGuyList = missingGuyList.filter((missingGuy) => missingGuy !== name);
        setMissingGuyList(updatedmissingGuyList);
    };

    const removeMissingGirl = (name) => {
        const updatedmissingGirlList = missingGirlList.filter((missingGirl) => missingGirl !== name);
        setMissingGirlList(updatedmissingGirlList);
    };

    return (
        <MissingPeopleContext.Provider value={{ missingGuyList, missingGirlList, addMissingGuy, addMissingGirl, removeMissingGuy, removeMissingGirl }}>
            {children}
        </MissingPeopleContext.Provider>
    );
}

export function useMissingPeopleContext() {
    return useContext(MissingPeopleContext);
}
