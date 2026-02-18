import { type ReactNode } from "react";
import { QDeltaContext, type QDeltaContextValue } from "../contexts/QDelta";

type QDeltaProviderProps = QDeltaContextValue & { children: ReactNode };

export function QDeltaProvider({
  delta,
  setDelta,
  children,
}: QDeltaProviderProps): ReactNode {
  return (
    <QDeltaContext.Provider
      value={{
        delta,
        setDelta,
      }}
    >
      {children}
    </QDeltaContext.Provider>
  );
}
