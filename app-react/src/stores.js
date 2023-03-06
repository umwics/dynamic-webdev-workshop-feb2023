import { atom } from 'recoil'

// setStage: integer - Current hatching stage
const setHatchStage = atom({
    key: 'setHatchStage',
    default: 0,
})

// setQ1: boolean - finished Q1
const setQ1 = atom({
    key: 'setQ1',
    default: false,
})
// setQ2: boolean - finished Q2
const setQ2 = atom({
    key: 'setQ2',
    default: false,
})
// setQ3: boolean - finished Q3
const setQ3 = atom({
    key: 'setQ3',
    default: false,
})
// setQ4: boolean - finished Q4
const setQ4 = atom({
    key: 'setQ4',
    default: false,
})


// setCorrect: integer - Number of correctly answered math problems
const setCorrect = atom({
    key: 'setCorrect',
    default: 0,
})

// setWrong: integer - Number of wrongly answered math problems
const setWrong = atom({
    key: 'setWrong',
    default: 0,
})


// setBgColor: string - Background body color
const setBgColor = atom({
    key: 'setBgColor',
    default: 'whitesmoke',
})

// setHeaderClass: string - Header pattern class
const setHeaderClass = atom({
    key: 'setHeaderClass',
    default: 'pinkcrystal',
})


export { 
    setHatchStage,
    setQ1, setQ2, setQ3, setQ4,
    setCorrect, setWrong,
    setBgColor, setHeaderClass,
};