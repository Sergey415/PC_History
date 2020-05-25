var l1 = 0 
  var l2 = 0 
  var l3 = 0
  var l4 = 0
  let likes = 1
  function like() {
    likes--
    if (likes % 2 == 0) {
      but2.src = "images/likeheartred.png"
      l1 = 1
    }
    if (likes % 2 != 0) {
      but2.src = "images/likeheartwhite.png"
      l1 = 0
    }

  }
  let likes2 = 1
  function like2() {
    likes2--
    if (likes2 % 2 == 0) {
      but4.src = "images/likeheartred.png"
      l2 = 1
    }
    if (likes2 % 2 != 0) {
      but4.src = "images/likeheartwhite.png"
      l2 = 0
    }
  }
  let likes3 = 1
  function like3() {
    likes3--
    if (likes3 % 2 == 0) {
      but6.src = "images/likeheartred.png"
      l3 = 1
    }
    if (likes3 % 2 != 0) {
      but6.src = "images/likeheartwhite.png"
      l3 = 0
    }
  }
  let likes4 = 1 
  function like4() {
    likes4--
    if(likes4 % 2 == 0){
      but8.src = "images/likeheartred.png"
      l4 = 1
    }
    if(likes4 % 2 != 0) {
      but8.src = "images/likeheartwhite.png"
      l4 = 0
    }
  }