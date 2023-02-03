import { atom, selector } from 'recoil'

// setStage: integer - Current hatching stage
const setHatchStage = atom({
    key: 'setHatchStage',
    default: 0,
});
const hatchStage = selector({
    key: 'hatchStage',
    get: ({ get }) => get(setHatchStage),
});

// setQ1: boolean - finished Q1
const setQ1 = atom({
    key: 'setQ1',
    default: false,
});
const q1 = selector({
    key: 'q1',
    get: ({ get }) => get(setQ1),
});
// setQ2: boolean - finished Q2
const setQ2 = atom({
    key: 'setQ2',
    default: false,
});
const q2 = selector({
    key: 'q2',
    get: ({ get }) => get(setQ2),
});
// setQ3: boolean - finished Q3
const setQ3 = atom({
    key: 'setQ3',
    default: false,
});
const q3 = selector({
    key: 'q3',
    get: ({ get }) => get(setQ3),
});
// setQ4: boolean - finished Q4
const setQ4 = atom({
    key: 'setQ4',
    default: false,
});
const q4 = selector({
    key: 'q4',
    get: ({ get }) => get(setQ1),
});


// setCorrect: integer - Number of correctly answered math problems
const setCorrect = atom({
    key: 'setCorrect',
    default: 0,
});
const correct = selector({
    key: 'correct',
    get: ({ get }) => get(setCorrect),
});

// setWrong: integer - Number of wrongly answered math problems
const setWrong = atom({
    key: 'setWrong',
    default: 0,
});
const wrong = selector({
    key: 'wrong',
    get: ({ get }) => get(setWrong),
});


// setBgColor: string - Background body color
const setBgColor = atom({
    key: 'setBgColor',
    default: 'whitesmoke',
});
const bgColor = selector({
    key: 'bgColor',
    get: ({ get }) => get(setBgColor),
});

// setHeaderClass: string - Header pattern class
const setHeaderClass = atom({
    key: 'setHeaderClass',
    default: 'pinkcrystal',
});
const headerClass = selector({
    key: 'headerClass',
    get: ({ get }) => get(setHeaderClass),
});


export { 
    setHatchStage, hatchStage,
    setQ1, q1,
    setQ2, q2,
    setQ3, q3,
    setQ4, q4,
    setCorrect, correct,
    setWrong, wrong,
    setBgColor, bgColor,
    setHeaderClass, headerClass
};