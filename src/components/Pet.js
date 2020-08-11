import React from 'react'

class Pet extends React.Component {
  render() {
    // destructure the props
    const { name, type, age, weight, gender, isAdopted } = this.props.pet
    const { onAdoptPet } = this.props
    return (
      <div className="card">
        <div className="content"> 
          <a className="header">
            {name}
            { gender === "female" ? ' ♀' : ' ♂' }
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={onAdoptPet} >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
 