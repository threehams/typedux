import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { State } from "./models";
import { rootReducer } from "./rootReducer";

// tslint:disable-next-line no-any
declare const module: { hot: any };

export const configureStore = (initialState?: State) => {
  const withMiddleware = applyMiddleware(thunk)(createStore);
  const withDevTools = window.devToolsExtension
    ? window.devToolsExtension()(withMiddleware)
    : withMiddleware;
  // tslint:disable-next-line no-any
  const store: Store<any> = withDevTools(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
