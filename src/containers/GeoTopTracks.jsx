import React, {Component} from 'react'
import { Image } from 'react-bootstrap'

export default class GeoTopTracks extends Component {

  render() {
    return (
      <div className="row">
      <h3>{this.props.country.charAt(0).toUpperCase()+this.props.country.slice(1)} Top Played Tracks</h3>
        {this.props.foreignTopTracks ? this.props.foreignTopTracks.map((x,i)=>(
          <div className='col topTracksUSA' key={x.name} onClick={() => this.props.getYouTubeApi(x.artist.name, x.name)}>
              <a href='#youTubeVideo'><Image src={ x.image[2]['#text'] } circle responsive className='topTracksImage'/></a>
                <p>{ x.name.includes('(') ? x.name.substring(0, x.name.indexOf('(')) : x.name }</p>
                <p>{x.artist.name}</p>
          </div>
              )) : null
        }
      </div>
      )
  }
  
}

