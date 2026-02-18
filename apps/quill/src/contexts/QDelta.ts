import { Delta } from "quill";
import React from "react";

export type QDeltaContextValue = {
  delta: Delta | null;
  setDelta: (delta: Delta | null) => void;
};
export const QDeltaContext = React.createContext<QDeltaContextValue>({
  delta: null,
  setDelta: () => {
    throw new Error("setDelta function must be implemented.");
  },
});
