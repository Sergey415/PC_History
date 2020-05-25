async function otzivi() {
    let otzi2 = document.getElementById("otz2").value
    let r = await fetch("http://BD/Otz.php?" + "otziv=" + otzi2 + "&&login=" + localStorage.getItem("login") + "&&password=" + localStorage.getItem("pass") + "&&lik=" + l2)
    a = (await r.text())
    but4.src = "images/likeheartwhite.png"
    otz2.value = ""
    Swal.fire({
      icon: "success",
      title: "Ваш отзыв был успешно отправлен:)",
      timer: 2000
    })
  }
  async function otzivi1() {
    let otzi1 = document.getElementById("otz1").value
    let r = await fetch("http://BD/Otz.php?" + "otziv=" + otzi1 + "&&login=" + localStorage.getItem("login") + "&&password=" + localStorage.getItem("pass") + "&&lik=" + l1)
    a = (await r.text())
    but2.src = "images/likeheartwhite.png"
    otz1.value = ""
    Swal.fire({
      icon: "success",
      title: "Ваш отзыв был успешно отправлен:)",
      timer: 2000
    })
  }
  async function otzivi3() {
    let otzi3 = document.getElementById("otz3").value
    let r = await fetch("http://BD/Otz.php?" + "otziv=" + otzi3 + "&&login=" + localStorage.getItem("login") + "&&password=" + localStorage.getItem("pass") + "&&lik=" + l3)
    a = (await r.text())
    but6.src = "images/likeheartwhite.png"
    otz3.value = ""
    Swal.fire({
      icon: "success",
      title: "Ваш отзыв был успешно отправлен:)",
      timer: 2000
    })
  }
  async function otzivi4() {
    let otzi4 = document.getElementById("otz4").value
    let r = await fetch("http://BD/Otz.php?" + "otziv=" + otzi4 + "&&login=" + localStorage.getItem("login") + "&&password=" + localStorage.getItem("pass") + "&&lik=" + l4)
    a = (await r.text())
    but8.src = "images/likeheartwhite.png"
    otz4.value = ""
    Swal.fire({
      icon: "success",
      title: "Ваш отзыв был успешно отправлен:)",
      timer: 2000
    })
  }