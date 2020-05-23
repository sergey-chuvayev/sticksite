import React from 'react';

import Menu from '../Menu/Menu';

import style from './CategoryPage.module.scss';

const CategoryPage = () => {
  return (
    <div className={style['CategoryPage']}>
      <div className={style['top']}>
        <a href="#" className={style["logo"]} />
        <div className={style['menu']}>
          <Menu />
        </div>
        <div className={style['cart']}>
          <div className={style['counter']}>99</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;
