export const Controls = ({ onForward, onBack, prevDisabled, nextDisabled }) => {
  return (
    <section>
      <button type="button" onClick={onBack} disabled={prevDisabled}>
        Назад
      </button>
      <button type="button" onClick={onForward} disabled={nextDisabled}>
        Вперед
      </button>
    </section>
  );
};
