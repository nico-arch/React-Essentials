import ReactImg from "./assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function GenRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={ReactImg} alt="Stylized atomm" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[GenRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
