import React from 'react'
import { ClientCardProps } from 'app/interfaces';

const ClientCard: React.FC<ClientCardProps> = ({ url }) => {
  return (
    <div className="cc" style={{ width: "25rem", margin: ".7rem 0" }}>
        <figure className="cc-image">
            <img 
            src={url} 
            alt="Client Image Logo"
            style={{ width: "100%", height: "auto", objectFit: "cover"}} />
        </figure>
    </div>
  )
}

export { ClientCard };