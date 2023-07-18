"use server";
const url = "https://api.cloudinary.com/v1_1/dqzg3fumi/image/upload";

export async function addItem(formData) {
  const newImg = formData.get("newImage");

  formData.append("file", newImg);
  formData.append("cloud_name", "dqzg3fumi");
  formData.append("upload_preset", "test_preset");

  const configObj = {
    method: "post",
    body: formData,
  };

  const res = await fetch(url, configObj);
  const data = await res.json();
  console.log("Response: ", data);
  //   If good response, add url to db

  // otherwise handle error
}
