import Image from "next/image";

export default function PostImage({ postData }) {
  const postDate = postData["inserted_at"];
  const correctedDate = postDate.slice(5, 10) + "-" + postDate.slice(0, 4);

  return (
    <>
      <Image
        src={postData.url}
        width={250}
        height={250}
        alt={`Photo by ${postData.username} on ${correctedDate}`}
        role="post-image"
      />
    </>
  );
}
