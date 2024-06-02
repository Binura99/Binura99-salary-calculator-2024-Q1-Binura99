export function apitFunctions(monthlyProfits) {
    if (monthlyProfits <= 100000) {
        return 0; // Relief from Tax
    } else if (monthlyProfits <= 141667) {
        return 0.06 * monthlyProfits - 6000;
    } else if (monthlyProfits <= 183333) {
        return 0.12 * monthlyProfits - 14500;
    } else if (monthlyProfits <= 225000) {
        return 0.18 * monthlyProfits - 25500;
    } else if (monthlyProfits <= 266667) {
        return 0.24 * monthlyProfits - 39000;
    } else if (monthlyProfits <= 308333) {
        return 0.30 * monthlyProfits - 55000;
    } else {
        return 0.36 * monthlyProfits - 73500;
    }
};