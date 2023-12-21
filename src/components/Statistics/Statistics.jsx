import styles from './Statistics.module.css'

const Statistics = ({ title, stats,} ) => {
  const elements = stats.map(item =>
    <li className="item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}</span>
    </li>)

  return (
    <div className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {elements}
      </ul>
    </div>


  )
}

export default Statistics
