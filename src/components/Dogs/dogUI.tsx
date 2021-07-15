/* 只负责展示和触发获取事件 */

import React from 'react'

const DogUI = (props: any) => {

  const {dogUrl, dogHistorylist, onFecthDog} = props

  return <>
    <button onClick={onFecthDog}>获取dog图片</button>
    <br />
    <br />
    <img src={dogUrl} alt="" width='300px' />
    <h2>狗狗获取记录</h2>
    <ul>
      {
        dogHistorylist.length <= 0 ? <li>暂无</li> : (dogHistorylist.map((item: string) => <li key={item}>{item}</li>))
      }
    </ul>
  </>
}

export default DogUI