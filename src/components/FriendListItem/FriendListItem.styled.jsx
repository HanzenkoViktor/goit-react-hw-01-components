import styled from '@emotion/styled';

export const FriendLi = styled.li`
  display: inherit;
  align-items: center;
  padding: 10px 15px;
  gap: 20px;
  box-shadow: 1px 1px 4px #565656;
  border-radius: 16px;
  :nth-of-type(even) {
    background-color: #e1e1e1;
  }
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
