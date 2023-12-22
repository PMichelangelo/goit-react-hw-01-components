import styles from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
      <div className={styles.description}>
      <img
          src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
        <p className={styles.name}>{username}</p>
      <p className={styles.txtGrey}>@{tag}</p>
        <p className={styles.txtGrey}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className="label">Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
      </div>
  </div>
  )
}

export default Profile;
