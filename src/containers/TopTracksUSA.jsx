import React, {Component} from 'react'
import { Image } from 'react-bootstrap'

export default class TopTracksUSA extends Component {

  render() {
    return (
      <div className="row">
        <h3>USA Top Played Tracks</h3>
        {this.props.usaTracks.map((x,i)=>(
          <div className="col topTracksUSA" key={x.name} onClick={() => this.props.getYouTubeApi(x.artist.name.replace('$', 's'), x.name)}>
              <a href='#youTubeVideo'><Image src={ x.image[2]['#text'] } circle responsive className='topTracksImage'/></a>
                <p>{x.name.includes('(') ? x.name.substring(0, x.name.indexOf('(')) : x.name}</p>
                <p>{x.artist.name}</p>
          </div>
              ))
        }
      </div>
      )
  }

}
