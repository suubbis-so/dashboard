import React, { useState } from "react";
import UserThumb from "../assets/user.png";
import Content from "../assets/Content.png";

const DataTable = () => {
  const allTableData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    author: `Jane Doe ${index + 1}`,
    role: "Senior Designer",
    cellData: ["Cell Text", "Cell Text", "Cell Text", "Cell Text"],
    badge: "Badge",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [selectedRows, setSelectedRows] = useState([]);
  const totalPages = Math.ceil(allTableData.length / rowsPerPage);

  const currentTableData = allTableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(currentTableData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-100 w-full">
      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-800">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length === currentTableData.length
                  }
                />
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Author
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Title
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Title
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Title
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Title
              </th>
              <th className="px-6 py-3">Title</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <img src={UserThumb} alt="User" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{row.author}</p>
                    <p className="text-sm text-gray-500">{row.role}</p>
                  </div>
                </td>
                {row.cellData.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 text-gray-600">
                    {cell}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                    {row.badge}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                <img src={Content} alt="User" className="w-6 h-6" />

                  {/* <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 text-sm text-gray-500">
        <span>
          Showing {currentTableData.length} of {allTableData.length} entries
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-400"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-400"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
