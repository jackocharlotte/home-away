import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const TileWrapper = styled.a`
  background-color: black;
  max-width: 100%;
  color: white;
  display: block;
  position: relative;
  :hover .Tile__title {
    background-color: rgba(54, 0, 0, 0.7);
  }
  @media screen and (min-width: 38em) {
    width: 50%
  }
  @media screen and (min-width: 68em) {
    width: 33.3%
  }
`;

const TileImage = styled.img`
	width: 100%;
  display: block;
`;

const TileTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  padding: 0.65em;
  font-size: 1.1em;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  ::before {
    content: " ";
    background-image: url(${logo});
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 0.7em;
  }
  @media screen and (min-width: 25em) {
    font-size: 1.5em;
    ::before {
      width: 45px;
      height: 45px;
    }
  }
`;

class Tile extends Component {
  render () {
    return (
      <TileWrapper className="Tile" href="#">
        <TileImage src={require(`${this.props.src}`)} alt={`${this.props.name}'s cover photo`}/>
        <TileTitle className="Tile__title">
          {this.props.name}
        </TileTitle>
    	</TileWrapper>
    )
  }
}

Tile.defaultProps = {
  name: 'Coming soon',
  src: './assets/tile.jpg'
};

export default Tile;
