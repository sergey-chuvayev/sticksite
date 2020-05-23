import React from 'react';
import cx from 'classnames';

import style from './ArticleType11.module.scss';

const ArticleType11 = () => {
  return (
    <div className={style['ArticleType11']}>
      <div className={style['grid']}>
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big1.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big2.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big2.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big2.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big3.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big2.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big3.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big1.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big3.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big1.jpg)' }} /> 
        <div className={cx(style['img'], style['small'])} style={{ backgroundImage: 'url(/assets/big4.png)' }} /> 
      </div>
      <div className={style['desc']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim venenatis donec sed massa congue. Lipsum dolor sit amet, consectetur adipiscing elit. Enim venenatis donec sed massa congue.
      </div>
    </div>
  )
}

export default ArticleType11;
