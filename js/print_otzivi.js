async function awai() {
  let logins = document.getElementById("login").value
  let r = await fetch("http://BD/otzivi.php")
  a = (await r.text())
  a = JSON.parse(a)
  f = ""
  

      for(let key in a) {
    var f = f += "id " + a[key].id_user +"."+ " " +  "Отзыв: " + a[key].Отзыв + '<br>' + '<hr>'
  }
  otzivis.innerHTML = f
  }
  awai()
  