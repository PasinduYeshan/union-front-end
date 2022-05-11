import { saveAs } from "file-saver";

// Get image from bucket given the image identifier
export function getImageFromBucket(imageName) {
  //   return `https://s3.ap-south-1.amazonaws.com/up-to-now-images/${imageName}.${imageType}`;
  return imageName;
}

/**
 * Add given data object to FormData type object
 * @param {*} formData : FormData
 * @param {*} data : {key: value}
 * @returns FormData object
 */
export function addDataToFormData(formData, data) {
  for (let key in data) {
    if (key === "images") {
      for (let i = 0; i < data[key].length; i++) {
        formData.append(key, data[key][i]);
      }
      continue;
    }
    formData.set(key, data[key]);
  }
  return formData;
}

/**
 * Print FormData object to console
 * @param {*} formData
 * @param {*} data
 */
export function printFormData(formData, data) {
  for (let key in data) {
    console.log(key, formData.get(key));
  }
}

/**
 * Save given image to the local
 * @param {*} urlArr : URL String Array
 */
export function saveImg(urlArr) {
  (async () => {
    for (let i = 0; i < urlArr.length; i++) {
      const response = await fetch(urlArr[i]);
      const blob = await response.blob();
      saveAs(blob);
    }
  })();
}

/**
 * Delete all the empty keys from the given object
 * @param {*} obj : {key: value}
 * @returns
 */
export function deleteEmptyKeys(obj) {
  for (let key in obj) {
    if (obj[key] === "") {
      delete obj[key];
    } else if (obj[key] === "Open this select menu") {
      delete obj[key];
    }
  }
  return obj;
}

/**
 * Convert given Date object to Sri Lanka date format string (dd/mm/yyyy)
 * @param {*} date
 * @returns
 */
export function convertTZ(date) {
  let dateObj = new Date(date);
  let dateStr = dateObj.toLocaleDateString("en-US", {
    timeZone: "Asia/Colombo",
  });
  return dateStr;
}

/**
 * Add empty strings to the given object keys if it is not present, null or undefined
 * @param {{key: value}} obj
 * @param {[key1, key2, key3]} keys
 * @returns {{key: value}} obj
 */
export function addEmptyStrings(obj, keys = null) {
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      if (!obj[keys[i]]) {
        obj[keys[i]] = "";
      } else if (obj[keys[i]] === null) {
        obj[keys[i]] = "";
      } else if (obj[keys[i]] === undefined) {
        obj[keys[i]] = "";
      } else if (obj[keys[i]] === "Open this select menu") {
        obj[keys[i]] = "";
      }
    }
  } else {
    for (let key in obj) {
      if (obj[key] === null) {
        obj[key] = "";
      } else if (obj[key] === undefined) {
        obj[key] = "";
      } else if (obj[key] === "Open this select menu") {
        obj[key] = "";
      }
    }
  }
  return obj;
}

export function getUpdatedDataOnly(original, updated) {
  let updatedData = {};
  for (let key in original) {
    if (original[key] != updated[key]) {
      console.log(key, original[key], updated[key]);
      updatedData[key] = updated[key];
    }
  }
  return updatedData;
}
