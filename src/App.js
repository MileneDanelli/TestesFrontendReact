import React from "react";
import { Dropdown } from "./Dropdown";
import Todo from "./Todo";

function App() {
  const [selectedAnime, setSelectedAnime] = React.useState(null);

  return (
    <div className="App">
      {selectedAnime && <div>Seu Anime: {selectedAnime}</div>}
      
      <Dropdown 
        title="Selecione um Anime:" 
        options={['SAO', 'Mirai Nikki', 'Akame Ga Kill']} 
        onSelect={setSelectedAnime} 
      />

      <Todo />
    </div>
  );
}

export default App;
