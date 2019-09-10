import React from 'react'

interface IProps {
  url: string
}

const photo = (props: IProps) => {
  return (
    <div className="photo has-background-grey">
      <figure className="image is-square">
        <img src={props.url} alt="favourite" />
      </figure>
    </div>
  )
}

export const Photo = React.memo(photo)
