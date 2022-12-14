import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 5px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #fe6637;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #fe6637;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }
  :hover {
    background: #fe6637;
    color: #fff;
  }
  :hover:before {
    left: 150px;
    transition: 0.5s ease-in-out;
  }
`;
