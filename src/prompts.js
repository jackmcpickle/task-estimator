import { prompt } from  'inquirer';
import {
    estimateTypeQuestions,
    riskMatrixQuestions,
    generalEstimateQuestions,
    detailedEstimateQuestions,
    askAgainQuestions
}  from './questions';
import {
    ESTIMATE_DETAILED,
    ESTIMATE_GENERAL,
    getEstimateTypeDefault,
    setEstimateTypeDefault,
} from './answers';
import { calculatePert, calculateRisk } from './calculations';

export const askEstimateType = async () => {
    const type = getEstimateTypeDefault();
    if (type) return type;
    const { ESTIMATE_TYPE } = await prompt(estimateTypeQuestions);
    return ESTIMATE_TYPE;
}

export const askHowRisky = async () => {
    const riskMatrix = await prompt(riskMatrixQuestions);
    const { LIKELIHOOD, IMPACT } = riskMatrix;
    const risk = calculateRisk(LIKELIHOOD, IMPACT);
    return { ...riskMatrix, RISK: risk }
}

export const askForGeneralEstimate = async () => {
    return await prompt(generalEstimateQuestions);
}

export const askForDetailedEstimate = async () => {
    const detailedEstimates = await prompt(detailedEstimateQuestions);
    const { BEST_CASE, LIKELY_CASE, WORSE_CASE } = detailedEstimates;
    const pert = calculatePert(BEST_CASE, LIKELY_CASE, WORSE_CASE);
    return {...detailedEstimates, PERT_CASE: pert }
}

export const askForMoreEstimates = async () => {
    const { ASK_AGAIN } = await prompt(askAgainQuestions);
    return ASK_AGAIN;
}


export const getEstimates = async (type) => {
    setEstimateTypeDefault(type);
    let estimates;
    switch (type) {
        case ESTIMATE_GENERAL: {
            estimates = await askForGeneralEstimate()
            break;
        }
        case ESTIMATE_DETAILED: {
            estimates = await askForDetailedEstimate();
            break;
        }
        default: {
            estimates = await askForDetailedEstimate()
            break;
        }
    }
    return estimates;
}
