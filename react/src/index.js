import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCcBxw7OIw4ih01poIgiHeIW6ikLd6Ho04';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboard');
    }

    videoSearch(term) {
        let self = this;
        YTSearch({key: API_KEY, term}, function(videos){
            self.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        // can only be called every 300ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
