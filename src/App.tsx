import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, useAppDispatch } from './hooks/reduxHooks';
import AppRouter from './router/AppRouter';
import { fetchAllCountries } from './store/slices/countrySlice';
import { selectTheme } from './store/slices/themeSlice';
import { darkTheme, lightTheme, GlobalStyle } from './theme';

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [])

  return (
    <ThemeProvider theme={theme.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
