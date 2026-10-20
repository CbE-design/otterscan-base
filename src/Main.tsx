import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";
import Header from "./Header";
import ErrorFallback from "./components/ErrorFallback";

const Main: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div className="w-screen h-screen"></div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      </div>
    </>
  );
};

export default Main;
