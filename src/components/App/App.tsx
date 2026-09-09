import "./App.css";
import Button from "../ui/Button/Button";

function App() {
  return (
    <div>
      <Button
        text="btn1"
        parentOnClickAction={() => {
          alert("btn 1");
        }}
      />
      <Button
        text="btn2"
        parentOnClickAction={() => {
          alert("btn 2");
        }}
      />
    </div>
  );
}

export default App;
