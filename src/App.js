import React, { Component } from 'react';
import axios from 'axios'
import Search from './components/search.jsx';
import Games from './components/games.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import logo from './logo.svg';
import Twitch_Purple from './Twitch_Purple_RGB.png'

const API_KEY = process.env.REACT_APP_TWITCH_API_KEY
const API_URL = 'https://api.twitch.tv/kraken/'
const API_HEAD = {
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': API_KEY
  }
}

class App extends Component {

  state = {
    query: '',
    games:[]
  }

// Get list of top 10 games by default when app loads
  componentDidMount(){
    this.getTopGames()
  }

  getSearch = () => {
    if (this.state.query && this.state.query.length >0) {
      axios.get(
        `${API_URL}search/games?query=${this.state.query}`, API_HEAD
      )
      .then(({ data }) => {
        this.setState({
          games: data.games
        })
      })
      .catch(( error ) => {
        console.log('Error during search - ' + error)
      })
    } else {
      this.getTopGames()
    }
  }

  getTopGames = () => {
    axios.get(
      `${API_URL}games/top`, API_HEAD
    )
    .then(({ data }) => {
      this.setState({
        games: data.top.map(g => g.game)
      })
    })
    .catch(( error ) => {
      console.log('Error getting top games - ' + error)
    })
  }

  handleInputChange = ( event ) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className='bg-twitch-light'>
        <Search
          input={this.state.query}
          getTopGames={this.getTopGames}
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.getSearch}
        />
        <main className='container'>
          <Games
            games={this.state.games}
          />
        </main>
        <Footer
          logo={logo}
          Twitch_Purple={Twitch_Purple}
        />
      </div>
    );
  }
}

export default App;
