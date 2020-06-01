import React from 'react';

const ArticleType9 = () => {
  return (
    <div className='ArticleType9'>
      <div className='ArticleType9__left'>
        <div className='ArticleType9__top'>
          <div className='ArticleType9__img' style={{ backgroundImage: 'url(/assets/1.png)' }} />
          <div className='ArticleType9__title'>
            <div className='ArticleType9__big'>
              I've failed over and over again...
            </div>
            <div className='ArticleType9__small'>
              <span>WATCH NOW</span>
              <img src="/arrow-right-red.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className='ArticleType9__desc'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>
      <div className='ArticleType9__right'>
        <div className='ArticleType9__grid'>
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/01.png)' }} />
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/02.png)' }} />
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/03.png)' }} />
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/04.png)' }} />
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/05.png)' }} />
          <div className='ArticleType9__gridimg' style={{ backgroundImage: 'url(/assets/06.png)' }} />
        </div>
        <div className='ArticleType9__griddesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim venenatis donec sed massa congue.
        </div>
      </div>
    </div>
  )
}

export default ArticleType9;
