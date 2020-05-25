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
    } else {
      alert("Внимание, чтобы кнопки стали вновь кликабельны, необходима аворизация!")
    }
  }
  proverka()