import './index.css'
import {Link} from 'react-router-dom'

const TechEra = props => {
  const {eachTechList} = props
  const {name, logoUrl, id} = eachTechList

  return (
    <Link to={`/courses/${id}`}>
      <li className="tech-list-item">
        <img className="small-image" src={logoUrl} alt={name} />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}

export default TechEra
