
export const calculatePert = (low, mid, high) => {
    return parseFloat(((low + (mid * 4) + high) / 6).toFixed(2));
}
export const calculateRisk = (likelihood, impact) => {
    return parseFloat((likelihood * impact).toFixed(2));
}