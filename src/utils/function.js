// Get image from bucket given the image identifier
export function getImageFromBucket(imageName) {
  //   return `https://s3.ap-south-1.amazonaws.com/up-to-now-images/${imageName}.${imageType}`;
  return imageName;
}

// Add data to formData
export function addDataToFormData(formData, data) {
  for (let key in data) {
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
