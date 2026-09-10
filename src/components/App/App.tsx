import "./App.css";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);
  // const [totoALaPlage, settotoALaPlage] = useState("");
  useEffect(() => {
    //mount & update
    console.log(
      "%cValeur de counter sync:%s",
      "color:red;text-decoration:underline;font-size:large",
      counter,
    );

    return () => {
      //will unmount
    };
  }, [counter]);
  useEffect(() => {
    console.log("cmp mounted");
    return () => {
      //dismount
    };
  }, []);
  useEffect(() => {
    console.log("any mount//updateAction");
    return () => {
      //dismount
    };
  });

  return (
    <div style={{ textAlign: "center" }}>
      Voici la valeur de counter :{counter}
      <div>
        <hr />
        <Button
          bgcolor="tomato"
          parentOnClickAction={() => {
            setCounter(counter - 1);
            console.log(counter);
          }}
        >
          -1
        </Button>
        <Button
          bgcolor="skyblue"
          parentOnClickAction={() => {
            setCounter(counter + 1);

            console.log(counter);
          }}
        >
          +1
        </Button>
      </div>
    </div>
  );
}

export default App;
