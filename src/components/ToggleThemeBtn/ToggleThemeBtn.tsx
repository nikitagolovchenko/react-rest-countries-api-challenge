import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectTheme, toggleTheme } from '../../store/slices/themeSlice';
import { BsMoon, BsSunFill } from 'react-icons/bs';
import { ToggleBtn } from './ToggleThemeBtn.styles';
import { useAppDispatch } from './../../hooks/reduxHooks';

const ToggleThemeBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <ToggleBtn btnTheme={theme.theme} onClick={() => dispatch(toggleTheme())}>
      {theme.theme === 'light' ? <BsMoon /> : <BsSunFill />}
      {theme.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </ToggleBtn>
  );
};

export default ToggleThemeBtn;
