const url = 'https://auctionable-change-api.herokuapp.com/items'

export const fetchItems = async () => {
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(error);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    return false
  }
}

let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djk5anakm/upload';


export const cloudinaryPost = (pickerResult) => {
  console.log('pickerResult', pickerResult)
  let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

  let data = {
    "file": base64Img,
    "upload_preset": "oclsdjxp",
  }

  fetch(CLOUDINARY_URL, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  }).then(async r => {
    let data = await r.json()
    console.log('from apicalls', data)
    return data.url;
  }).catch(err => console.log(err))
}

