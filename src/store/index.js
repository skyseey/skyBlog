import { configureStore } from "@reduxjs/toolkit";
import common from "./modules/common";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "common",
  version: 1,
  storage,
};

const store = configureStore({
  reducer: {
    common: persistReducer(persistConfig, common),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

persistStore(store);

export default store;
