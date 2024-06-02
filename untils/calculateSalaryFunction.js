export function calculateSalaryFunction(basicSalary, sumOfEpfAllowed, earnings, sumOfDeduction) {
    // Total Earnings
    const totalEarnings = basicSalary + earnings;

    // Total Earnings for EPF
    const totalEarningsForEPF = basicSalary + sumOfEpfAllowed;

    // Gross Deduction
    const grossDeduction = sumOfDeduction;

    // Gross Earnings
    const grossEarnings = totalEarnings - grossDeduction;

    // Gross Salary for EPF
    const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;

    // Employee EPF (8%)
    const employeeEPF = grossSalaryForEPF * 0.08;

    // Employer EPF (12%)
    const employerEPF = grossSalaryForEPF * 0.12;

    // Employer ETF (3%)
    const employerETF = grossSalaryForEPF * 0.03;

    return {
        totalEarnings: totalEarnings,
        totalEarningsForEPF: totalEarningsForEPF,
        grossDeduction: grossDeduction,
        grossEarnings: grossEarnings,
        grossSalaryForEPF: grossSalaryForEPF,
        employeeEPF: employeeEPF,
        employerEPF: employerEPF,
        employerETF: employerETF
    };
}

