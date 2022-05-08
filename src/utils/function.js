import { saveAs } from "file-saver";

// Get image from bucket given the image identifier
export function getImageFromBucket(imageName) {
  //   return `https://s3.ap-south-1.amazonaws.com/up-to-now-images/${imageName}.${imageType}`;
  return imageName;
}

// Add data to formData
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

// Add data to formData
export function printFormData(formData, data) {
  for (let key in data) {
    console.log(key, formData.get(key));
  }
}

// Save image to local storage
export function saveImg(urlArr) {
  (async () => {
    for (let i = 0; i < urlArr.length; i++) {
      const response = await fetch(urlArr[i]);
      console.log(response);
      const blob = await response.blob();
      saveAs(blob);
    }
  })();
}

// Delete keys from object where value is emplty
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

// Convert date into lk region
export function convertTZ(date) {
  let dateObj = new Date(date);
  let dateStr = dateObj.toLocaleDateString("en-US", { timeZone: "Asia/Colombo" });
  return dateStr;
}
