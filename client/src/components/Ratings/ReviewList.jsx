import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from './styles';
import ReviewEntry from './ReviewEntry';

const ReviewContainer = styled.div`
  padding-top: 3.1em;
`;
const Header = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
  padding-bottom: 1.5em;
`;
const SortBy = styled(Select)`

`;
function ReviewList({
  reviews, displayedReviews, setSort,
}) {
  return (
    <ReviewContainer>
      <Header>
        <span>
          {reviews.length}
          &nbsp;reviews, sorted by&nbsp;
        </span>
        <SortBy onChange={(e) => setSort(e.target.value)}>
          <option value="relevant">relevance</option>
          <option value="newest">newset</option>
          <option value="helpful">helpful</option>
        </SortBy>
      </Header>
      <div>
        {displayedReviews.map(
          (review) => <ReviewEntry review={review} key={review.review_id} />,
        )}
      </div>
    </ReviewContainer>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  // sort: PropTypes.string,
  setSort: PropTypes.func,
};

ReviewList.defaultProps = {
  reviews: [],
  displayedReviews: [],
  // sort: 'relevant',
  setSort: (e) => e,
};

export default ReviewList;
