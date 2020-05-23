import React from 'react';

import style from './ArticleType9.module.scss';

const ArticleType9 = () => {
  return (
    <div className={style['ArticleType9']}>
      <div className={style['left']}>
        <div className={style['top']}>
          <div className={style['img']} style={{ backgroundImage: 'url(/assets/1.png)' }} />
          <div className={style['title']}>
            <div className={style['big']}>
              I've failed over and over again...
            </div>
            <div className={style['small']}>
              <span>WATCH NOW</span>
              <img src="/arrow-right-red.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className={style['desc']}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>
      <div className={style['right']}>
        <div className={style['grid']}>
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/01.png)' }} />
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/02.png)' }} />
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/03.png)' }} />
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/04.png)' }} />
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/05.png)' }} />
          <div className={style['gridimg']} style={{ backgroundImage: 'url(/assets/06.png)' }} />
        </div>
        <div className={style['griddesc']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim venenatis donec sed massa congue.
        </div>
      </div>
    </div>
  )
}

export default ArticleType9;
