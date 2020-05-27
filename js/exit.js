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
    but1.setAttribute("disabled", "disabled")
    lik.setAttribute("disabled", "disabled")
    but3.setAttribute("disabled", "disabled")
    otz1.setAttribute("disabled", "disabled")
    lik2.setAttribute("disabled", "disabled")
    otz2.setAttribute("disabled", "disabled")
    but5.setAttribute("disabled", "disabled")
    otz3.setAttribute("disabled", "disabled")
    lik3.setAttribute("disabled", "disabled")
    lik4.setAttribute("disabled", "disabled")
    otz4.setAttribute("disabled", "disabled")
    but7.setAttribute("disabled", "disabled")
    // "Удаляем" иконку пользователя и кнопку выйти
    block_user.style.display = "none"
    // Показываем форму авторизации/регистрации
    forma.style.display = "flex"
    // Меняем курсоры
    but1.style.cursor = "not-allowed"
    but3.style.cursor = "not-allowed"
    but5.style.cursor = "not-allowed"
    but7.style.cursor = "not-allowed"
    lik.style.cursor = "not-allowed"
    lik2.style.cursor = "not-allowed"
    lik3.style.cursor = "not-allowed"
    lik4.style.cursor = "not-allowed"
    otz1.style.cursor = "not-allowed"
    otz2.style.cursor = "not-allowed"
    otz3.style.cursor = "not-allowed"
    otz4.style.cursor = "not-allowed"
  }