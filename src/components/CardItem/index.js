// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div className="containers">
        <h1 className="li-heading">{title}</h1>
        <p className="para">{description}</p>
      </div>
      <div className="image">
        <img src={imgUrl} alt={title} className="img" />
      </div>
    </li>
  )
}

export default CardItem
