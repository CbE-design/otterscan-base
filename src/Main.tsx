import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";
import Header from "./Header";
import ErrorFallback from "./components/ErrorFallback";

const Main: React.FC = () => {
  return (
    <>
      <div className="explorer-app min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="explorer-content">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center text-sm text-slate-400">Loading Base Mainnet data…</div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </>
  );
};

export default Main;
