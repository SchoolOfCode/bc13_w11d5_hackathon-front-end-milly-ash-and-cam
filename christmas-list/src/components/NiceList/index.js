function NiceList({ list, changeList }) {
  function handleClick(id) {
    console.log("Button clicked!", id);
    changeList(id);
  }

  return (
    <section>
      <h2>Nice</h2>
      <ul>
        {list.map((each) => {
          return (
            <li className="listItem" key={each.id}>
              {each.name}
              <button
                className="NiceList"
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
