import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, LoadRessources } from "./ressources";
import currentReducer from './currentMeme'

const store = configureStore({
  reducer: {ressources:ressourcesReducer, current:currentReducer}
});

// console.log(store.getState());
store.subscribe(() => {
  console.trace("changement de store", store.getState());
});

 export type RootState = ReturnType<typeof store.getState>;

store.dispatch(LoadRessources())

export default store;
