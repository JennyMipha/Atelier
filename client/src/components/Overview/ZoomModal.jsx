import React from 'react';
import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight, MdFullscreenExit } from 'react-icons/md';

const Background = styled.div`
  display: block;
  position: fixed;
  text-align: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
`;

const ZoomModalContent = styled.div`
  position: relative;
  margin: 10% auto;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;
`;

const ExitIcon = styled(MdFullscreenExit)`
  position: absolute;
  border-radius: 50%;
  padding: 2px;
  object-fit: cover;
  color: grey;
  background-color: white;
  top: 25px;
  right: 25px;
  width: 2.5em;
  height: 2.5em;
  &:hover {
    color: black;
  }
`;

const ZoomIconLeft = styled(MdChevronLeft)`
height: 2.5em;
width: 2.5em;
position: absolute;
left: 5px;
color: grey;
background-color: white;
border-radius: 50%;
&:hover {
  color: black;
}
`;

const ZoomIconRight = styled(MdChevronRight)`
height: 2.5em;
width: 2.5em;
position: absolute;
right: 5px;
color: grey;
background-color: white;
border-radius: 50%;
&:hover {
  color: black;
}
`;

const ModalImage = styled.img`
  display flex;
  border-radius: 5px;
  width: 80%;
`;

export default function ZoomModal(props) {
  const { setZoomIn, image, currentIndex, setIndex, photos } = props;

  return (
    <Background>
      <ExitIcon onClick={() => setZoomIn(false)} />

      <ZoomModalContent>
        {currentIndex > 0 && <ZoomIconLeft onClick={() => setIndex(currentIndex - 1)} />}

        <ModalImage src={image.thumbnail_url} />

        {currentIndex < photos.length - 1 && <ZoomIconRight onClick={() => setIndex(currentIndex + 1)} />}
      </ZoomModalContent>

    </Background>
  );
}
