import { Trash } from 'phosphor-react';
import './styles.css';

export function Card({ name, time, onDelete }) {
  function handleDeleteCard() {
    onDelete(Card);
  }

  return(
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
      <button onClick={handleDeleteCard}
        title="Deletar comentário"
        ><Trash size={20}/>
      </button> 
    </div>
  )
}