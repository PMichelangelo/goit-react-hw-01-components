import styles from './Statistics.module.css'

const Statistics = ({ title, stats,} ) => {
  const elements = stats.map(item =>
    <li className={styles.item} key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>)

  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {elements}
      </ul>
    </div>


  )
}

export default Statistics
