let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    window.document.location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const gar1 = Math.round( Math.random() * 3);
            if (gar1 === 1){
                answerField.innerText = `Постойка, наверное это ${answerNumber }?`;
            } else if (gar1 === 2){
                answerField.innerText = `Дай-ка подумать, может ${answerNumber }?`;
            } else if (gar1 === 1){
                answerField.innerText = `Возможно это число ${answerNumber }?`;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const gar = Math.round( Math.random() * 3);
            if (gar === 1){
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
            } else if (gar === 2){
                answerField.innerText = `Мне кажется, это число ${answerNumber }?`;
            } else if (gar === 1){
                answerField.innerText = `Похоже, это число ${answerNumber }?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const gar2 = Math.round( Math.random() * 3);
            if (gar2 === 1){
                answerField.innerText = `Это было слишком легко`;
            } else if (gar2 === 2){
                answerField.innerText = `Давай в следующий раз что нибудь посложнее ?`;
            } else if (gar2 === 1){
                answerField.innerText = `Ура, я угадал`;
            }
        gameRun = false;
    }
})

