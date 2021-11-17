import styled from 'styled-components';
import { ThemeState } from './../../store/slices/themeSlice';

interface ToggleBtnProps {
  btnTheme: 'light' | 'dark';
}

export const ToggleBtn = styled.button<ToggleBtnProps>`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  padding: 0;
  color: currentColor;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;

  > svg {
    margin-right: 8px;
  }
`;
