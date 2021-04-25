import React, { createContext } from "react";

export const Context = createContext(null);

// const Provider = Context.Provider;
// const Consumer = Context.Consumer;
// export default {
//     Provider,
//     Consumer
// }
export const GlobalProvider = Context.Provider;
export const GlobalConsumer = Context.Consumer;

