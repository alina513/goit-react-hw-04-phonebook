import css from './Filter.module.css';
export const Filter = ({ filter, updateFilter }) => (
  <div className={css.filter}>
    <label className={css.label} htmlFor="filter">
      Find contacts by name
    </label>
    <input
      className={css.input}
      type="text"
      name="filter"
      id="filter"
      value={filter}
      onChange={event => updateFilter(event.target.value)}
      required
    />
  </div>
);
