import * as layout from "../App.css.ts";
import { useQDelta } from "../hooks/useQDelta.ts";
import * as stylesCommon from "../style/index.ts";
import QEditor from "./QEditor.tsx";
import * as styles from "./RendererContainer.css.ts";

export function RendererContainer() {
  const { delta } = useQDelta();

  return (
    <section className={layout.mainPanel}>
      {delta != undefined && delta.ops.length > 0 ? (
        <>
          <QEditor
            readOnly={true}
            defaultValue={delta}
            showToolbar={false}
            extraCSS={{
              qEditorBorderRadiusVar: "8px",
              qlEditorBorderRadiusVar: "8px",
            }}
          />
          <div className={stylesCommon.container.card}>
            <div>Raw Delta.ops value:</div>
            <div className={styles.rawDeltaOps}>
              {JSON.stringify(delta?.ops, null, 2)}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.emptyRendererPanel}>
          <p>[rendered output goes here]</p>
        </div>
      )}
    </section>
  );
}
