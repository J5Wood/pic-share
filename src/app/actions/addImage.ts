"use server";
import ServerClient from "./serverClient";
const url = process.env.CLOUDINARY_URL;

interface configObjInterface {
  method: string;
  body: FormData;
}

export default async function AddImage(formData: FormData) {
  const { supabase, session } = await ServerClient();

  if (!session) {
    console.error("No Session, Must be logged in to add a photo");
    return;
  }

  const textContent = formData.get("text-content");
  const userId = session.user.id;
  const username = session.user.user_metadata.username;

  formData.append("cloud_name", "dqzg3fumi");
  formData.append("upload_preset", "test_preset");

  const configObj: configObjInterface = {
    method: "post",
    body: formData,
  };

  try {
    if (url) {
      const imageRes = await fetch(
        url,
        configObj as unknown as HTMLFormElement
      );
      const imageResData = await imageRes.json();

      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            content: textContent,
            user_id: userId,
            username: username,
            url: imageResData.secure_url,
          },
        ])
        .select();
      if (error) throw error;
      return data;
    } else {
      throw Error("Missing Cloudinary API URL");
    }
  } catch (err) {
    console.log("Image creation error: ", err);
  }
}
