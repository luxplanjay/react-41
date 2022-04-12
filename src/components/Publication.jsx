export const Publication = ({ item }) => {
  const { title, text } = item;
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};
