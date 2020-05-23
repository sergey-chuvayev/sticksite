import React from 'react';

import style from './ArticleType3.module.scss';

const ArticleType3 = () => {
  return (
    <div className={style['ArticleType3']}>
      <div className={style['image']} style={{ backgroundImage: 'url(/assets/1.png)' }} />
      <div className={style['content']}>
        <div className={style['title']}>
          a new generation <br/>of tripods
        </div>
        <div className={style['divider']} />
        <div className={style['desc']}>
          Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudan ong tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <span className={style['red']}>IMStand</span> vitae dicta sunt explicabo. 
        </div>
      </div>
    </div>
  )
}

export default ArticleType3;
