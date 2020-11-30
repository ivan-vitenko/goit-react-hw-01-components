import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ statsData, title }) => {
  return (
    <div className="taskContainer">
      <h2 className="taskTitle">
        Завдання 2<span>Секція статистики</span>
      </h2>

      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {statsData.map((item) => (
            <li
              className={s.item}
              key={item.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={s.label}>{item.label} </span>
              <span className={s.percentage}>{item.percentage + "%"} </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

function getRandomColor() {
  var letters = "0123456789".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default Statistics;
