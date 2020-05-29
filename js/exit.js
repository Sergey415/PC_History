async function Exit() {
  //Очищаем поля ввода логина и пароля
  document.getElementById("login").value = ""
  document.getElementById("pass").value = ""
  // Сообщение выводится сразу после выхода, как бы предупреждая пользователя
    Swal.fire({
      title:"Внимание, чтобы кнопки стали вновь кликабельны, необходима аворизация!",
      icon:"warning",
      timer: 3000
    })
    // Очищается local storage
    localStorage.removeItem("login")
    localStorage.removeItem("pass")
    a = null
    // Устанавливаются атрибуты кнопкам, чтобы они не были кликабельными
    otz4.setAttribute("disabled", "disabled")
    but7.setAttribute("disabled", "disabled")
    // "Удаляем" иконку пользователя и кнопку выйти
    block_user.style.display = "none"
    // Показываем форму авторизации/регистрации
    forma.style.display = "flex"
    // Меняем курсоры
    but7.style.cursor = "not-allowed"
    otz4.style.cursor = "not-allowed"
  }