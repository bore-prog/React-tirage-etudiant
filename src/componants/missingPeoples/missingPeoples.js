import React, { useState, useEffect } from 'react';
import './missingPeoples.css';
import { AiOutlineClose } from 'react-icons/ai';
import { Participants } from '../participant/participant';
import { useMissingPeopleContext } from './missingPeopleContext';

function missingGuyList() {
    const { missingGirlList, addMissingGirl, removeMissingGirl, missingGuyList, addMissingGuy, removeMissingGuy } = useMissingPeopleContext();

    const [selectedMissingPeople, setSelectedMissingPeople] = useState("");
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const filteredParticipants = Participants.filter(
            (participant) =>
                !missingGuyList.includes(participant.nom) &&
                !missingGirlList.includes(participant.nom)
        );
        setParticipants(filteredParticipants);
    }, [missingGuyList, missingGirlList]);

    const handleAddMissingPeople = () => {
        if (selectedMissingPeople) {
            const selectedParticipant = Participants.find(
                (participant) => participant.nom === selectedMissingPeople
            );
            if (selectedParticipant) {
                if (selectedParticipant.genre === "Fille") {
                    addMissingGirl(selectedMissingPeople);
                } else {
                    addMissingGuy(selectedMissingPeople);
                }
            }
            setSelectedMissingPeople("");
        }
    };

    const handleRemoveFrommissingGuyList = (name) => {
        removeMissingGuy(name);
    };

    const handleRemoveFrommissingGirlList = (name) => {
        removeMissingGirl(name);
    };

    return (
        <div className="missingPeople-list-container">
            <div className="column">
                <h2>Ajouter un.e absent.e</h2>
                <select
                    value={selectedMissingPeople}
                    onChange={(e) => setSelectedMissingPeople(e.target.value)}
                >
                    <option value="">Sélectionnez une personne</option>
                    {participants.map((participant, index) => (
                        <option key={index} value={participant.nom}>
                            {participant.nom}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddMissingPeople}>Ajouter</button>
            </div>
            <div className="column">
                <h2>Liste des Absents </h2>
                <ul>
                    {missingGuyList.map((missingPeople, index) => (
                        <li key={index}>
                            {missingPeople}<AiOutlineClose className='button-close' onClick={() => handleRemoveFrommissingGuyList(missingPeople)} />
                        </li>
                    ))}
                </ul>
                <h2>Liste des Absentes</h2>
                <ul>
                    {missingGirlList.map((missingPeoplee, index) => (
                        <li key={index}>
                            {missingPeoplee} <AiOutlineClose className='button-close' onClick={() => handleRemoveFrommissingGirlList(missingPeoplee)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default missingGuyList;
