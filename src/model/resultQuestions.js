import uuid from 'uuid';

const resultsLists = async getResultsLists => {
    let promise = new Promise((resolve, reject) => {
        const quizResults = [
            {
                id: uuid(),
                pos: 1,
                correctAnswer: "Mission Shakti"
            },
            {
                id: uuid(),
                pos: 2,
                correctAnswer: "Kerala"
            },
            {
                id: uuid(),
                pos: 3,
                correctAnswer: "Both A and B"
            },
            {
                id: uuid(),
                pos: 4,
                correctAnswer: "Blue light"
            },
            {
                id: uuid(),
                pos: 5,
                correctAnswer: "Antarctica"
            },
            {
                id: uuid(),
                pos: 6,
                correctAnswer: "GSLV MkIII"
            },
            {
                id: uuid(),
                pos: 7,
                correctAnswer: "For the development of Lithium-ion batteries."
            },
            {
                id: uuid(),
                pos: 8,
                correctAnswer: "All the above are correct."
            },
            {
                id: uuid(),
                pos: 9,
                correctAnswer: "US"
            },
            {
                id: uuid(),
                pos: 10,
                correctAnswer: "China"
            }
        ];
        const randomizedQuizResults = quizResults.sort(() => Math.random() - 0.5);
        setTimeout(() => {
            resolve(randomizedQuizResults);
        }, 7000);
    });
    const resultsList = await promise;
    return resultsList;
}

export default resultsLists;