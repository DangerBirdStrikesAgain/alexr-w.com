import './App.css';

function App() {
  return (
    <div className="Page">
        <img src={require("./myphoto.jpeg")} className="myPicture" alt = {"Me, Alex"} />
        <section className = "Name">
          Alex Riddell-Webster
        </section>
    </div>
  );
}

export default App;
