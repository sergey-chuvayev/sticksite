import React from 'react';

import style from './ArticleType8.module.scss';

const ArticleType8 = () => {
  return (
    <div className={style['ArticleType8']}>
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
          <div className={style['image']} style={{ backgroundImage: `url(/assets/illus1.svg)` }} />
          <div className={style['title']}>
            <div className={style['number']}>1</div>
            <span>STRONG MAGNET</span>
          </div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/illus2.svg)` }} />
          <div className={style['title']}>
            <div className={style['number']}>2</div>
            <span>STRONG MAGNET</span>
          </div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/illus3.svg)` }} />
          <div className={style['title']}>
            <div className={style['number']}>3</div>
            <span>STRONG MAGNET</span>
          </div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['image']} style={{ backgroundImage: `url(/assets/illus4.svg)` }} />
          <div className={style['title']}>
            <div className={style['number']}>4</div>
            <span>STRONG MAGNET</span>
          </div>
          <div className={style['desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleType8;
