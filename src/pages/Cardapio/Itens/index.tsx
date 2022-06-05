import React from 'react';
import cardapio from './itens.json';

export default function Itens() {
  return (
    <div>
      {cardapio.map((item)=>(
        <div>
          {item.title}
        </div>
      ))}
    </div>
  )
}
