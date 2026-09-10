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
        bgcolor="skyblue"
        className="warning"
        style={{textDecoration:'underline', border:'1px solid grey'}}
        text="btn2"
        parentOnClickAction={() => {
          alert("btn 2");
        }}
      />
    </div>
  );
}

export default App;
