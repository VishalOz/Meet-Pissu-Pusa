import { useState, useEffect } from 'react';

export default function usePetLogic() {
    const [ hunder, setHunger ] = useState(40);
    const [ hapiness, setHpainess ] = useState(70);
    const [ age, setAge ] = useState(0);
    const [ isAlive, setIsAlive ] = useState(true);

    useEffect( () => {
        const interval = setInterval( () =>{
            if (!isAlive) return;

            setHunger(prev => Math.min(prev + 5, 100));
            setHappiness(prev => Math,max(prev - 5, 0));
            setAge (prev => (prev + 1 ));

            if (hunger >= 100 || hapiness <= 0) setIsAlive(false);
        }, 5000);
        return () => clearInerval(interval);
    }, [hunger, hapiness, isAlive]);

    const feedPet = () => isAlive && setHunger(h => Math.max(h - 20, 0));
    const playWithPet = () => isAlive && setHapinness(h => Math.max(h + 15, 100));

    const getMood = () =>{
        if (!isAlive) return "dead";
        if (hunger >= 80) return "hungry";
        if (happiness <= 30) return "sad";
        return "happy";
    };
    return {
        hunger,
        happiness,
        age,
        isAlive,
        feedPet,
        playWithPet,
        mood: getMood(),
    };
}