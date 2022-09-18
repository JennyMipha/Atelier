import React from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';

const BarContainer = styled.div`
  width: 100%;
  background-color: #5D5F71;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

const NavContainer = styled.div`
  padding: 8px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  font-size: 1em;
`;

const AppHeader = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #FAFAFA;
  padding: 0 20px;
`;

export default function NavBar() {
  const handleNavClick = (destination) => {
    scroller.scrollTo(destination, {
      smooth: true,
    });
  };

  return (
    <BarContainer>
      <div>
        <AppHeader>
          <div>Atelier</div>
          {/* <div style={{ fontStyle: 'normal' }}>{'(•_•) \u00A0\u00A0\u00A0\u00A0\u00A0 ( •_•)>⌐■-■ \u00A0\u00A0\u00A0\u00A0\u00A0 (⌐■_■)'}</div> */}
        </AppHeader>
      </div>

      <NavContainer>
        <div onClick={() => {handleNavClick('overview')}} >{'Product Details'}</div>
        <hr></hr>
        <div onClick={() => {handleNavClick('related-products')}} >Random Related Products</div>
        <hr></hr>
        <div onClick={() => {handleNavClick('outfit-list')}} >Fabulous Outfit List</div>
        <hr></hr>
        <div onClick={() => {handleNavClick('questions-and-answers')}} >Questions &amp; Maybe Answers</div>
        <hr></hr>
        <div onClick={() => {handleNavClick('ratings-and-reviews')}} >Real Ratings &amp; Reviews</div>
      </NavContainer>
    </BarContainer>
  );
};
