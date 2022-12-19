import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Header/Header';

export default () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};