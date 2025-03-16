'use client';
import { useState } from 'react';
import { useCalculate } from './components/useCalculate';

export default function Page() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('sum');
  const { result, calculate, error, loading } = useCalculate();

  const handleCalculate = () => {
    calculate(num1, num2, operation);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="gap-2 w-96 grid grid-cols-3 ">
        <input
          type="text"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="bg-gray-700 rounded-md px-3 py-2 flex-1"
        />

        <select
          id="dropdown"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="bg-blue-500 rounded-md px-3 py-2"
        >
          <option value="sum">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>

        <input
          type="text"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="bg-gray-700 rounded-md px-3 py-2 flex-1"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="bg-green-500 rounded-md px-4 py-2 mt-4 text-white font-semibold"
        disabled={loading}
      >
        {loading ? 'Calculando...' : 'Calcular'}
      </button>

      {error && <div className="mt-4 text-red-500">{error}</div>}
      {result !== null && <div className="mt-4 text-white">Resultado: {result}</div>}
    </div>
  );
}