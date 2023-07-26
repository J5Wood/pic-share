"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
const url = "https://api.cloudinary.com/v1_1/dqzg3fumi/image/upload";

export async function addItem(formData) {
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

  formData.append("cloud_name", "dqzg3fumi");
  formData.append("upload_preset", "test_preset");

  const configObj = {
    method: "post",
    body: formData,
  };

  const imageRes = await fetch(url, configObj);
  const imageResData = await imageRes.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        content: textContent,
        likes: 0,
        user_id: userId,
        url: imageResData.secure_url,
      },
    ])
    .select();

  // console.log(data);
  // ! Refresh page with new image
}
