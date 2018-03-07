import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import defineImg from '../../assets/img/define_img.jpg'

class VideoItem extends Component {
    constructor(props) {
        super(props);
    }

    formatTime = (duration) => {
        var duration = duration / 1000;
        let minute = parseInt(duration / 60);
        let second= parseInt(duration % 60);
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10) {
            second = '0' + second;
        }
        return minute + ':' + second;
    }

    render() {
        //var currentLocation = this.props.location.pathname;
        const { data } = this.props;
        return (
            <div className="hotVideoListItem">
                <Link className="link" to={`/home?videoId=${data.videoId}`}>
                    <div className="poster-box" style={{backgroundImage: `url(${data.coverUrl})`}} onClick={this.handleChangeVideo}>
                        <span className="icon"></span>
                        <div className="desc">
                            <p>{data.title}</p>
                            <p className="playCount"><span>{data.playCount}</span>次观看</p>
                        </div>
                        <div className="duration">{this.formatTime(data.duration)}</div>
                    </div>
                </Link>
                
                <div className="condition fn-clear" onClick={()=>{this.downloadApp(data.videoId)}}>
                    <Link to={`/Author?authorId=${data.authorId}`}>
                        <div className = "author-img">
                            {data.authorInfo.headurl ? <img src = {data.authorInfo.headurl} /> : 
                                <img src={defineImg} />}
                        </div>
                    </Link>
                    <div className = "author-name">{data.authorInfo.nickname}</div>
                    <div className = "right-btn fn-clear">
                        <div className = "share-icon btn"></div>
                        <div className = "btn fn-clear">
                            <span className = "comment-icon"></span>
                            <span className = "num">{data.commentCount}</span>
                        </div>
                        <div className = "btn fn-clear">
                            <span className = "like-icon"></span>
                            <span className = "num">{data.likeCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoItem