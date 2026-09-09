import "./App.css";
import Button from "../ui/Button/Button";
function App() {
  return (
    <div>
      <Button
        text="coucou"
        numb={25}
        bl={true}
        un={undefined}
        nu={null}
        st={"str"}
        fn={function () {}}
        obj={{ abc: 1 }}
        arr={[1, 2, 3]}
        balise={<div>coucou</div>}
      ></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </div>
  );
}

export default App;
