import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Button from "../../components/Button/Button";
import TariffList from "../../components/TariffList/TariffList";

import { ReactComponent as GoogleSVG } from "../../assets/images/google.svg";
import { ReactComponent as FacebookSVG } from "../../assets/images/facebook.svg";
import { ReactComponent as YandexSVG } from "../../assets/images/yandex.svg";

const UIPage = () => {
  return (
    <MainLayout>
      <section>
        <div>
          <Button color="primary" size="big">
            Войти
          </Button>

          <Button color="primary" size="big" disabled>
            Войти
          </Button>

          <Button color="primary">Запросить данные</Button>

          <Button>Перейти в личный кабинет</Button>

          <Button color="secondary" size="small">
            Читать в источнике
          </Button>
        </div>

        <div>
          <Button size="social">
            <GoogleSVG />
          </Button>

          <Button size="social">
            <FacebookSVG />
          </Button>

          <Button size="social">
            <YandexSVG />
          </Button>
        </div>

        <div>
          <h1>Заголовок 1</h1>
          <p>
          </p>
          <h2>Заголовок 2</h2>
          <p>
          </p>
          <h3>Заголовок 3</h3>
          <p>
          </p>
        </div>

        <div>
          <TariffList />
        </div>
      </section>
    </MainLayout>
  );
};

export default UIPage;
