import React, { useContext } from "react";
import { RuntimeContext } from "./useRuntime";

const Footer: React.FC = () => {
  const { provider, config } = useContext(RuntimeContext);

  return (
    <>
      <div
        className="w-full border-t border-t-slate-200 bg-slate-50 px-2 py-2 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
      >
        Base Mainnet · RPC endpoint {config.erigonURL}
      </div>
    </>
  );
};

export default React.memo(Footer);
