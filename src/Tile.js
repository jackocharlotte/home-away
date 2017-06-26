import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const TileWrapper = styled.div`
  background-color: black;
  max-width: 100%;
  color: white;
  position: relative;
`;

const TileImage = styled.img`
	width: 100%;
`;

const TileTitle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75em;
  font-size: 1.1em;
  font-family: sans-serif;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  ::before {
    content: " ";
    background-image: url(${logo});
    width: 30px;
    height: 30px;
    background-size: cover;
    display: inline-block;
    margin-right: 1em;
  }
`;

class Tile extends Component {
  render () {
    return (
      <TileWrapper>
        <TileImage src={require('./assets/tile.jpg')} alt="{this.props.name} cover photo"/>
        <TileTitle>
          {this.props.name}
        </TileTitle>
    	</TileWrapper>
    )
  }
}

Tile.defaultProps = {
  name: 'Coming soon'
};

export default Tile;
