import React from 'react';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';
import { RouteProps } from 'react-router';

export enum RoutesPath {
  HOME = '/',
  DETAIL = '/country/:id',
  REDIRECT = '*'
}

export const publicRoutes: RouteProps[] = [
  { path: RoutesPath.HOME, element: React.createElement(Home)},
  { path: RoutesPath.DETAIL, element: React.createElement(Detail)},
  { path: RoutesPath.REDIRECT, element: React.createElement(Home)},
];
