function Stats({ lisItem }) {
  if (lisItem.length === 0) {
    return (
      <footer className="stats">
        <span>📝 yuk buat catatan</span>
      </footer>
    );
  }

  const checkedItem = lisItem.filter((item) => item.done).length;
  const persented = Math.floor((checkedItem / lisItem.length) * 100);

  return (
    <footer className="stats">
      <span>
        📝 Kamu punya {lisItem.length} catatan dan baru {checkedItem} yang di
        checklist
      </span>
      <p>{persented}% DONE!</p>
    </footer>
  );
}

export default Stats;
