import uuid from 'uuid';

const questionsLists = async getQuestionsLists => {
    let promise = new Promise((resolve, reject) => {
        const quizQuestions = [
            {
                id: uuid(),
                text: "Which of the following anti-satellite missile is tested by India on 27 March, 2019?",
                pos: 1,
                answers: {
                    a: "Mission Gagan",
                    b: "Mission Shakti",
                    c: "Mission Antriksh",
                    d: "Mission Destruction"
                }
            },
            {
                id: uuid(),
                text: "Which state of India became first to reserve a government job for HIV positive candidates?",
                pos: 2,
                answers: {
                    a: "Maharashtra",
                    b: "Mizoram",
                    c: "Uttar Pradesh",
                    d: "Kerala"
                }
            },
            {
                id: uuid(),
                text: "Which of the following creature is linked with the moon pollution?",
                pos: 3,
                answers: {
                    a: "Tardigrades",
                    b: "Water Bears",
                    c: "Both A and B",
                    d: "Neither A nor B"
                }
            },
            {
                id: uuid(),
                text: "Exposure to which light may accelerate aging?",
                pos: 4,
                answers: {
                    a: "Blue light",
                    b: "Red Light",
                    c: "Yellow Light",
                    d: "None of the above"
                }
            },
            {
                id: uuid(),
                text: "In which continent scientists have found particles of rare isotope of Iron?",
                pos: 5,
                answers: {
                    a: "Africa",
                    b: "Antarctica",
                    c: "Europe",
                    d: "Australia"
                }
            },
            {
                id: uuid(),
                text: "Chandrayaan-2 Mission was launched by which vehicle?",
                pos: 6,
                answers: {
                    a: "GSLV MkIII",
                    b: "PSLV C11",
                    c: "GSLV F11",
                    d: "PSLV C45"
                }
            },
            {
                id: uuid(),
                text: "In 2019, Nobel Prize in Chemistry is given for which development?",
                pos: 7,
                answers: {
                    a: "For the development of Lithium-ion batteries.",
                    b: "To develop protein.",
                    c: "For developing cryoelectron microscopy.",
                    d: "None of the above"
                }
            },
            {
                id: uuid(),
                text: "Which of the following statements is/are correct regarding bipolar disorder?",
                pos: 8,
                answers: {
                    a: "It is a mental health condition.",
                    b: "Patients with this disorder undergo intense mood shifts.",
                    c: "Patients with this disorder faces difficulties in planning and decision making.",
                    d: "All the above are correct."
                }
            },
            {
                id: uuid(),
                text: "From which among the following place Nepal has launched its first Satellite NepaliSat-1?",
                pos: 9,
                answers: {
                    a: "US",
                    b: "India",
                    c: "China",
                    d: "EU"
                }
            },
            {
                id: uuid(),
                text: "Which among the following country first reached the ‘Dark Side’ of the Moon?",
                pos: 10,
                answers: {
                    a: "India",
                    b: "USA",
                    c: "China",
                    d: "Russia"
                }
            }
        ];
        const randomizedQuizQuestions = quizQuestions.sort(() => Math.random() - 0.5);
        setTimeout(() => {
            resolve(randomizedQuizQuestions);
        }, 7000);
    });
    const questionsList = await promise;
    return questionsList;
}

export default questionsLists;