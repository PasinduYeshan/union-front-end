import React from "react";

const BranchSecretariesTable = React.lazy(() =>
  import("./BranchSecretariesTable")
);

export default function BranchSecretariesSection() {
  const midPoint = Math.floor(people.length / 2);
  return (
    <div className="py-10">
      <div className="w-full">
        <h1 className="xl:text-3xl text-2xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Branch Secretaries
        </h1>
      </div>
      <div className="container w-full grid lg:grid-cols-2 justify-center">
      <BranchSecretariesTable people={people.slice(0, midPoint)} />
      <BranchSecretariesTable people={people.slice(-midPoint)} />
    </div>

    </div>
    
  );
}

const people = [
  {
    name: "Bro. Keerthi Dissanayake",
    branch: "Anuradhapura",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. W.A.S.K. Gunarathne",
    branch: "Awissawella",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. S. Ratheeshwaran",
    branch: "Batticaloa",
    contactNo: "077-2345678",
  },
  {
    name: "Bro A.M.S.D. Seneviratne",
    branch: "Baddulla",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. K.M. Anura Jayalath",
    branch: "Colombo District ",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. T. Samitha Fernando ",
    branch: "Chilaw",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. A.M.J.K.B. Athauda",
    branch: "Central Mail Exchange",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. G.G.C. Niroshana",
    branch: "Galle ",
    contactNo: "077-2345678",
  },
  {
    name: "Bro.  Sudesh Kumara",
    branch: "Gampaha",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. J. P. Kodippiliarachchi",
    branch: "Colombo Headquarters",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. S.M.N. Samarakoon",
    branch: "Hatton",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. R.S. Jeevaraj",
    branch: "Jaffna ",
    contactNo: "077-2345678",
  },
  {
    name: "Bro . A.K. Athukorala",
    branch: "Kalutara",
    contactNo: "077-2345678",
  },
  {
    name: "Bro.  A.P.G.T.L. Wickramasinghe",
    branch: "Kandy ",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. H.A.A.Bandara",
    branch: "Kegalle",
    contactNo: "077-2345678",
  },
  {
    name: "Bro Malinda Wijesekara ",
    branch: "Kurunegala",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. B. Baheerathan",
    branch: "Kalminai",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. Suranga Gunasekara ",
    branch: "Matara",
    contactNo: "077-2345678",
  },
  {
    name: "Bro.  R.M.D.N.P. Mahanama",
    branch: "Matale",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. U.L.P. Sirisena",
    branch: "Nuwara Eliya",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. S.P.W. Karunarathne",
    branch: "Negambo",
    contactNo: "077-2345678",
  },
  {
    name: "Bro Asanka Karunaratne",
    branch: "Polonnaruwa",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. D.S. Hapuarachchi",
    branch: "Ratnapura",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. S. Prashanthan",
    branch: "Trincomalee ",
    contactNo: "077-2345678",
  },
  {
    name: "Bro. B. Ragulan",
    branch: "Vavuniya",
    contactNo: "077-2345678",
  },
];
