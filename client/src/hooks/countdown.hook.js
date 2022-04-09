import { useEffect, useState } from 'react';

const useCountdown = (num) => {
    const countDownDate = new Date().getTime() + 100000;

    const [countDown, setCountDown] = useState(
        num
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDown - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    return getReturnValues(countDown);
};

    const getReturnValues = (countDown) => {
        // calculate time left
        const hoursTimer = Math.floor(
            (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesTimer = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const secondsTimer = Math.floor((countDown % (1000 * 60)) / 1000);

        return [hoursTimer, minutesTimer, secondsTimer];
    };

export { useCountdown };
