export const ESTIMATE_TYPE = 'ESTIMATE_TYPE';
export const ESTIMATE_GENERAL = 'ESTIMATE_GENERAL';
export const ESTIMATE_DETAILED = 'ESTIMATE_DETAILED';

export const BEST_CASE = 'BEST_CASE';
export const LIKELY_CASE = 'LIKELY_CASE';
export const WORSE_CASE = 'WORSE_CASE';

export const BACKEND_DEV = 'BACKEND_DEV';
export const FRONTEND_DEV = 'FRONTEND_DEV';
export const DESIGN_DEV = 'DESIGN_DEV';
export const OTHER_DEV = 'OTHER_DEV';

export const LIKELIHOOD = 'LIKELIHOOD';
export const IMPACT = 'IMPACT';
export const ASK_AGAIN = 'ASK_AGAIN';

let savedEstimateType = '';

export const getEstimateTypeDefault = () => {
    return savedEstimateType;
}

export const setEstimateTypeDefault = (type) => {
    const types = [ESTIMATE_GENERAL, ESTIMATE_DETAILED];
    if (type.indexOf(types)) {
        savedEstimateType = type;
    }
    return savedEstimateType;
}