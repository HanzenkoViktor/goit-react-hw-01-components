import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  position: absolute;
  top: 0;
  left: 70%;
  background-color: #ffffff;
  table-layout: fixed;
  width: 300px;
  border-collapse: collapse;
  box-shadow: 1px 1px 4px #666666;
  th,
  td {
    padding: 10px;
    height: 20px;
  }
`;

export const TransactionThead = styled.thead`
  th {
    text-align: left;
    color: #fff;
    background-color: #716d57;
    &:last-child {
      text-align: right;
    }
  }
`;

export const TransactionTbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: #eee;
  }
  td {
    min-width: 250px;
    color: #494949;
    border-bottom: 1px solid #aaa;
    &:first-of-type {
      width: 150px;
      min-width: 0;
    }
    &:last-child {
      width: 80px;
      min-width: 0;
      text-align: right;
    }
  }
`;
