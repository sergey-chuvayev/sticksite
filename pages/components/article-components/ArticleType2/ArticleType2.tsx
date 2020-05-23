import React from 'react';

import style from './ArticleType2.module.scss';

const ArticleType2 = () => {
  return (
    <div className={style['ArticleType2']}>
      <div className={style['main-title']}>
        <div className={style['main-title-small']}>
          SIMPLE SOLUTION
        </div>
        <div className={style['main-title-big']}>
          FIND YOUR WAY
        </div>
      </div>
      <div className={style['content']}>
        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/r1.png)` }}>
            <div className={style['number']}>01</div>
          </div>
          <div className={style['title']}>OUTDOOR <img src="/arrow-right-black.svg" alt=""/></div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/r2.png)` }}>
            <div className={style['number']}>02</div>
          </div>
          <div className={style['title']}>YOGA <img src="/arrow-right-black.svg" alt=""/></div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/r3.png)` }}>
            <div className={style['number']}>03</div>
          </div>
          <div className={style['title']}>OUTDOOR <img src="/arrow-right-black.svg" alt=""/></div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/r4.png)` }}>
            <div className={style['number']}>04</div>
          </div>
          <div className={style['title']}>OUTDOOR <img src="/arrow-right-black.svg" alt=""/></div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit , consectetur Ipsum dolor sit , consectetur adipi 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleType2;
