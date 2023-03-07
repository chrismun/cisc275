import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(() => {
        let randomNum = d6();
        while (randomNum === leftDie) {
            randomNum = d6();
        }
        return randomNum;
        // why isnt this working
        // the tests seem to be expecting a different number of calls to d6
        // ANSWER: 
    });

    return (
        <div>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie && leftDie !== 1 ? (
                <p>You Win!</p>
            ) : leftDie === rightDie && leftDie === 1 ? (
                <p>You Lose!</p>
            ) : null}
        </div>
    );
}
