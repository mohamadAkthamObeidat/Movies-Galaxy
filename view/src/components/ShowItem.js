import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
class ShowItem extends Component {
    handleItemClick = () => {
        console.log('this.props.movie :', this.props.show);
    };
    render() {
        const { show } = this.props;
        return (
            <div onClick={this.handleItemClick} className="item-container">
                <div className="poster-title">
                    <img
                        className="poster"
                        src={
                            show.backdrop_path === null
                                ? require('../Assets/Images/No Poster.svg')
                                : `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                        }
                        alt="poster"
                    />
                    <img
                        src={require('../Assets/Images/MovieItemOverlay.svg')}
                        alt=""
                        className="overlay"
                    />
                    <h3 className="movie-title">{show.name}</h3>
                    <small className="date">(2019)</small>
                </div>
                <div className="btns-rate">
                    <div className="btns">
                        <img
                            className="watchlist-btn"
                            src={require('../Assets/Icons/WatchList-Seq.svg')}
                            alt=""
                        />
                        <img
                            className="watched-btn"
                            src={require('../Assets/Icons/Watched-Seq.svg')}
                            alt=""
                        />
                    </div>
                    <small className="rate">{show.vote_average}/10</small>
                </div>
            </div>
        );
    }
}
export default ShowItem;