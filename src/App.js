import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {

  //executa codigo escrito ao carregar pagina
  useEffect(() =>{
    const loadAll = async() => {
        // Pegando a lista TOTAL
        let list = await Tmdb.getHomeList();
        console.log(list)
    }
    loadAll();
  },[]);

  return (
    <div>Ola Mundo!</div>
  )
}