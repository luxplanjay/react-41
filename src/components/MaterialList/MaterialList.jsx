import { Material } from '../Material/Material';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};
