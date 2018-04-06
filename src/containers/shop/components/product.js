import styled, { css } from 'styled-components';

export const Product = styled.div`
  display: flex;
  padding: 1em;
  border: 1px solid rgba(0,0,0,0.3);
  margin: 0 10px 10px 0;
  
  ${props => props.shop && css`
    flex-direction: column;
  `}

  ${props => props.cart && css`
    justify-content: space-between;
    align-items: center;
    flex: 1;
  `}
`;

export const ProductImage = styled.img`

`;

export const ProductName = styled.div`
  margin: 4px 5px;
  font-size: 18px;
  color: rgba(0,0,0,0.8);
  font-weight: 600;
`;

export const ProductQuantity = styled.input`
  margin: 0 5px;
  width: 120px;
  text-align: right;

  ${props => props.shop && css`
    font-size: 22px;
    color: #2CA58D;
  `}

  ${props => props.cart && css`
    font-size: 18px;
  `}
`;

export const ProductPrice = styled.p`
  
  ${props => props.shop && css`
    font-size: 24px;
    color: #2CA58D;
    margin: 0 5px;
  `}

  ${props => props.cart && css`
    margin: 0 25px 0 0;
    width: 120px;
  `}
`;

export const ProductTotal = styled.p`
  font-size: 22px;
  color: #2CA58D;
  margin: 0 5px;
  width: 180px;
  text-align: right;
`;
