export const calculatePert = (low, mid, high) => parseFloat(((low + (mid * 4) + high) / 6).toFixed(2));
export const calculateRisk = (likelihood, impact) => parseFloat((likelihood * impact).toFixed(2));
