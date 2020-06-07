import React from 'react';
import cx from 'classnames';

const ArticleType10 = ({ reversed }: { reversed?: boolean }) => {
  return (
    <div className={cx('ArticleType10', { "reverse": reversed })}>
      <div className='ArticleType10__left'>
        Sed ut perspiciatis unde omnis iste natus error sit volupta tem accusantium doloremque laudan ong tium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <span className='ArticleType10__red'>IMStick</span> vitae dicta sunt explicabo. Brem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <span className='ArticleType10__red'>IMStand</span> vitae dicta sunt explicabo. 
      </div>
      <div className='ArticleType10__right' style={{ backgroundImage: 'url(/assets/circle1.png)' }}>
        <div>
          <div className='ArticleType10__title'>
            FIND YOUR WAY HOW TO BE FAST AND CAREFUL
          </div>
          <div className='ArticleType10__title-small'>
            <span>IMKEEPER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleType10;
