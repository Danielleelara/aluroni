import React, {useState} from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>,
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [open, setOpen] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

  return (
    <button 
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      onBlur={()=> setOpen(false)}
      onClick={()=> setOpen(!open)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {open ? < MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div 
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: open,
        })}>
        {opcoes.map((opcao) =>
          <div
            onClick={()=> setOrdenador(opcao.value)}
            className={styles.ordenador__option}
            key={opcao.value}
          >
            {opcao.nome}
          </div>
        )}
      </div>
    </button>
  );
}
