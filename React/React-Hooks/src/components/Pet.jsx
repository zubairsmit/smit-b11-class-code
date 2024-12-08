import React from 'react'

function Pet({item}) {
    // let item = props.item;
    // console.log(props.item)
  return (
       <div className="pet">
        <div className="image-container">
            <img src={item.images[0]} alt="" />
        </div>
          <div className="info">
            <h1>{item.name}</h1>
            <h2>{item.animal} — {item.breed} — {item.state}</h2>
          </div>
        </div>
  )
}

export default Pet;