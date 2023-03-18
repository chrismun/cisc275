import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsToAdd, setAttemptsToAdd] = useState<string>("");

    const handleTakeQuiz = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleAddAttempts = () => {
        const parsedAttemptsToAdd = parseInt(attemptsToAdd);
        if (!isNaN(parsedAttemptsToAdd)) {
            setAttemptsLeft(attemptsLeft + parsedAttemptsToAdd);
            setAttemptsToAdd("");
        }
    };

    return (
        <div>
            <h3>Attempts left: {attemptsLeft}</h3>
            <Form.Group controlId="formAttempts">
                
            </Form.Group>
        </div>
    );
}
