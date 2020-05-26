// Функция очень похожа на функцию авторизации
async function proverka() {
    let r = await fetch("http://BD/autorization.php?login=" + localStorage.getItem("login") + "&&pass=" + localStorage.getItem("pass"))
    a = (await r.text())
    if (a != "null" ) {
      block_user.style.display = "flex"
      block_user.style.flexDirection = "column"
      block_user.style.flexWrap = "wrap"
      forma.style.display = "none"
      but1.removeAttribute("disabled")
      lik.removeAttribute("disabled")
      but3.removeAttribute("disabled")
      otz1.removeAttribute("disabled")
      lik2.removeAttribute("disabled")
      otz2.removeAttribute("disabled")
      lik3.removeAttribute("disabled")
      otz3.removeAttribute("disabled")
      but5.removeAttribute("disabled")
      lik4.removeAttribute("disabled")
      but7.removeAttribute("disabled")
      otz4.removeAttribute("disabled")
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

    } else {
      // Сообщение выводится, если пользователь не авторизован
      Swal.fire({
        title:"Внимание, чтобы кнопки стали вновь кликабельны, необходима аворизация!",
        icon:"warning",
        timer: 3000
      })
      // И в этом случае меняются курсоры
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
  }
  proverka()