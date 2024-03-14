export const getRandomNumber = (min: number = 0, max: number) => {
    return Math.random() * (max - min + 1) + min;
};
