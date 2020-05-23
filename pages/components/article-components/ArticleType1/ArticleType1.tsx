import React from 'react';

import style from './ArticleType1.module.scss';

const ArticleType1 = () => {
  return (
    <div className={style['ArticleType1']}>
      <div className={style['item']}>
        <div className={style['image']} style={{ backgroundImage: `url(/assets/1.png)` }} />
        <div className={style['title']}>STRONG MAGNET</div>
        <div className={style['desc']}>
          Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
        </div>
      </div>

      <div className={style['item']}>
        <div className={style['image']} style={{ backgroundImage: `url(/assets/2.png)` }} />
        <div className={style['title']}>STRONG MAGNET</div>
        <div className={style['desc']}>
          Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
        </div>
      </div>

      <div className={style['item']}>
        <div className={style['image']} style={{ backgroundImage: `url(/assets/3.png)` }} />
        <div className={style['title']}>STRONG MAGNET</div>
        <div className={style['desc']}>
          Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
        </div>
      </div>
    </div>
  )
}

export default ArticleType1;
