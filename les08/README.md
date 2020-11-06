Функция которая будет запускаться только тогда когда загрузится ведь html в **DOM**.

Обычно используется как инициатор добавления слушателей событий на html-элементы

```
document.addEventListener('DOMContentLoaded', () => {
    //listeners
});
```
или
```
window.addEventListener("load", () => {
    //listeners
});

```
_____
Преобразование `node list` или `html collection` в `array` через *spread syntax*

```
const arrOfElements = [ ...documents.querySelector('.item') ];
```