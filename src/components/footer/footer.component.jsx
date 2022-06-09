import React from 'react';
import styled from 'styled-components';

export const footerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  color: black;
  text-align: center;
  font-size: small;
  margin: 5rem auto 0 auto;
`;

export default function Footer() {
  return (
    <footerContainer>
      <p>🚀 Project build by Christopher Hannelas - 2022</p>
      <p>
        <a href='mailto:christopherhannelas@gmail.com'>🖃 Contact me</a>
      </p>
    </footerContainer>
  );
}
