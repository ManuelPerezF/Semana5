
import { useState } from 'react';

export const useCalculate = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const calculate = async (num1, num2, operation) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3001/operaciones?num1=${num1}&num2=${num2}&operation=${operation}`);

            if (!response.ok) {
                throw new Error("Failed to fetch result");
            }

            const data = await response.json();
            setResult(data.result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { result, calculate, error, loading };
};