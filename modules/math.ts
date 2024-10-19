// math.ts
const E = Math.E; // Euler's number
const PI = Math.PI; // Pi
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2; // Golden ratio

// Power function: base^exp
function pow(base: number, exp: number): number {
    return Math.pow(base, exp);
}

// Square root function: √x
function sqrt(x: number): number {
    return Math.sqrt(x);
}

// Natural logarithm function: ln(x)
function log(x: number): number {
    return Math.log(x);
}

// Logarithm base 10 function: log10(x)
function log10(x: number): number {
    return Math.log10(x);
}

// Mean function: average of a list of values
function mean(values: number[]): number {
    if (values.length === 0) return NaN;
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}

// Median function: middle value of a sorted list of values
function median(values: number[]): number {
    if (values.length === 0) return NaN;
    const sortedValues = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);

    if (sortedValues.length % 2 === 0) {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
        return sortedValues[mid];
    }
}

// Mode function: most frequent value(s) in a list of values
function mode(values: number[]): number[] {
    if (values.length === 0) return [];

    const frequencyMap: Record<number, number> = {};
    values.forEach(value => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const modes = Object.keys(frequencyMap)
        .filter(key => frequencyMap[Number(key)] === maxFrequency)
        .map(Number);

    return modes;
}

export {E, PI, GOLDEN_RATIO, pow, sqrt, log, log10, mean, median, mode}
