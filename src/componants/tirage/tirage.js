import React, { useState } from 'react';
import './tirage.css';
import { Participants } from '../participant/participant';
import { useMissingPeopleContext } from '../missingPeoples/missingPeopleContext';

function Tirage() {
    const { missingGuyList, missingGirlList } = useMissingPeopleContext();
    const [winner, setWinner] = useState(null);

    const selectWinner = () => {
        const availableParticipants = Participants.filter(
            (participant) =>
                !missingGuyList.includes(participant.nom) &&
                !missingGirlList.includes(participant.nom)
        );

        if (availableParticipants.length === 0) {
            setWinner(null);
        } else {
            const randomIndex = Math.floor(Math.random() * availableParticipants.length);
            const selectedWinner = availableParticipants[randomIndex];
            setWinner(selectedWinner);
        }
    };

    return (
        <div className="tirage-container">
            <button className="tirage-button" onClick={selectWinner}>
                🎰 Sélectionner une personne 🎰
            </button>
            <div className="result-box">
                {winner ? (
                    <p>
                        <strong>{winner.nom}</strong> 🌸<br />
                        {winner.genre === "Fille" ? 'Tu es la grande gagnante !' : 'Tu es le grand gagnant !'}
                    </p>
                ) : (
                    <p>Personne n’a été sélectionné actuellement 👀</p>
                )}
            </div>
        </div>
    );
}

export default Tirage;
