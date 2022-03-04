import React from "react";

const BranchSecratariesTable = ({ people }) => {
  return (
    <>
      <div className="px-10 overflow-auto pt-0">
        <div className="-my-2 sm:-mx-8 lg:-mx-10">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Branch
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          {/* <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="images/avatar.png"
                            alt=""
                          />
                        </div> */}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                            {person.email}
                          </div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.branch}
                        </div>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.contactNo}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchSecratariesTable;
