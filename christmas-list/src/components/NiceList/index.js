function NiceList({ list, changeList }) {
  function handleClick(id) {
    console.log("Button clicked!", id);
    changeList(id);
  }

  return (
    <section className="listSection">
      <h2>Nice</h2>
      <ul>
        {list.map((each) => {
          return (
            <li className="listItem" key={each.id}>
              {each.name}
              <button
                className="button"
                onClick={() => {
                  handleClick(each.id);
                }}
              >
                Naughtify
              </button>
            </li>
          );
        })}
      </ul>
      {/* <input value={input} onChange={handleInput} /> */}
    </section>
  );
}

export default NiceList;
