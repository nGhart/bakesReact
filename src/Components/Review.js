import React from 'react';

const Review = () => {
  return (
    <div className="container reviewSection" style={{paddingBottom: '160px'}}>
      <div className="title text-center">
        <h1>Reviews</h1>
      </div>
      <div className="row reviewPlusControls">
        <div className="col-xs-1 col-sm-2">
          <div className="prev">
            <button
              className="leftB"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>

        <div className="col-xs-10 col-sm-8">
          <div className="card text-center reviewContainer">
            <img
              src=""
              className="reviewImage mx-auto d-block"
              id="image"
              alt="..."
              height="200px"
              width="30%"
            />
            <div className="card-body">
              <h5 className="card-title">
                "<span id="highlight"></span>"
              </h5>
              <p className="card-text" id="reviewText"></p>
              <p className="card-text" id="credit"></p>
              <h6
                className="card-subtitle mb-2 text-muted"
                id="customerName"
              ></h6>
            </div>
          </div>
        </div>

        <div className="col-xs-1 col-sm-2">
          <div className="next">
            <button
              className="rightB"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
