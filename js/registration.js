async function registr() {
  // Создаём переменные и заносим в них значения имени, фамилии, логина и пароля введённых пользователем
    let names = document.getElementById("name").value
    let familys = document.getElementById("family").value
    let logins = document.getElementById("logins").value
    let passwords = document.getElementById("passwords").value
    
    // Проверяем
    if (logins != "" && passwords != "") {
      Swal.fire({
        icon: "success",
        title: "Успешно!",
        timer: 1500
      })
      localStorage.setItem('login', logins)
      localStorage.setItem('pass', passwords)
      proverka()
      // Отправляем их в БД
      let r = await fetch("http://BD/registration.php?" + "name=" + names + "&&family=" + familys + "&&login=" + logins + "&&pass=" + passwords)
      a = (await r.text())
    } else {
      // если поля логина и(или) пароля пустые, то выводим сообщение об ошибке
      Swal.fire({
        icon: "error",
        title: "Произошла ошибка!",
        text: "Возможно это связано с тем, что поля ввода логина и (или) пароля остались пустыми"
      })
       }
  }