import { setBranchNames } from "./index.js";

export default class MetaThunk {
  static setBranchNames = () => (dispatch) => {
    dispatch(setBranchNames(branchNames));
  };
}

const branchNames = [
  {
    name: "Anuradhapura",
  },
  {
    name: "Awissawella",
  },
  {
    name: "Batticaloa",
  },
  {
    name: "Baddulla",
  },
  {
    name: "Colombo District",
  },
  {
    name: "Chilaw",
  },
  {
    name: "Central Mail Exchange",
  },
  {
    name: "Galle",
  },
  {
    name: "Gampaha",
  },
  {
    name: "Colombo Headquarters",
  },
  {
    name: "Hatton",
  },
  {
    name: "Jaffna",
  },
  {
    name: "Kalutara",
  },
  {
    name: "Kandy",
  },
  {
    name: "Kegalle",
  },
  {
    name: "Kurunegala",
  },
  {
    name: "Kalminai",
  },
  {
    name: "Matara",
  },
  {
    name: "Matale",
  },
  {
    name: "Nuwara Eliya",
  },
  {
    name: "Negambo",
  },
  {
    name: "Polonnaruwa",
  },
  {
    name: "Ratnapura",
  },
  {
    name: "Trincomalee",
  },
  {
    name: "Vavuniya",
  },
];
