async function Exit() {
    alert("Внимание, чтобы кнопки стали вновь кликабельны, необходима аворизация!")
    localStorage.removeItem("login")
    localStorage.removeItem("pass")
    a = null
    but1.setAttribute("disabled", "disabled")
    lik.setAttribute("disabled", "disabled")
    but3.setAttribute("disabled", "disabled")
    otz1.setAttribute("disabled", "disabled")
    lik2.setAttribute("disabled", "disabled")
    block_user.style.display = "none"
    forma.style.display = "flex"
    otz2.setAttribute("disabled", "disabled")
    but5.setAttribute("disabled", "disabled")
    otz3.setAttribute("disabled", "disabled")
    lik3.setAttribute("disabled", "disabled")
    lik4.setAttribute("disabled", "disabled")
    otz4.setAttribute("disabled", "disabled")
    but7.setAttribute("disabled", "disabled")
  }