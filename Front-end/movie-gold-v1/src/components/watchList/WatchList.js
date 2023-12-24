// WatchList.js
import React, { useState } from 'react';

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    setWatchList((prevWatchList) => [...prevWatchList, movie]);
  };

  const removeFromWatchList = (movieId) => {
    setWatchList((prevWatchList) => prevWatchList.filter((movie) => movie.id !== movieId));
  };

  return (
    <div>
      <h2>Watch List</h2>
      <ul>
        {watchList.map((movie) => (
          <li key={movie.id}>
            {movie.title}{' '}
            <button onClick={() => removeFromWatchList(movie.id)}>Remove from Watchlist</button>
          </li>
        ))}
      </ul>
      {/* Display watchlist items here */}
    </div>
  );
};

export default WatchList;
