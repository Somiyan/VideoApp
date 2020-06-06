import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import './VideoItem.css'


const KEY = 'AIzaSyCZInw8dgrWZ6S7Y2pbOKJtinkFeqNpKDk ';
class App extends React.Component{
  state = {videos : [] ,onVideoSelect :null };

  componentDidMount(){
    this.onTermSubmit('Nature')
  }

  onTermSubmit = async (term) =>{
    const response = await youtube.get('/search',{
    params :{

      part: 'snippet',
      maxResults : 5,
      key : KEY,
      q : term,
    }
    });
    this.setState({
      videos: response.data.items,
      onVideoSelect : response.data.items[0]
    })
  };
onVideoSelect = (video) => {
  this.setState({onVideoSelect:video})
}

  render(){
    return (

        <div className = 'ui container'>
          <SearchBar onFormSubmit = {this.onTermSubmit} />
        <div className = 'ui grid'>
          <div className='row'>
            <div className = 'eleven wide column'>
              <VideoDetails video = {this.state.onVideoSelect} />
            </div>
            <div className = 'five wide column'>
                <VideoList
                onVideoSelect = {this.onVideoSelect}
                videos = {this.state.videos}/>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App
