import React, { useState } from "react";
import "./tab.css";

export default function Tab() {
  const [activeTab, setActiveTab] = useState('stays');

  const showContent = (contentId) => {
    setActiveTab(contentId);
  };

  return (
    <div className="container">
      <div className="tab">
        <div 
          className={`tab-item ${activeTab === 'stays' ? 'active' : ''}`} 
          onClick={() => showContent('stays')}
        >
          <i className="fas fa-bed"></i> Stays
        </div>
        <div 
          className={`tab-item ${activeTab === 'rating' ? 'active' : ''}`} 
          onClick={() => showContent('rating')}
        >
          <i className="fas fa-star"></i> Rating
        </div>
        <div 
          className={`tab-item ${activeTab === 'facilities' ? 'active' : ''}`} 
          onClick={() => showContent('facilities')}
        >
          <i className="fas fa-concierge-bell"></i> Facilities
        </div>
      </div>

      <div id="stays" className={`content ${activeTab === 'stays' ? 'active' : ''}`}>
        <div className="search-bar">
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input id="city" type="text" defaultValue="Los Angeles" />
          </div>
          <div className="input-group">
            <label htmlFor="guests">Guests</label>
            <input id="guests" type="text" defaultValue="4 people" />
          </div>
          <div className="input-group">
            <label htmlFor="checkin">Check In</label>
            <input id="checkin" type="text" defaultValue="Fri, 14 Jan" />
          </div>
          <div className="input-group">
            <label htmlFor="checkout">Check Out</label>
            <input id="checkout" type="text" defaultValue="Mon, 14 Feb" />
          </div>
          <button className="search-button">Search Stays</button>
        </div>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Sunset Boulevard, 17</span>
        </div>
      </div>

      <div id="rating" className={`content ${activeTab === 'rating' ? 'active' : ''}`}>
        <div className="content-item">
          <h3>Rating</h3>
          <p>4.5 stars</p>
        </div>
        <div className="content-item">
          <h3>Reviews</h3>
          <p>120 reviews</p>
        </div>
      </div>

      <div id="facilities" className={`content ${activeTab === 'facilities' ? 'active' : ''}`}>
        <div className="content-item">
          <h3>Facilities</h3>
          <p>Free Wi-Fi</p>
          <p>Swimming Pool</p>
          <p>Gym</p>
        </div>
      </div>
    </div>
  );
}
