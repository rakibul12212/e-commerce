

import ProgressBar from "@/components/UI/progressBar/ProgressBar";

const Cdata = [
  { label: "Dhaka", value: 10000, color: "bg-sky-400" },
  { label: "Sylhet", value: 8000, color: "bg-rose-400" },
  { label: "Khulna", value: 6000, color: "bg-amber-300" },
  { label: "Barisal", value: 4000, color: "bg-violet-500" },
  { label: "Rajshahi", value: 2000, color: "bg-red-400" },
  { label: "Rangpur", value: 1000, color: "bg-emerald-600" },
  { label: "Chittagong", value: 500, color: "bg-pink-500" },
];

const CustomerLocation = () => {
  const max = Math.max(...Cdata.map((data) => data.value));

  return (
    <div className="w-full  rounded-md border border-gray-200 bg-gray-100 p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">
        Customers Locations
      </h2>

      <div className="mt-4 space-y-4">
        {Cdata.map((item) => {
          const progress = Math.round((item.value / max) * 100);

          return (
            <div
              key={item.label}
              className="grid grid-cols-3 items-center gap-x-1 text-sm"
            >
              <div className=" text-gray-700 font-semibold">{item.label}</div>

              <ProgressBar progress={progress} color={item.color} />

              <div className="text-right font-semibold text-gray-700">
                {item.value.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerLocation;
