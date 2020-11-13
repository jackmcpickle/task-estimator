import { prompt } from  'inquirer';
import {
    estimateType,
    riskMatrix,
    generalEstimate,
    detailedEstimate,
    askAgain
}  from './questions';
import {
    ESTIMATE_DETAILED,
    ESTIMATE_GENERAL,
    getEstimateTypeDefault,
    setEstimateTypeDefault
} from './answers';

export const askEstimateType = async () => {
    const type = getEstimateTypeDefault();
    if (type) return type;
    const {ESTIMATE_TYPE} = await prompt(estimateType);
    return ESTIMATE_TYPE;
}

export const askHowRisky = async () => {
    return await prompt(riskMatrix);
}

export const askForGeneralEstimate = async () => {
    return await prompt(generalEstimate);
}

export const askForDetailedEstimate = async () => {
    return await prompt(detailedEstimate);
}

export const askForMoreEstimates = async () => {
    const { ASK_AGAIN } = await prompt(askAgain);
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
            estimates = await askForDetailedEstimate()
            break;
        }
        default: {
            estimates = await askForDetailedEstimate()
            break;
        }
    }
    return estimates;
}
