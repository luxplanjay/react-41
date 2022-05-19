import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/materialsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);
  return (
    <div>
      <label>
        Поиск материала по названию
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};
