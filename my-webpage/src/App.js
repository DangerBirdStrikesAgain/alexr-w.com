import './App.css';

function App() {
  return (
    <div className="Page">
        <img src={require("./myphoto.jpeg")} className="myPicture" alt = {"Me, Alex"} />
        <section className = "Name">
          Alex Riddell-Webster
        </section>
        <section className='Text'>
          Hi there! My website is under construction and will be updated soon :)
        </section>
    </div>
  );
}

export default App;
