import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardData} = props
  const {id, name, teamImageUrl} = teamCardData

  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <div className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <h1 className="heading">{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
