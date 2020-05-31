// Функция очень похожа на функцию авторизации
async function proverka() {
    let r = await fetch("http://zeref.ru/BD/autorization.php?login=" + localStorage.getItem("login") + "&&pass=" + localStorage.getItem("pass"))
    a = (await r.text())
    if (a != "null" ) {
      block_user.style.display = "flex"
      block_user.style.flexDirection = "column"
      block_user.style.flexWrap = "wrap"
      forma.style.display = "none"
      but7.removeAttribute("disabled")
      otz4.removeAttribute("disabled")
      but7.style.cursor = "pointer"
      otz4.style.cursor = "text"

    } else {
      // Сообщение выводится, если пользователь не авторизован
      Swal.fire({
        title:"Внимание, чтобы кнопки стали вновь кликабельны, необходима аворизация!",
        icon:"warning",
        timer: 3000
      })
      // И в этом случае меняются курсоры
      but7.style.cursor = "not-allowed"
      otz4.style.cursor = "not-allowed"
    }
  }
  proverka()