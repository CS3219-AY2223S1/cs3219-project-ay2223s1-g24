import { configureStore } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import usernameSlice from "slices/usernameSlice";
import roomSlice from "slices/roomSlice";
import matchingSlice from "slices/matchingSlice";
import verificationSlice from "slices/verificationSlice";

const reduxStateSyncConfig = { blacklist: ["persist/PERSIST"] };

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     username: usernameSlice,
//     room: roomSlice,
//     matching: matchingSlice,
//   })
// );

const store = configureStore({
  reducer: {
    username: usernameSlice,
    room: roomSlice,
    matching: matchingSlice,
    verification: verificationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createStateSyncMiddleware(reduxStateSyncConfig)),
});

initMessageListener(store);

// export const persistor = persistStore(store);

export default store;
