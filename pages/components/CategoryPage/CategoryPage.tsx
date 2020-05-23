import React from 'react';

import Menu from '../Menu/Menu';
import VerticalMenu from '../VerticalMenu/VerticalMenu';

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
      <div className={style['middle']}>
        <div className={style['vertical-menu']}>
          <VerticalMenu />
        </div>
        <div className={style['content']}>
          <div className={style['small-title']}>
            IMSPORT
          </div>
          <div className={style['big-title']}>
            HOW TO USE<br/>IMSTICK FOR<br/>Sport activities
          </div>
          <div className={style['circle-arrows-nav']}>
            <div className={style['circle-arrows-nav-back']}></div>
            <div className={style['circle-arrows-nav-forth']}></div>
          </div>
          <div className={style['description']}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium now er doloremque noe laudantium, totam rem aperiam, eaque ipsa quae ab illo
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;
