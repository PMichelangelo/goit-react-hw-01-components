//import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
  const elements = friends.map(friend =>
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
    </li>)

  return (
    <ul className='friend-list'>
      {elements}
    </ul>
  )
}

export default FriendList;
