  // Объявляем переменные, которые позже передаём в БД (это нужно, чтобы узнать был ли поставлен лайк)
  var l1 = 0 
  var l2 = 0 
  var l3 = 0
  var l4 = 0
  // Переменная 1-ой кнопки
  let likes = 1
  function like() {
    // При вызове функции от переменной сразу отнимается 1
    likes--
    // Далее проверяется, если остаток от деления числа на 2 равен нулю, то источник картинки меняется на закрашенную картинку и переменной присваивается единица
    if (likes % 2 == 0) {
      but2.src = "images/likeheartred.png"
      l1 = 1
    }
    // Второе условие проверяет, если остаток от деления числа на 2 не равен нулю, то источник картинки меняется на не закрашенную картинку и переменной присваивается ноль
    if (likes % 2 != 0) {
      but2.src = "images/likeheartwhite.png"
      l1 = 0
    }
// Остальные функции работают аналогичным способом
  }
  // Переменная 2-ой кнопки
  let likes2 = 1
  function like2() {
    likes2--
    if (likes2 % 2 == 0) {
      but4.src = "images/likeheartred.png"
      l2 = 1
    }
    if (likes2 % 2 != 0) {
      but4.src = "images/likeheartwhite.png"
      l2 = 0
    }
  }
  // Переменная 3-ой кнопки
  let likes3 = 1
  function like3() {
    likes3--
    if (likes3 % 2 == 0) {
      but6.src = "images/likeheartred.png"
      l3 = 1
    }
    if (likes3 % 2 != 0) {
      but6.src = "images/likeheartwhite.png"
      l3 = 0
    }
  }
  // Переменная 4-ой кнопки
  let likes4 = 1 
  function like4() {
    likes4--
    if(likes4 % 2 == 0){
      but8.src = "images/likeheartred.png"
      l4 = 1
    }
    if(likes4 % 2 != 0) {
      but8.src = "images/likeheartwhite.png"
      l4 = 0
    }
  }