import React from 'react'

interface IProps {
  url: string
}

function photo(props: IProps) {
  const src = 'file://' + props.url
  return (
    <div className="photo has-background-grey">
      <figure className="image is-square">
        <img src={src} alt="favourite" />
      </figure>
    </div>
  )
}

export const Photo = React.memo(photo)
