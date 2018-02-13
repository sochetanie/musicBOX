import React, {Component} from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap' 
import SearchResults from './components/SearchResults'
import TopTracksUSA from './containers/TopTracksUSA'
import GeoTopTracks from './containers/GeoTopTracks'
import ArtistGallery from './containers/ArtistGallery'
import YouTube from 'react-youtube'
import { Route } from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      input:'',
      country: '',
      artist: null,
      track: null,
      artistSummary: '',
      artistTopAlbums: [],
      artistTopTracks: [],
      videoId: '',
      foreignTopTracks: null,
    }
  }

  getApiUsaTopTracks = () => {
    const BASE_URL ='https://ws.audioscrobbler.com/2.0/?method='
    const Method = 'chart.gettoptracks'
    const API_KEY_FORMAT = '&api_key=YOUR_KEY'
    const searchURL = `${BASE_URL}${Method}${API_KEY_FORMAT}`
    fetch(searchURL)
      .then(res=>res.json())
      .then(data=> {
        this.setState({usaTracks: data.tracks.track.slice(0,46)})
      })
      .catch(error=>console.log(error))
  }

  componentWillMount = () => {
    this.getApiUsaTopTracks()
  }

  geoTopTracks = () => {
    const BASE_URL ='https://ws.audioscrobbler.com/2.0/?method='
    const GeoTopTracks = 'geo.gettoptracks&country='
    const Method = 'chart.gettoptracks'
    const API_KEY_FORMAT = '&api_key=YOUR_KEY'
    const searchUSA = `${BASE_URL}${Method}${API_KEY_FORMAT}`
    const searchURL = `${BASE_URL}${GeoTopTracks}${this.state.country}${API_KEY_FORMAT}`

    if (this.state.country.toLowerCase() === 'usa' || this.state.country.toLowerCase().includes('united state') || this.state.country.toLowerCase() === 'america') {
      fetch(searchUSA)
        .then(res=>res.json())
        .then(data=> {
          this.setState({foreignTopTracks: data.tracks.track.slice(0,46)})
        })
        .then(this.props.history.push(`/county/${this.state.country}`))
        .catch(error=>console.log(error))
    } else {
      fetch(searchURL)
        .then(res=>res.json())
        .then(data=> {
          this.setState({foreignTopTracks: data.tracks.track.slice(0,46)})
        })
        .then(this.props.history.push(`/county/${this.state.country}`))
        .catch(error=>alert("No Results Have Been Found"))
    }
  }

  handleChange = (event) => {
      if (event.target.value.toLowerCase() === 'kesha') {
        event.target.value = event.target.value.replace('s', '$')
        this.setState({ input: event.target.value })
      } 
      this.setState({ input: event.target.value })

  }

  handleChangeCountry = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  enterClickMusic = (event) => {
    if (event.key === 'Enter') {
      this.getSearchApi()
    }
  }

  enterClickGeo = (event) => {
    if (event.key === 'Enter') {
      this.geoTopTracks()
    }
  }

  getSearchApi = () => {
    const BASE_URL ='https://ws.audioscrobbler.com/2.0/?method='
    const ArtistSearch = 'artist.search&artist='
    const TrackSearch = 'track.search&track='
    const API_KEY_FORMAT = '&api_key=YOUR_KEY'

    const searchTrack = `${BASE_URL}${TrackSearch}${this.state.input}${API_KEY_FORMAT}`
    const searchArtist = `${BASE_URL}${ArtistSearch}${this.state.input}${API_KEY_FORMAT}`
    
    fetch(searchTrack)
      .then(res=>res.json())
      .then(data=> {
        this.setState({track: data.results.trackmatches.track})
      })
      .catch(error=>console.log(error))
    
    fetch(searchArtist)
      .then(res=>res.json())
      .then(data=> {
        this.setState({artist: data.results.artistmatches.artist})
      })
      .then(this.props.history.push(`/search/${this.state.input}`))
      .catch(error=>console.log(error))
  }


  getArtistInfoApi = (searchTerms) => {
    const BASE_URL ='https://ws.audioscrobbler.com/2.0/?method='
    const ArtistSummary = 'artist.getinfo&artist='
    const ArtistTopTracks = 'artist.gettoptracks&artist='
    const ArtistTopAlbums = 'artist.getTopAlbums&artist='
    const API_KEY_FORMAT = '&api_key=YOUR_KEY'
   
    const searchArtistSummary = `${BASE_URL}${ArtistSummary}${searchTerms}${API_KEY_FORMAT}`
    fetch(searchArtistSummary)
      .then(res=>res.json())
      .then(data=>{
        this.setState({artistSummary: data.artist.bio.summary})
      })
      .catch(error=>console.log(error))

    const searchArtistTopTracks = `${BASE_URL}${ArtistTopTracks}${searchTerms}${API_KEY_FORMAT}`
    fetch(searchArtistTopTracks)
      .then(res=>res.json())
      .then(data=>{
        this.setState({artistTopTracks: data.toptracks.track})
      })
      .catch(error=>console.log(error))

    const searchArtistTopAlbums = `${BASE_URL}${ArtistTopAlbums}${searchTerms}${API_KEY_FORMAT}`
    fetch(searchArtistTopAlbums)
      .then(res=>res.json())
      .then(data=>{
        this.setState({artistTopAlbums: data.topalbums.album})
      })
      .then(this.props.history.push(`/search/${this.state.input}/${searchTerms}info`))
      .catch(error=>console.log(error))
  }

  getYouTubeApi = (singer, song) => {
    var artistName = singer.replace("'","")
    var trackName = song.replace("'","")

    let URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${artistName} ${trackName} official&type=video&key=YOUR_KEY`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        this.setState({videoId: data.items[0].id.videoId})
      })
    .catch(error=>console.log(error))
  }

  render() {
    const opts = {
      height: '375',
      width: '550',
      playerVars: { 
        autoplay: 1,
      }
    }

    return(
      <div className='app'>

        <a href='https://musicboxflatironschool.herokuapp.com/'><div className='title'>MusicBOX</div></a>

        <FormGroup>
          <InputGroup >
            <FormControl type="text" placeholder='Search for Music...'
              value={this.state.input}
              onChange={this.handleChange}
              onKeyPress={this.enterClickMusic}/>
            <InputGroup.Addon onClick={this.getSearchApi}>
              <Glyphicon glyph="music"/>
            </InputGroup.Addon> 
           </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup >
            <FormControl type="text" id='youTubeVideo' placeholder='Search Top Played Tracks by Country...'
              value={this.state.country}
              onChange={this.handleChangeCountry}
              onKeyPress={this.enterClickGeo}/>
            <InputGroup.Addon onClick={this.geoTopTracks}>
              <Glyphicon glyph="globe"/>
            </InputGroup.Addon>
           </InputGroup>
        </FormGroup>
    
    <div className='youTubeVideo'>
      {this.state.videoId !== '' && <YouTube opts={opts} videoId={this.state.videoId}/>}
    </div>

    {this.state.artist === null && this.state.track === null && 
     this.state.foreignTopTracks === null && this.state.usaTracks && 
      <div>
        <TopTracksUSA usaTracks={this.state.usaTracks} getYouTubeApi={this.getYouTubeApi}/>
      </div>}

<Route exact path='/search/:input' render={()=>(<SearchResults userInput={this.state.input} artist={this.state.artist} track={this.state.track} getArtistInfoApi={this.getArtistInfoApi} getYouTubeApi={this.getYouTubeApi} />)}/>

<Route path='/search/:input/:atristinfo' render={()=>(<ArtistGallery artistSummary={this.state.artistSummary} artistTopTracks={this.state.artistTopTracks} artistTopAlbums={this.state.artistTopAlbums} getYouTubeApi={this.getYouTubeApi}/>)} />

<Route path='/county' render={()=> (<GeoTopTracks foreignTopTracks={this.state.foreignTopTracks} country={this.state.country} geoTopTracks={this.geoTopTracks} getYouTubeApi={this.getYouTubeApi}/>)} />

      </div>)
  }

}


