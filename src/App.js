import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [superhero, setSuperhero] = useState({
    name: null,
    strength: null,
    intelligence: null,
    weapons: null,
    planet: null,
    imageURL: null,
  });
  let [superheroes, setSuperheroes] = useState([]);

  let [createMargin, setCreateMargin] = useState(-30);
  let [updateMargin, setUpdateMargin] = useState(-30);

  useEffect(() => {
    let localData = localStorage.getItem("superheroes");
    if (localData === null) {
      localStorage.setItem("superheroes", JSON.stringify([]));
    } else {
      setSuperheroes(JSON.parse(localData));
    }
  }, []);

  function createSuperhero() {
    let temArray = [...superheroes, superhero];
    setSuperheroes(temArray);
    localStorage.setItem("superheroes", JSON.stringify(temArray));
    setCreateMargin(-30);
  }
  function updateSuperhero(data) {
    setSuperhero(data);
    setUpdateMargin(0);
  }
  let updateData = () => {
    let temArray = [...superheroes];
    setSuperheroes(temArray);
    localStorage.setItem("superheroes", JSON.stringify(temArray));
    setUpdateMargin(-30);
  };

  function deleteSuperhero(index) {
    let temArray = [...superheroes];
    temArray.splice(index, 1);
    setSuperheroes(temArray);
    localStorage.setItem("superheroes", JSON.stringify(temArray));
  }
  let cross = () => {
    setCreateMargin(-30);
    setUpdateMargin(-30);
  };

  return (
    <div className="App">
      {/* Create form */}
      <div className="create-form" style={{ marginLeft: createMargin + "%" }}>
        <div className="cross" onClick={cross}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="section-title">Add Superhero</h1>
        <input
          type="text"
          onChange={(e) => (superhero.name = e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="number"
          onChange={(e) => (superhero.strength = e.target.value)}
          placeholder="Enter Strength"
        />
        <input
          type="number"
          onChange={(e) => (superhero.intelligence = e.target.value)}
          placeholder="Enter Intellegence"
        />
        <input
          type="text"
          onChange={(e) => (superhero.weapons = e.target.value)}
          placeholder="Enter weapons"
        />
        <input
          type="text"
          onChange={(e) => (superhero.planet = e.target.value)}
          placeholder="Enter planet"
        />
        <input
          type="text"
          onChange={(e) => (superhero.imageURL = e.target.value)}
          placeholder="Enter Image Link"
        />
        <button className="form-btn" onClick={createSuperhero}>
          Create
        </button>
      </div>
      {/* Update form */}
      <div className="update-form" style={{ marginLeft: updateMargin + "%" }}>
        <div className="cross" onClick={cross}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="section-title">Update Superhero</h1>
        <input
          type="text"
          onChange={(e) => (superhero.name = e.target.value)}
          placeholder="Enter Name"
          defaultValue={superhero.name}
        />
        <input
          type="text"
          onChange={(e) => (superhero.strength = e.target.value)}
          placeholder="Enter Strength"
          defaultValue={superhero.strength}
        />
        <input
          type="text"
          onChange={(e) => (superhero.intelligence = e.target.value)}
          placeholder="Enter Intellegence"
          defaultValue={superhero.intelligence}
        />
        <input
          type="text"
          onChange={(e) => (superhero.weapons = e.target.value)}
          placeholder="Enter weapons"
          defaultValue={superhero.weapons}
        />
        <input
          type="text"
          onChange={(e) => (superhero.planet = e.target.value)}
          placeholder="Enter planet"
          defaultValue={superhero.planet}
        />
        <input
          type="text"
          onChange={(e) => (superhero.imageURL = e.target.value)}
          placeholder="Enter Image Link"
          defaultValue={superhero.imageURL}
        />
        <button className="form-btn" onClick={updateData}>
          Update
        </button>
      </div>
      {/* Superheroes display component */}
      <div className="header">
        <h1 className="page-title">Superheroes</h1>
        <button className="btn" onClick={() => setCreateMargin(0)}>
          Add Superhero
        </button>
      </div>
      <div className="display">
        {superheroes.map((superhero, index) => {
          return (
            <div className="superhero" key={index}>
              <div className="super-img">
                <img
                  className="img"
                  src={superhero.imageURL}
                  alt="Superhero pic"
                />
              </div>
              <div className="super-details">
                <div>
                  <h2 className="name">{superhero.name}</h2>
                  <h3 className="planet">{superhero.planet}</h3>
                </div>

                <div className="powerstats">
                  <div>
                    <p>Strength</p>
                    <div className="full">
                      <p
                        className="strength"
                        style={{ width: superhero.strength + "%" }}
                      ></p>
                    </div>
                  </div>
                  <div>
                    <p>Intelligence</p>
                    <div className="full">
                      <p
                        className="intelligence"
                        style={{ width: superhero.intelligence + "%" }}
                      ></p>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <i
                    className=" fa-solid fa-file-pen update"
                    onClick={() => updateSuperhero(superhero)}
                  ></i>
                  <i
                    className=" fa-solid fa-trash delete"
                    onClick={() => deleteSuperhero(index)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
