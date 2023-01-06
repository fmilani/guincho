export default function DestinationLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="h-7 w-28 animate-pulse rounded-lg bg-slate-200"></div>
        <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
      </div>
      <div>
        <div className="bg-white drop-shadow-sm rounded-lg p-4 flex justify-between flex-wrap">
          <div className="flex flex-col gap-0.5">
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-7 w-28 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex flex-col gap-0.5 items-end">
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-7 w-28 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
        </div>
        <div className="w-full text-right text-xs italic mt-2 px-4">
          <div className="float-right h-4 w-40 animate-pulse rounded-lg bg-slate-200"></div>
        </div>
      </div>
      <div>
        <div className="bg-white drop-shadow-sm rounded-lg p-4 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-6 w-16 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="h-7 w-20 animate-pulse rounded-lg bg-slate-200"></div>
            <div className="h-7 w-20 animate-pulse rounded-lg bg-slate-200"></div>
          </div>
        </div>
        <div className="w-full text-right text-xs italic mt-2 px-4">
          <div className="float-right h-4 w-36 animate-pulse rounded-lg bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}
