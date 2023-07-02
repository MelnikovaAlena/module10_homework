/* Задание 8 - Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let map = new Map();
map.set  ('apple', 3);
map.set  ('watermelon', 6);
map.set  ('lemon', 4);
map.set  ('orange', 8);
for (let [keys, values] of map) {
    console.log(`Key - ${keys}, Value - ${values}`)
}