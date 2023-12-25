import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline = false }) => {

  const fullClassName = isOnline ? styles.statusOnline : styles.status

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${fullClassName}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

export default FriendListItem;
