import styled from 'styled-components';
import Select from 'react-select';

export const FilterBlockInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputHolder = styled.div`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  > svg {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 20px 5px 50px;
  height: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  }
`;

export const MySelect = styled(Select)`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  min-width: 200px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  .css-1s2u09g-control {
    height: ${({ theme }) => theme.spacing[4]};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .css-qc6sy-singleValue {
    color: ${({ theme }) => theme.colors.primary};
  }

  .css-6j8wv5-Input {
    color: ${({ theme }) => theme.colors.primary};
  }

  .css-319lph-ValueContainer {
    padding: 5px 20px;
  }

  .css-1s2u09g-control,
  .css-1pahdxg-control,
  .css-26l3qy-menu {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
