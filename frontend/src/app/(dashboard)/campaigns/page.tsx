"use client";

import { BellIcon, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

type options = "All Campaigns" | "Ongoing Campaigns";

const CampaignsPage = () => {

  const [selectedOption, setSelectedOption] = useState<options>("All Campaigns");

  return (
    <div className="campaignsPage flex flex-col justify-start items-start p-4 sm:p-6 md:p-8 lg:p-10 ">
      {/* <CustomTable columnHeaders={["Hi", "Bye"]} data={["hi", "bye"]} /> */}
      <div className="topLayer flex w-[76vw] xl:w-[90vw] justify-between items-center">
            <h3 className="text-2xl text-gray-600 font-semibold">Campaigns</h3>
    
            <div className="flex items-center space-x-4">
              <SearchIcon className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
              <BellIcon className="w-5 h-5 text-gray-700 hover:text-black cursor-pointer" />
              <div className="w-9 h-9 rounded-full bg-gray-300"></div>
              <p className="text-gray-600 font-medium">Armaan</p>
            </div>
          </div>


        <div className="selection p-4 flex flex-row justify-center items-center">
          <input type="button" value="All Campaigns" className={`bg-white/40 w-[12rem] h-[3rem] backdrop-blur-md backdrop-brightness-105 text-gray-700 font-medium px-4 py-2 rounded-l-lg hover:cursor-pointer hover:bg-white hover:text-black transition-all ${selectedOption === "All Campaigns" ? 'border-b-2 border-b-blue-500': ''}`} onClick={() => {
            setSelectedOption("All Campaigns");
          }}/>
          <input type="button" value="Ongoing Campaigns" className={`bg-white/40 w-[12rem] h-[3rem] backdrop-blur-md backdrop-brightness-105 text-gray-700 font-medium px-4 py-2 rounded-r-lg hover:cursor-pointer hover:bg-white hover:text-black transition-all ${selectedOption === "Ongoing Campaigns" ? 'border-b-2 border-b-blue-500': ''}`} onClick={() => {
            setSelectedOption("Ongoing Campaigns");
          }}   />
        </div>

        {/* WE WILL SHOW CAMPAIGNS HERE */}

        <div className="campaignsContainer w-full flex flex-col justify-start items-start space-y-4 mt-4">
              {/* uhh guess we need a list maybe */}
              {(() => {
                const rows = [
                  { id: 1, name: "Summer Launch", start: "2025-06-01", end: "2025-07-15", budget: "$12,000", status: "Ongoing" },
                  { id: 2, name: "Holiday Promo", start: "2025-11-10", end: "2025-12-31", budget: "$25,000", status: "Planned" },
                  { id: 3, name: "Referral Drive", start: "2025-04-01", end: "2025-05-01", budget: "$4,200", status: "Completed" },
                  { id: 4, name: "Beta Test", start: "2025-02-14", end: "2025-03-01", budget: "$1,500", status: "Completed" },
                ];

                const statusClasses = (s: string) =>
                  s === "Ongoing" ? "bg-green-100 text-green-800" : s === "Planned" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800";

                return (
                  <div className="w-full bg-white/60 backdrop-blur-sm rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-700">Campaigns List</h4>
                      <p className="text-sm text-gray-500">Showing {rows.length} campaigns</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Start</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">End</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-100">
                          {rows.map((r) => (
                            <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 align-middle">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
                                    {r.name.split(" ").slice(0,2).map(w=>w[0]).join("")}
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-700">{r.name}</div>
                                    <div className="text-xs text-gray-400 hidden sm:block">{r.id} • Campaign ID</div>
                                  </div>
                                </div>
                              </td>

                              <td className="px-4 py-3 align-middle text-sm text-gray-600 hidden sm:table-cell">{r.start}</td>
                              <td className="px-4 py-3 align-middle text-sm text-gray-600 hidden sm:table-cell">{r.end}</td>

                              <td className="px-4 py-3 align-middle text-sm text-gray-700">{r.budget}</td>

                              <td className="px-4 py-3 align-middle">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusClasses(r.status)}`}>
                                  {r.status}
                                </span>
                              </td>

                              <td className="px-4 py-3 align-middle text-right space-x-2">
                                <button
                                  onClick={() => alert(`Edit ${r.name}`)}
                                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                                  aria-label={`Edit ${r.name}`}
                                >
                                  Edit
                                </button>

                                <details className="relative inline-block">
                                  <summary className="list-none w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
                                    <span className="text-lg text-gray-500">⋯</span>
                                  </summary>

                                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-20">
                                    <ul className="flex flex-col py-1">
                                      <li>
                                        <button
                                          onClick={() => alert(`View ${r.name}`)}
                                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                          View
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          onClick={() => alert(`Duplicate ${r.name}`)}
                                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                          Duplicate
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          onClick={() => {
                                            if (confirm(`Delete ${r.name}? This action cannot be undone.`)) {
                                              alert(`${r.name} deleted (demo)`);
                                            }
                                          }}
                                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                        >
                                          Delete
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </details>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })()}
          </div>

     </div>
  )
}

export default CampaignsPage