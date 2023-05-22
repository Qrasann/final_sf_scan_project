import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import Button from "../Button/Button";

import { formatPrice } from "../../utils/helpers";
import { useAuth } from "../../hooks/useAuth";

const cx = classNames.bind(styles);

const TariffCard = ({
  tariff: {
    id,
    name,
    description,
    readMoreLink,
    price,
    oldPrice,
    credit,
    includes,
  },
}) => {
  const { user } = useAuth();
  const isCurrent = user?.tariff === id;

  const cardClass = cx({
    card: true,
    [`${id}`]: id,
    current: isCurrent,
  });

  return (
    <div className={cardClass}>
      <header className={styles.header}>
        {name && <h3 className={styles.title}>{name}</h3>}

        {description && <p>{description}</p>}
      </header>

      <div className={styles.body}>
        {isCurrent && <span className={styles.badge}>Текущий тариф</span>}

        {price && (
          <div className={styles.price}>
            <span className={styles.new}>{formatPrice(price)}</span>

            {oldPrice && (
              <span className={styles.old}>{formatPrice(oldPrice)}</span>
            )}
            {credit && <p className={styles.credit}>{credit}</p>}
          </div>
        )}

        {includes && (
          <div className={styles.includes}>
            <p>В тариф входит:</p>

            <ul>
              {includes.map((include) => (
                <li key={include}>{include}</li>
              ))}
            </ul>
          </div>
        )}

        {isCurrent && <Button>Перейти в личный кабинет</Button>}

        {!isCurrent && (
          <Button href={readMoreLink} color="primary">
            Подробнее
          </Button>
        )}
      </div>
    </div>
  );
};

export default TariffCard;
