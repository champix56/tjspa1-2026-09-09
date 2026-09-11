import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, LoadRessources } from "./ressources";

const store = configureStore({
  reducer: ressourcesReducer
});

// console.log(store.getState());
store.subscribe(() => {
  console.trace("changement de store", store.getState());
});

 export type RootState = ReturnType<typeof store.getState>;

store.dispatch(LoadRessources())

export default store;
