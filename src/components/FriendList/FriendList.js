import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className="taskContainer">
      <h2 className="taskTitle">
        Завдання 3<span>Список друзів</span>
      </h2>

      <ul className={s.container}>
        {friends.map((item) => (
          <li className={s.item} key={item.id}>
            {item.isOnline ? (
              <span className={s.online}></span>
            ) : (
              <span className={s.offline}></span>
            )}

            <img
              className={s.avatar}
              src={item.avatar}
              alt={item.name + " avatar"}
              width="48"
            />
            <p className={s.name}>{item.name} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
