import React, {Component} from 'react'
import { Grid, Row, Col, OverlayTrigger, Popover } from 'react-bootstrap'


export default class ArtistGallery extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ArtistAlbumTracks: []
    }
  }

  getAlbumInfoApi = (artistName, albulmName) => {
    const BASE_URL ='https://ws.audioscrobbler.com/2.0/?method='
    const ArtistAlbumInfo = 'album.getinfo'
    const API_KEY_FORMAT = '&api_key=YOUR_KEY'

    fetch(`${BASE_URL}${ArtistAlbumInfo}${API_KEY_FORMAT}${artistName}&album=${albulmName}&format=json`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({ArtistAlbumTracks: data.album.tracks.track})
      })
      .catch(error=>console.log(error))
  }


  render() {
      const popoverClickRootClose = (
        <Popover id="popover-trigger-click-root-close">
          {this.state.ArtistAlbumTracks.length > 0 && 
            this.state.ArtistAlbumTracks.map((x,i)=> 
              <a href="#youTubeVideo"> <h4 key={i} className='albumTrackName' onClick={() => this.props.getYouTubeApi(x.artist.name, x.name)}>{x.name}</h4></a>
          )}
        </Popover>
      )
  
    if (!!this.props.artistTopTracks && !!this.props.artistTopAlbums ) {
      return (
        <Grid>
          <div className='summary'>
            <p>{this.props.artistSummary.includes('<') ? this.props.artistSummary.substring(0, this.props.artistSummary.indexOf('<')) : this.props.artistSummary}</p>
          </div>

          <Row className="show-grid">

            <div className="left-half">
              <h2>Tracks</h2>
                {this.props.artistTopTracks.map((x,i)=> ((x.name !== '(null)' && x.name.length < 20 && x.image[3]["#text"] !== '') ? 
                      <a href='#youTubeVideo'><div className='topTracks' key={x.name}>
                        <h4 className='trackName' onClick={() => this.props.getYouTubeApi(x.artist.name, x.name)}>{x.name}</h4>
                      </div>
                      </a> : null )
                  )}
            </div>

            <div className="right-half">
              <h2>Albums</h2>
                {this.props.artistTopAlbums.map((x,i)=>( (x.name !== '(null)' && x.name.length < 30 && x.image[2]["#text"] !== '') ? 
                  <div className='albums' key={x.name}>
                    <Col xs={6} md={4}>
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverClickRootClose}>
                      <img alt='albumImg' src={x.image[2]["#text"]} className='albumImg' onClick={()=> this.getAlbumInfoApi(x.artist.name, x.name)}/>
                    </OverlayTrigger>
                      <h4 className='albumName'>{x.name}</h4>
                    </Col>
                  </div> : null )
                )}
            </div>

          </Row>
        </Grid>
      )}
  }

}