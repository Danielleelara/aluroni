import React, {useState} from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export default function Ordenador() {
  const [open, setOpen] = useState(false);

  console.log(open)

  return (
    <button 
      onBlur={()=> setOpen(false)}
      onClick={()=> setOpen(!open)}
      className={styles.ordenador}>
      <span>Ordenar Por</span>
      {open ? < MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div 
        className={classNames({
        [styles.ordenador__options]: true,
        [styles["ordenador__options--ativo"]]: open,

      })}>
        {opcoes.map((opcao) =>
          <div
            className={styles.ordenador__option}
            key={opcao.value}
          >
           {opcao.nome}
          </div>
        )}
      </div>
    </button>
  )
}
