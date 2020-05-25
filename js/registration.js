async function registr() {
    let names = document.getElementById("name").value
    let familys = document.getElementById("family").value
    let logins = document.getElementById("logins").value
    let passwords = document.getElementById("passwords").value
    let r = await fetch("http://BD/registration.php?" + "name=" + names + "&&family=" + familys + "&&login=" + logins + "&&pass=" + passwords)
    a = (await r.text())
    if (logins != "" && passwords != "") {
      Swal.fire({
        icon: "success",
        title: "Успешно!",
        timer: 1500
      })
      localStorage.setItem('login', logins)
      localStorage.setItem('pass', passwords)
      proverka()
    } else {
      Swal.fire({
        icon: "error",
        title: "Произошла ошибка!"
      })
      delete r
      delete a
    }
  }