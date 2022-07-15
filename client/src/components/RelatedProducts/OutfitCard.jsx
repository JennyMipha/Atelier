import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import StarRating from './StarRating';

const Card = styled.div`
  width: 260px;
  height: 380px;
  color: #1d3557;
  background: #f1faee;
  border: 3px solid #1d3557;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 280px;
  background: #1d3557;
  object-fit: cover;
`;

const CardInfo = styled.div`
  width: 100%;
  height: 98px;
  padding: 5px 19px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Name = styled.p`
  font-weight: 500;
  margin: 0;
`;

const Price = styled.p`
  margin:0;
  font-weight: 600;
  color: #43aa8b;
`;

const DeleteButton = styled(TiDeleteOutline)`
  position: relative;
  background: #a8dadc;
  border-radius: 50%;
  right: 15px;
  top: 15px;
  width: 25px;
  height: 25px;
  transform: translate(-40px, -390px);
`;

function OutfitCard({ card }) {
  return (
    <Card>
      {(card.style.results[0].photos[0].thumbnail_url !== null)
        ? (
          <CardImg src={card.style.results[0].photos[0].thumbnail_url} />
        )
        : (
          <CardImg src="https://www.jins.com/us/media/menu-redesign/womanbar.jpg" width="280px" height="380px" />
        )}
      <DeleteButton />
      <CardInfo>
        <p style={{ margin: 0 }}>{card.info.category}</p>
        <Name>{card.info.name}</Name>
        {(card.style.results[0].sale_price === null)
          ? (
            <Price>
              $
              {card.style.results[0].original_price}
            </Price>
          )
          : (
            <Price style={{ color: 'red' }}>
              $
              {card.style.results[0].sale_price}
            </Price>
          )}
        <StarRating />
      </CardInfo>
    </Card>
  );
}

OutfitCard.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
};

OutfitCard.defaultProps = {
  card: {},
};

export default OutfitCard;
