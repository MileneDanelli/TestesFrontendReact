import React from "react";
import { Dropdown } from "./Dropdown";

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
    </div>
  );
}

export default App;
