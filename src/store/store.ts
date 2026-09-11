import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage } from "./ressources";

const store = configureStore({
  reducer: ressourcesReducer,
});

console.log(store.getState());
store.subscribe(() => {
  console.trace("changement de store", store.getState());
});

store.dispatch(addImage({ id: 0, h: 0, w: 20, name: "", url: "" }));
store.dispatch(addImage({ id: 1, h: 0, w: 20, name: "", url: "" }));
store.dispatch(addImage({ id: 2, h: 0, w: 20, name: "", url: "" }));
store.dispatch(addImage({ id: 3, h: 0, w: 20, name: "", url: "" }));
store.dispatch(addImage({ id: 4, h: 0, w: 20, name: "", url: "" }));
store.dispatch(addImage({ id: 5 , h: 0, w: 20, name: "", url: "" }));
export default store;
