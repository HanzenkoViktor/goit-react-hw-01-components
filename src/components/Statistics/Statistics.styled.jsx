import styled from '@emotion/styled';

export const SectionStats = styled.section`
  position: absolute;
  top: 0;
  left: 5%;
  background-color: #ffffff;
  width: 300px;
  box-shadow: 1px 1px 4px #565656;
  border-radius: 16px;
  overflow: hidden;
  height: fit-content;
  pointer-events: none;
  transform: translate(0, 350%);
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #2e2e2e;
`;

export const StatsList = styled.ul`
  color: #fff;
  display: flex;
`;

export const StatsItem = styled.span`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 5px;
  ${statsBackgroundColor}
`;

export const StatsText = styled.span`
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StatsTextPersent = styled.span`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

function statsBackgroundColor({ id }) {
  const color = getRandomHexColor();

  return `
        background-color: ${color}; 
        `;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
