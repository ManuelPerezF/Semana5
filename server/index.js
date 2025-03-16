
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/operaciones', (req, res) => {
    const { num1, num2, operation } = req.query;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result = 0;

    switch (operation) {
        case 'sum':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }
    
    res.json({ result });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});