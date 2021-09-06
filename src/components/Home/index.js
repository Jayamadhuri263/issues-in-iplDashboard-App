import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsCardData: []}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    // console.log(fetchedData)

    const updatedData = fetchedData.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsCardData: updatedData})
    console.log(updatedData)
  }

  render() {
    const {teamsCardData} = this.state
    // console.log(teamsCardData.length)
    return (
      <div className="home-bg-container">
        <div className="home-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-name">IPL Dashboard</h1>
          <ul className="ul-list-container">
            {teamsCardData.map(item => (
              <TeamCard teamCardData={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
