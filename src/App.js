export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="./palm.png" alt="palm" />
      <h1>FAR FAR AWAY</h1>
      <img src="./suitecase.png" alt="luggage" />
    </div>
  );
}
function Form() {
  function handleAdd() {}
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <input type="dropdown" placeholder="1" className="quantity" />
      <input type="text" placeholder="item..." />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
function PackingList() {
  return (
    <main className="list">
      <div className="listItems"></div>
      <div className="buttons">
        <button>Sort By Input Order</button>
        <button>Clear List</button>
      </div>
    </main>
  );
}
function Item({ item }) {
  console.log({ item });
  return (
    <>
      <span className="item">
        <input type="checkbox" />
        {item.quantity} {item.name}
        <button className="close">&times;</button>
      </span>
    </>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        🧳 You have qty items on your list, and you already have packed 0 (0%)
      </em>
    </footer>
  );
}
