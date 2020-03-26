import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import api from "../../services/api"; 

export default function NewIncident() {

  const [title, setTile] = useState('');
  const [description, setDescription] = useState();
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  

  async function handleNewIncidents(e){
    e.preventDefault();

    const data ={
      title,
      description,
      value
    }

    try {
       await api.post('incidents', data,{
         headers:{
           Authorization:ongId,
         }
       })
       history.push('/profile')
      
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente')
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Logo'/>
          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontra um herói para resolver isso.</p>
          <Link className='link' to="/profile">
              <FiArrowLeft size={16} color='#E02041'/>
             Voltar para home
          </Link>

        </section>
        <form onSubmit={handleNewIncidents}>
          <input 
            value={title}
            onChange={e => setTile(e.target.value)}
            placeholder='Titulo do caso'/>
          <textarea 
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Descrição'/>
          <input 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Valor em Reais' />

          <button className='button' type='submit'> Cadastrar</button>
          
        </form>
      </div>
  </div>
  );
}
