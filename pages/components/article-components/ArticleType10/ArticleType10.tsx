import React from 'react';

import style from './ArticleType10.module.scss';

const ArticleType10 = () => {
  return (
    <div className={style['ArticleType10']}>
      <div className={style['left']}>
        Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudan ong tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <span className={style['red']}>IMStick</span> vitae dicta sunt explicabo. Brem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <span className={style['red']}>IMStand</span> vitae dicta sunt explicabo. 
      </div>
      <div className={style['right']} style={{ backgroundImage: 'url(/assets/circle1.png)' }}>
        <div>
          <div className={style['title']}>
            FIND YOUR WAY HOW TO BE FAST AND CAREFUL
          </div>
          <div className={style['title-small']}>
            <span>IMKEEPER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleType10;
