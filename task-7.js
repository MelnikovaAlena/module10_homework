/* Задание 7 - Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [0, 45, null, undefined, 1, true, '59'];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);