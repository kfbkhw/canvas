export const getRandomNumber = (max: number, min: number = 0) => {
    return Math.random() * (max - min + 1) + min;
};
