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
  font-size: 1.6rem;
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

export const Counter = styled.span`
  font-size: 1.2rem;
  text-align: center;
  margin: 8px 0;
  font-weight: 700;
  color: red;
`;
