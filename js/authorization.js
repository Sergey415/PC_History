async function aut() {
  // Получаем значения введённых логина и пароля
    const logins = document.getElementById("login").value
    const password = document.getElementById("pass").value
  // Передаём их в БД
    let r = await fetch("http://zeref.ru/BD/autorization.php?login=" + logins + "&&pass=" + password)
    a = (await r.text())
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
       //Сохраняем в local storage
    localStorage.setItem("login", logins)
    localStorage.setItem("pass", password)
      // После этого появляется аватар пользователя в виде картинки и кнопка выйти
      block_user.style.display = "flex"
      block_user.style.flexDirection = "column"
      block_user.style.flexWrap = "wrap"
      success.style.display = "block"
      // Форма авторизации/регистрации "удаляется"
      forma.style.display = "none"
      // У кнопок статей удаляются атрибуты, вследствии чего они становятся кликабельными
      but7.removeAttribute("disabled")
      otz4.removeAttribute("disabled")
      //Меняются курсоры
      but7.style.cursor = "pointer"
      otz4.style.cursor = "text"
    }
  }