import React from "react";

export default function BranchSecretariesSection() {
  return (
      <div className="flex flex-col w-screen p-10">
          <div className="w-full">
            <h1 className="xl:text-3xl text-2xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
             Branch Secretaries
            </h1>
          </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.membershipNo}>
                    <td className="px-8 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.branch}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.telephone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const people = [
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
  {
    name: "Jane Cooper",
    branch: "Awissawella",
    role: "Secretary",
    membershipNo: "jane.cooper@example.com",
    image:
      "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
    telephone: "0777453652",
  },
];
