import React, {Component} from 'react'
import { Grid, Row, Image } from 'react-bootstrap'

export default class SearchResults extends Component {

  render() {
    return (
      <Grid id='result'>
      <Row className="show-grid">

        <div className='profile-left'>
          <h2>Artists</h2>
          {this.props.artist ? this.props.artist.map((x,i)=> ( (x.name.length < 30 && x.image[2]["#text"] !== '') ?
            <div className='artistInfo' key={i} onClick={()=>this.props.getArtistInfoApi(x.name)}>
              <img alt='artistImg' className='artistImg' src={ x.image[2]["#text"] }/>
              <div className='artistName'>
                <p>{x.name}</p>
              </div>
            </div> : null ) 
          ) : null}
        </div>

        <div className='profile-right'>
          <h2>Features</h2>
          {this.props.track ? this.props.track.map((x,i)=> ( (x.name.toLowerCase().includes(this.props.userInput.toLowerCase()) && x.image[2]["#text"] !== '') ?
              <div className="col topTracksUSA" key={i} onClick={() => this.props.getYouTubeApi(x.artist, x.name)}>
                <a href='#youTubeVideo'><Image src={ x.image[2]['#text'] } circle responsive className='topTracksImage'/></a>
                  <p>{x.name.includes('(') ? x.name.substring(0, x.name.indexOf('(')) : x.name}</p>
                  <p>{x.artist}</p>
              </div> : null) 
          ) : null }
        </div>

      </Row>
      </Grid>)
  }

}


