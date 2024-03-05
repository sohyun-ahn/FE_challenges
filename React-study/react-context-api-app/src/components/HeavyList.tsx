function HeavyList() {
  return (
    <ol>
      {Array(5000)
        .fill(true)
        .map((el, i) => (
          <li key={i}>안녕하세유?</li>
        ))}
    </ol>
  );
}

export default HeavyList;
