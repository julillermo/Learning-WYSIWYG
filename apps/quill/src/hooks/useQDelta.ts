import { useContext } from "react";
import { QDeltaContext, type QDeltaContextValue } from "../contexts/QDelta";

export function useQDelta(): QDeltaContextValue {
  const { delta, setDelta } = useContext(QDeltaContext);
  return { delta, setDelta };
}
