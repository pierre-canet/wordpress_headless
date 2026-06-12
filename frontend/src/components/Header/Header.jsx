import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="">Catégories</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
