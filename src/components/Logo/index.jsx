import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from './../../svg/LogoSvg.svg';

import './styles.sass';

export default function index() {
  console.log(LogoSvg);

  return (
    <Link to="/" className="logo">
      {/* <LogoSvg /> */}
    </Link>
  );
}
