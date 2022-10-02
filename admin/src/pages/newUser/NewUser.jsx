import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Новый пользователь</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Имя пользователя</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Полное имя</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Почта</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Пароль</label>
          <input type="password" placeholder="пароль" />
        </div>
        <div className="newUserItem">
          <label>Телефон</label>
          <input type="text" placeholder="+79 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Адресс</label>
          <input type="text" placeholder="Ул.Боевая 31" />
        </div>
        <div className="newUserItem">
          <label>Активный</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Да</option>
            <option value="no">Нет</option>
          </select>
        </div>
        <button className="newUserButton">Создать</button>
      </form>
    </div>
  );
}
