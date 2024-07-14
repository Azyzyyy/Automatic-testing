import capitalize from '../src/capitalize.js';

if (capitalize('my new car') !== 'My new car') {
    throw new Error('Функция работает некорректно');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает некорректно');
}

console.log('Все тесты пройдены');