import React from 'react'

const url =
  'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' +
  '?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg'

export const Photo = () => {
  return (
    <div className="photo has-background-grey">
      <figure className="image is-square">
        <img src={url} alt="photo" />
      </figure>
    </div>
  )
}
