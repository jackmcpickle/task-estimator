import {
    ESTIMATE_TYPE,
    ESTIMATE_GENERAL,
    ESTIMATE_DETAILED,
    BEST_CASE,
    LIKELY_CASE,
    WORSE_CASE,
    BACKEND_DEV,
    FRONTEND_DEV,
    DESIGN_DEV,
    OTHER_DEV,
    LIKELIHOOD,
    IMPACT,
    ASK_AGAIN,
    getEstimateTypeDefault,
} from "./answers";

const between1and10 =  (input) => {
    const num = parseInt(input, 10);
    if (!isNaN(num) && (num >= 1 || num <= 10)) return true;
    return 'Please pick a number between 1-10';
}

const validNumber =  (input) => {
    const num = parseFloat(input);
    if (!isNaN(num) && (num > 0)) return true;
    return 'Please pick a number above 0';
}

export const estimateType = [
    {
        type: 'rawlist',
        name: ESTIMATE_TYPE,
        message: 'What type of estimate do you want to do?',
        default: getEstimateTypeDefault(),
        choices: [
            {
                name: 'General Estimate (in Days)',
                value: ESTIMATE_GENERAL
            },
            {
                name: 'Detailed Estimate (in Hours)',
                value: ESTIMATE_DETAILED
            }
        ]
    },
]

export const detailedEstimate = [
    {
        type: 'number',
        name: BEST_CASE,
        message: 'Best Case',
        suffix: ' (x Hours)',
        validate: validNumber
    },
    {
        type: 'number',
        name: LIKELY_CASE,
        message: 'Likely Case',
        suffix: ' (x Hours)',
        validate: validNumber
    },
    {
        type: 'number',
        name: WORSE_CASE,
        message: 'Worse Case',
        suffix: ' (x Hours)',
        validate: validNumber
    }
];

export const generalEstimate = [
    {
        type: 'number',
        name: BACKEND_DEV,
        message: 'Backend Dev',
        suffix: ' (x Days)',
        validate: validNumber
    },
    {
        type: 'number',
        name: FRONTEND_DEV,
        message: 'Frontend Case',
        suffix: ' (x Days)',
        validate: validNumber
    },
    {
        type: 'number',
        name: DESIGN_DEV,
        message: 'UX / UI Design',
        suffix: ' (x Days)',
        validate: validNumber
    },
    {
        type: 'number',
        name: OTHER_DEV,
        message: 'TA / QA / Other',
        suffix: ' (x Days)',
        validate: validNumber
    }
];

export const riskMatrix = [
    {
        type: 'number',
        name: LIKELIHOOD,
        message: 'Likelihood of something going wrong',
        suffix: ' (1 = Unlikely, 10 = Likely)',
        default: 1,
        validate: between1and10
    },
    {
        type: 'number',
        name: IMPACT,
        message: 'Impact if something went wrong',
        suffix: ' (1 = Minor, 10 = Major)',
        default: 1,
        validate: between1and10
    },
];

export const askAgain = [
    {
        type: 'confirm',
        name: ASK_AGAIN,
        message: 'Keep Estimating?',
        default: true,
    }
]