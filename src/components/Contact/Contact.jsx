import css from './Contact.module.css';
export const Contact = ({ value, onDelete }) => (
  <li className={css.item}>
    {value.name}:{value.number}
    <button
      className={css.button}
      type="button"
      onClick={() => onDelete(value.id)}
    >
      Delete
    </button>
  </li>
);
