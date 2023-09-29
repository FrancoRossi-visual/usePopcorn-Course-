import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./index.css";
// import App from "./components/App";
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Good', 'Great', 'Excellent']}
    />
    <StarRating
      maxRating={10}
      size={24}
      color='green'
      className='test'
      defaultRating={3}
    />
  </React.StrictMode>
);
