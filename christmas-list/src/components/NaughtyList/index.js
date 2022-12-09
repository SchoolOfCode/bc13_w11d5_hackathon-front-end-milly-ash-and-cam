import "./naughtylist.css";

function NaughtyList({ list, changeList }) {
  function handleClick(id) {
    console.log("Button clicked!", id);
    changeList(id);
  }

  return (
    <section className="listSection">
      <h2>Naughty</h2>
      <ul>
        {list.map((each) => {
          return (
            <li className="listItem" key={each.id}>
              {each.name}

              <button
                className="button2"
                onClick={() => {
                  handleClick(each.id);
                }}
              >
                Niceify
              </button>
            </li>
          );
        })}
      </ul>
      {/* <input value={input} onChange={handleInput} /> */}
    </section>
  );
}

export default NaughtyList;
