import { faArrowRight, faChevronDown, faChartLine, faClock, faCode, faCubes, faExchangeAlt, faGasPump, faMagnifyingGlass, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, memo, useContext } from "react";
import { Link } from "react-router";
import { useGenericSearch } from "./search/search";
import { RuntimeContext } from "./useRuntime";
import { usePageTitle } from "./useTitle";

const stats = [
  { label: "Latest block", value: "28,491,204", meta: "2 sec ago", icon: faCubes, to: "/block/28491204" },
  { label: "Base gas price", value: "0.001 Gwei", meta: "Very low", icon: faGasPump, to: "/" },
  { label: "Transactions today", value: "3,842,119", meta: "+12.4% from yesterday", icon: faExchangeAlt, to: "/" },
  { label: "Network utilization", value: "38.6%", meta: "Healthy", icon: faChartLine, to: "/" },
];

const transactions = [
  ["0x8f3a...91c2", "0x4200...0006", "0.0184 ETH", "2 secs ago"],
  ["0x1b7e...a410", "0x2d57...d4e8", "0.0041 ETH", "5 secs ago"],
  ["0x65c2...77bd", "0x9ac1...28f1", "0.1200 ETH", "8 secs ago"],
  ["0x3d91...e624", "0x4200...0006", "0.0028 ETH", "11 secs ago"],
  ["0xa8ef...0b19", "0x7b4c...ac03", "0.6500 ETH", "14 secs ago"],
];

const Home: FC = () => {
  const { provider } = useContext(RuntimeContext);
  const [searchRef, handleChange, handleSubmit] = useGenericSearch();
  usePageTitle("Base Mainnet Explorer");

  return (
    <main className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="border-b border-slate-200 bg-[linear-gradient(120deg,#0d2d55_0%,#1459a8_58%,#2a7de1_100%)] text-white dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">Base Mainnet</p>
            <h1 className="font-title text-3xl font-bold tracking-tight sm:text-5xl">The Ethereum L2 explorer</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Search, verify, and understand everything happening on Base Mainnet.</p>
          </div>
          <form className="flex max-w-3xl rounded-lg bg-white p-1.5 shadow-2xl" onSubmit={handleSubmit} autoComplete="off" spellCheck={false}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-3 self-center text-slate-400" />
            <input ref={searchRef} onChange={handleChange} className="min-w-0 flex-1 border-0 px-3 py-3 text-sm text-slate-900 outline-hidden placeholder:text-slate-400" placeholder="Search by address, transaction hash, block number, or token" aria-label="Search Base Mainnet" />
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700" type="submit">Search</button>
          </form>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-blue-100">
            <span><span className="mr-2 inline-block size-2 rounded-full bg-emerald-300" />Base Mainnet is online</span>
            <span>Chain ID: 8453</span>
            <span>ETH price: $3,482.16</span>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Network statistics">
          {stats.map((stat) => (
            <Link key={stat.label} to={stat.to} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between"><span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{stat.label}</span><FontAwesomeIcon icon={stat.icon} className="text-blue-500" /></div>
              <div className="mt-4 text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.meta}</div>
            </Link>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800"><div><h2 className="font-title text-lg font-bold">Latest transactions</h2><p className="mt-1 text-xs text-slate-500">Live activity on Base Mainnet</p></div><Link to="/search" className="text-xs font-semibold text-blue-600 hover:text-blue-700">View all <FontAwesomeIcon icon={faArrowRight} /></Link></div>
            <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-950/60"><tr><th className="px-5 py-3 font-semibold">Transaction</th><th className="px-5 py-3 font-semibold">From / To</th><th className="px-5 py-3 font-semibold">Value</th><th className="px-5 py-3 font-semibold">Age</th></tr></thead><tbody>{transactions.map(([hash, to, value, age]) => <tr key={hash} className="border-t border-slate-100 dark:border-slate-800"><td className="px-5 py-3 font-mono text-xs text-blue-600">{hash}</td><td className="px-5 py-3 font-mono text-xs text-slate-500">{to}</td><td className="px-5 py-3 text-xs">{value}</td><td className="px-5 py-3 text-xs text-slate-500">{age}</td></tr>)}</tbody></table></div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center justify-between"><div><h2 className="font-title text-lg font-bold">Explore Base</h2><p className="mt-1 text-xs text-slate-500">Tools for builders and users</p></div><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /></div><div className="mt-5 flex flex-col gap-3">{[["Verified contracts", "/contracts/all", faCode], ["Token transfers", "/search", faExchangeAlt], ["Network activity", "/special/liveBlocks", faClock]].map(([label, to, icon]) => <Link key={label as string} to={to as string} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:hover:bg-blue-950/30"><span><FontAwesomeIcon icon={icon as any} className="mr-3 text-blue-500" />{label as string}</span><FontAwesomeIcon icon={faChevronDown} className="-rotate-90 text-xs text-slate-400" /></Link>)}</div></div>
        </section>
        <p className="text-center text-xs text-slate-500">Connected to Base Mainnet · Provider chain {provider._network.chainId.toString()}</p>
      </div>
    </main>
  );
};

export default memo(Home);
