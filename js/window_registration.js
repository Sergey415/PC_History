//Всплывающее окно регистрации
async function reg() {
    Swal.fire({
      title: "Регистрация",
      html: `<div id='form' class='text-center'>
      <div>
        <input type='text' id='name' class='text-center' placeholder='Имя(Необязательно):'>
    </div>
    <div>
        <input type='text' id='family' class='text-center' placeholder='Фамилия(Необязательно):''>
    </div>
        <div>
          <input type='text' id='logins' class='text-center' placeholder='Логин:'>
        </div>
        <div>
            <input type='password' id='passwords' class='text-center' placeholder='Пароль:'>
        </div>
        <div>
            <button onclick='registr()' class='btn btn-secondary'>Регистрация</button>
        </div>
          </div>`,
      showConfirmButton: false
    })
  }