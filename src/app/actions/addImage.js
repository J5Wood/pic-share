"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
const url = "https://api.cloudinary.com/v1_1/dqzg3fumi/image/upload";

export default async function addImage(formData) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    console.error("No Session, Must be logged in to add a photo");
    return;
  }

  const textContent = formData.get("text-content");
  const userId = session.user.id;
  const username = session.user.user_metadata.username;

  formData.append("cloud_name", "dqzg3fumi");
  formData.append("upload_preset", "test_preset");

  const configObj = {
    method: "post",
    body: formData,
  };

  try {
    const imageRes = await fetch(url, configObj);
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
  } catch (err) {
    console.log("Image creation error: ", err);
  }
}
