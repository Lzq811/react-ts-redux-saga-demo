import React, { useState, useEffect } from "react"

const Dog = (props: any) => {

  const { onFetchDogs } = props

  const [url, setUrl] = useState(props.url)

  useEffect(() => { setUrl(props.url) }, [props.url])

  const getDogBtn = (): void => {
    onFetchDogs()
  }

  return <div style={{width: 600, margin: '50px auto'}}>
    <button onClick={getDogBtn}>fetch dog</button>
    <br />
    <br />
    <img src={url} alt="" width='500px' />
  </div>
}

export default Dog