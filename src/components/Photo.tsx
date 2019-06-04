import React from 'react'

interface IProps {
  url: string
}

export const Photo = (props: IProps) => {
  return (
    <div className="photo has-background-grey">
      <figure className="image is-square">
        <img src={props.url} alt="favourite" />
      </figure>
    </div>
  )
}
