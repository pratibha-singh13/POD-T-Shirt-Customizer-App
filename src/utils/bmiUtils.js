export const computeScaleFromBMI = (height, weight) => {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    if (bmi < 18) return 0.9;
    if (bmi < 22) return 1.0;
    if (bmi < 26) return 1.1;
    return 1.2;
};
