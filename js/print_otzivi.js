async function awai() {
       let r = await fetch("http://BD/otzivi.php")
    a = (await r.text())
          for(let key in r) {
            
      alert(key)
    }

  }
awai()