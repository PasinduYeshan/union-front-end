import React from "react";

const OtherMembersTable = React.lazy(() => import("./OtherMembersTable"));

const OtherMembersSection = () => {
  const midPoint = Math.floor(otherMembers.length / 2);
  return (
    <>
      <h1 className="xl:text-3xl text-2xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
        Executive Committee Members
      </h1>
      <div className="container w-full grid grid-cols-1 lg:grid-cols-2 justify-center">
        <OtherMembersTable people={otherMembers.slice(0, midPoint)} />
        <OtherMembersTable people={otherMembers.slice(-midPoint)} />
      </div>
    </>
  );
};

export default OtherMembersSection;

const otherMembers = [
  {
    name: "Bro.  Shantha Kumara Meegama",
    position: "Hony President",
  },
  {
    name: "Bro.  J. Abeywickrama ",
    position: "Hony. Vice President ",
  },
  {
    name: "Bro.  W. R. Gunaratne",
    position: "Hony. Vice President ",
  },
  {
    name: "Bro.  CP. Etimoratenna",
    position: "Hony. General Secretary",
  },
  {
    name: "Bro.  G.G. Sudath Wickramaratne",
    position: "Hony. Depty. Gen.Secretary",
  },
  {
    name: "Bro.  Harindra Weliwita",
    position: "Hony. Treasurer",
  },
  {
    name: "Bro. . P.H.B. Tilakasiri",
    position: "Hony. Assistant Treasurer",
  },
  {
    name: "Bro. Gayan Kavinda Fernando ",
    position: "Editor",
  },
  {
    name: "Sis. Aruni E. Jayaweera",
    position: "Assistant Editor (Sinhala)",
  },
  {
    name: "Bro.  Kuganeshan Nithershan",
    position: "Assistant Editor (Tamail)",
  },
  {
    name: "- -",
    position: "Assistant Editor (English)",
  },
  {
    name: "Sis. . W. Nandamalee Artigala",
    position: "Hony. Vice President (Female)",
  },
  {
    name: "Sis.  S.M.K.D. Jayamalee",
    position: "Assistant Secretary (Female) ",
  },
  {
    name: "Sis G.Sudarshi Somawardena",
    position: "Assistant Secretary (Female) ",
  },
  {
    name: "Bro. A.W.M. Upatissa Wijekoon",
    position: "Assistant Secretary ",
  },
  {
    name: " - - ",
    position: "Assistant Secretary ",
  },
  {
    name: "Bro.  Y.M.M.D.W.T. Yatawara",
    position: "Assistant Secretary ",
  },
  {
    name: "Bro.  J.M.P. Weerasuriya",
    position: "Assistant Secretary ",
  },
  {
    name: "Sis  P. Upeksha Sewwandi Perera",
    position: "Hony. Assit. Treasurer (Fem)",
  },
  {
    name: "Bro. M.J.C. Gamage ",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. Anuradha Fernando ",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro.Manjula Jayasundara",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. Kapila Karunaratne",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. A.G. Saman Mahinda",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. T.G. Sobaratne",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. R.R.M. Nayanapriya",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. Maheeshan Dasanayake",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. B.P.Vijitha ",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Bro. K.M.W.B. Barammane",
    position: "Ex. Com. Memb.",
  },
  {
    name: "Sis. Ruwini Dharmaratne",
    position: "Executive Com. Mem. (Fem)",
  },
  {
    name: "Sis. T. Mangala Galappattil",
    position: "Executive Com. Mem. (Fem)",
  },
  {
    name: "Sis. R. M. Dilni Ratnayake",
    position: "Executive Com. Mem. (Fem)",
  },
  {
    name: "Sis Prabhashi Wickramanayake",
    position: "Executive Com. Mem. (Fem)",
  },
];
