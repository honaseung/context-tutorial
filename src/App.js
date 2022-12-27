import ColorBox from "./componenets/ColorBox";
import SelectColors from "./componenets/SelectColors";
import { ColorProvider } from "./context/Color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
