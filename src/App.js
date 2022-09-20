import "./App.css";
import clickImg from "./images/click.png";
import logo from "./images/logo.jpg";
import InputMask from "react-input-mask";

function App() {
  return (
    <div className="container">
      <div className="main-contant">
        <img src={clickImg} alt="" className="click-img" />
        <main>
          <div className="main-container">
            <div className="data_names">
              <div className="name-content">
                <h2>Вы оплачиваете:</h2>
                <div className="name">Mukhbira Travel</div>
              </div>
              <div className="logo-content">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="middle-line"></div>
            <div className="data_names">
              <div className="name-content">
                <h2>ФИО отправителя</h2>
                <div>
                  <h3>7</h3>
                </div>
              </div>
              <div className="price">
                {" "}
                <h2>Сумма платежа</h2>
                <div className="price">
                  <h3>1200 сум</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="form-content">
            <div className="number-pay">
              <h2>Оплата через выставление счета</h2>
              <p className="desc">
                Номер телефона, с которого будет произведена оплата.
              </p>
              <label htmlFor="phone-number">Номер телефона</label>
              <div className="number-input">
                <InputMask
                  mask={"+\\9\\9\\8\\ 99 999 99 99"}
                  placeholder="+998"
                />{" "}
              </div>
              <button className="submit">Продолжить</button>
            </div>
            <div className="card-pay">
              <h2>Оплата без регистрации</h2>
              <div className="card-content">
                <p>Номер вашей карты и срок ее действия</p>
                <div className="card-content-item">
                  <div className="number-card">
                    <label htmlFor="card-number">Номер карты</label>
                    <input type="text" className="card-input" />
                  </div>
                  <div className="date-card">
                    {" "}
                    <label htmlFor="card-number">Срок действия</label>
                    <input type="text" className="card-input" />
                  </div>
                </div>
                <button className="submit">Продолжить</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
