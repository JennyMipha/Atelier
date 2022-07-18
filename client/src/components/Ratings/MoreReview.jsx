import React from 'react';
import PropTypes from 'prop-types';

function MoreReview({ reviews, displayedReviews, setDisplayedReviews }) {
  let button;
  if (reviews.length > displayedReviews.length) {
    button = (
      <button
        type="button"
        onClick={() => setDisplayedReviews(reviews.slice(0, displayedReviews.length + 2))}
      >
        MORE REVIEWS
      </button>
    );
  }

  return (
    <div>
      { button }
    </div>
  );
}

MoreReview.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  setDisplayedReviews: PropTypes.func,
};

MoreReview.defaultProps = {
  reviews: [],
  displayedReviews: [],
  setDisplayedReviews: (e) => e,
};

export default MoreReview;