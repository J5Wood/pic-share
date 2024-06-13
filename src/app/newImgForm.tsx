// "use client";
import { useState } from "react";
import AddImage from "./actions/addImage";
import { useRouter } from "next/navigation";

interface NewImgFormProps {
  displayForm: (
    value: boolean | boolean | ((prevState: boolean) => boolean)
  ) => void;
}

export default function NewImgForm({ displayForm }: NewImgFormProps) {
  const [content, setContent] = useState("");
  const router = useRouter();

  function clearFileInput() {
    const fileInput = document.querySelector("#file") as HTMLInputElement;
    fileInput.value = "";
  }

  async function handleSubmit(data: FormData) {
    const submitButton = document.querySelector(
      ".submit-button"
    ) as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
    }
    await AddImage(data);
    displayForm(false);
    submitButton.disabled = false;
    router.refresh();
    setContent("");
    clearFileInput();
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="file">Add Image</label>
      <input type="file" id="file" name="file" accept="image/png, image/jpeg" />
      <label htmlFor="text-content">Description</label>
      <input
        onChange={(e) => setContent(e.target.value)}
        type="text"
        id="text-content"
        className="text-content"
        name="text-content"
        value={content}
      />
      <input className="submit-button" type="submit"></input>
    </form>
  );
}
