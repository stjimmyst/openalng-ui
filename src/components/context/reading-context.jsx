import { createContext } from 'react';

// function CreateReadingContext(question_numbers) {
//     var questoins = {}
//     for (i = 0; i < question_numbers; i++) {
//         questoins.push({
//             key:   i,
//             value: ""
//         });
//     }
//     return createContext({
//         questoins: {},
//         setQuestions: () => {}
//     })
// }
// export default CreateReadingContext;

const ReadingContext = createContext(
    {
        questions: {},
        setQuestions: () => {} 
    }
);
export default ReadingContext;