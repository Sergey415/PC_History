async function otzivi4() {
  // Объявляем переменную и заносим в неё значение полученное из поля ввода отзыва
    let otzi4 = document.getElementById("otz4").value
    //Отправляем отзыв, логин и пароль пользователя для того, чтобы позже получить его id
    let r = await fetch("http://zeref.ru/BD/Otz.php?" + "otziv=" + otzi4 + "&&login=" + localStorage.getItem("login") + "&&password=" + localStorage.getItem("pass"))
    a = (await r.text())
    // Очищаем поле ввода отзыва
    otz4.value = ""
    // И выводим сообщение о том, что отзыв был успешно отправлен
    Swal.fire({
      icon: "success",
      title: "Ваш отзыв был успешно отправлен:)",
      timer: 2000
    })
    awai()
  }