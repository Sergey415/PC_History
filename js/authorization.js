async function aut() {
    const logins = document.getElementById("login").value
    const password = document.getElementById("pass").value
    let r = await fetch("http://BD/autorization.php?login=" + logins + "&&pass=" + password)
    a = (await r.text())
    localStorage.setItem("login", logins)
    localStorage.setItem("pass", password)
    if (a == "null") {
      notsuccess.style.display = "block"
      setTimeout(() => {
        notsuccess.style.display = "none"
      }, 3000);
    } else {
      setTimeout(() => {
        success.style.display = "none"
      }, 3000);
      block_user.style.display = "flex"
      block_user.style.flexDirection = "column"
      block_user.style.flexWrap = "wrap"
      success.style.display = "block"
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
      but7.removeAttribute("disabled")
      otz4.removeAttribute("disabled")
      lik4.removeAttribute("disabled")
    }
  }