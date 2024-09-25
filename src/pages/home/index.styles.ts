import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  background-color: white;
  top: 0;
  width: 100%;
`;

export const Title = styled.h1`
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 14px 0;
  margin: 16px 0;
  cursor: pointer;
  background-color: darksalmon;
  border: 0;
  border-radius: 100px;
  color: white;
`;

export const Image = styled.img`
  width: 50%;
  max-width: 200px;
`;
