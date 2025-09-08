import React from "react";

const AdminTable = ({ columns, data, rows = 10 }) => {
  return (
    <div className="overflow-x-auto rounded-md shadow-md">
      <table className="w-full border border-gray-300  text-sm text-left">
        <thead>
          <tr className="bg-blue-950 text-white text-center ">
            <th className="px-4 py-2 border border-gray-300">SL No</th>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 border border-gray-300">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const row = data[rowIndex];
            return (
              <tr key={rowIndex} className="border-t">
                <td className="px-4 py-2 w-20 font-semibold text-center border border-gray-300">
                  {rowIndex + 1}.
                </td>

                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border font-semibold border-gray-300"
                  >
                    {
                      row
                        ? col.render
                          ? col.render(row)
                          : row[col.accessor]
                        : "" 
                    }
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
