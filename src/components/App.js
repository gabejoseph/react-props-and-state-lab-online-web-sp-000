import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
    
  }

  onFindPetsClick = () => {

    let url = '/api/pets'
    // if this.state.filters.type is not all ....
    if (this.state.filters.type !== 'all') {
    // then adjust the url accordingly
      url += `?type=${this.state.filters.type}`
    }
    // fetch
    fetch(url)
    .then(resp => resp.json())
    .then(pet => {
      this.setState({
        pets: pet
      })
    })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header"> React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
