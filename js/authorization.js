async function aut() {
  // Получаем значения введённых логина и пароля
    const logins = document.getElementById("login").value
    const password = document.getElementById("pass").value
  // Передаём их в БД
    let r = await fetch("http://BD/autorization.php?login=" + logins + "&&pass=" + password)
    a = (await r.text())
    //Сохраняем в local storage
    localStorage.setItem("login", logins)
    localStorage.setItem("pass", password)
    //Проверяем, правильность введённых логина и пароля
    if (a == "null") {
      //В случае неправилности выводим сообщение об ошибке
      notsuccess.style.display = "block"
      //И через 3 секунды "удаляем" его
      setTimeout(() => {
        notsuccess.style.display = "none"
      }, 3000);
    } else {
      // В случае правильности выводим сообщение об успешной авторизации и через 3 секунды "удаляем" его
      setTimeout(() => {
        success.style.display = "none"
      }, 3000);
      // После этого появляется аватар пользователя в виде картинки и кнопка выйти
      block_user.style.display = "flex"
      block_user.style.flexDirection = "column"
      block_user.style.flexWrap = "wrap"
      success.style.display = "block"
      // Форма авторизации/регистрации "удаляется"
      forma.style.display = "none"
      // У кнопок статей удаляются атрибуты, вследствии чего они становятся кликабельными
      but1.removeAttribute("disabled")
      lik.removeAttribute("disabled")
      but3.removeAttribute("disabled")
      otz1.removeAttribute("disabled")
      lik2.removeAttribute("disabled")
      otz2.removeAttribute("disabled")
      lik3.removeAttribute("disabled")
      otz3.removeAttribute("disabled")
      but5.removeAttribute("disabled")
      but7.removeAttribute("disabled")
      otz4.removeAttribute("disabled")
      lik4.removeAttribute("disabled")
      //Меняются курсоры
      but1.style.cursor = "pointer"
      but3.style.cursor = "pointer"
      but5.style.cursor = "pointer"
      but7.style.cursor = "pointer"
      lik.style.cursor = "pointer"
      lik2.style.cursor = "pointer"
      lik3.style.cursor = "pointer"
      lik4.style.cursor = "pointer"
      otz1.style.cursor = "text"
      otz2.style.cursor = "text"
      otz3.style.cursor = "text"
      otz4.style.cursor = "text"
    }
  }