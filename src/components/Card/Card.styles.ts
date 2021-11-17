import styled from 'styled-components';

export const CardItem = styled.article`
  min-height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
`;

export const CardImgHolder = styled.div`
  position: relative;
  padding-top: 55%;
  border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  overflow: hidden;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 20px;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
`;

export const CardTitle = styled.h3`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
`;
