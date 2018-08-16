import React, { Component } from 'react';
import axios from 'axios'
import Search from './components/search.jsx';
import Games from './components/games.jsx';
import Footer from './components/footer.jsx';
import GameModal from './components/gamemodal.jsx'
import './App.css';
import logo from './logo.svg';
import Twitch_Purple from './Twitch_Purple_RGB.png'

// API key in <project>/.env
const API_KEY = process.env.REACT_APP_TWITCH_API_KEY

// Format URL and header for Twitch v5 (kraken) API
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
    games:[],
    gameModalShown: false,
    game_id: '',
//    gamesObj:{}
  }

  // Get list of top 10 games by default when app loads
  componentDidMount(){
    this.getTopGames()
  }

  // Search Twitch API for string in query
  // If query is empty, return top games instead
  getSearch = () => {
    if (this.state.query && this.state.query.length >0) {
      axios.get(
        `${API_URL}search/games?query=${this.state.query}`, API_HEAD
      )
      .then(({ data }) => {
        if (data.games) {
          this.setState({
            games: data.games
          })
        } else {
          alert('No results...showing top 10 games')
          this.getTopGames()
        }
      })
      .catch(( error ) => {
        console.log('Error during search - ' + error)
      })
    } else {
      this.getTopGames()
    }
  }

  // This API call returns the top 10 games being streamed
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

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleKeyPress  = event => {
    if (event.key === 'Enter') {
      this.getSearch()
    }
  }

  showGameModal = game_id => {
    this.setState({
      gameModalShown: true,
      game_id: game_id
    })
  }

  hideGameModal = () => {
    this.setState({
      gameModalShown: false
    })
  }

// TODO: Modals aren't showing
  render() {
    return (
      <div className='bg-twitch-light'>
        <Search
          input={this.state.query}
          getTopGames={this.getTopGames}
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}
          handleSearchClick={this.getSearch}
        />
        <main className='container'>
          <Games
            games={this.state.games}
            showGameModal={this.showGameModal}
            hideGameModal={this.hideGameModal}
          />
          <GameModal
            gameModalShown={this.state.gameModalShown}
            hideGameModal={this.hideGameModal}
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
