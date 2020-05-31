async function awai() {
  let r = await fetch("http://bd/otzivi.php")
  a = (await r.text())
  a = JSON.parse(a)
  f = ""
      for(let key in a) {
    var f = f += "id " + a[key].id_user +"."+ " " +  "Отзыв: " + a[key].Отзыв + '<br>' + '<br>'
  }
  otzivis.innerHTML = f
  }
  awai() 