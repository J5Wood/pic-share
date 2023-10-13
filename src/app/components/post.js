import Image from "next/image";
// import Heart from "./heart.js";

export default function Post({ postData }) {
  const postDate = postData["inserted_at"];
  const correctedDate = postDate.slice(5, 10) + "-" + postDate.slice(0, 4);

  // function renderHeart() {
  //   if (postData.postLiked) {
  //     return <span>♥︎</span>;
  //   }
  //   return <span>♡</span>;
  // }
  // const liked = postData.likes && postData.likes.length > 0 ? true : false;
  // function renderHeart() {
  //   if (postData.likes && postData.likes.length > 0) {
  //     return <Heart postLiked={true} />;
  //   }
  // }

  return (
    <>
      <Image
        src={postData.url}
        width={250}
        height={250}
        alt={`Photo by ${postData.username} on ${correctedDate}`}
      />
      <div>
        <h4>@{postData.username}: </h4>
        <p>{postData.content}</p>
      </div>
      {/* <Heart postLiked={postData.} /> */}
      {/* <Heart postLiked={liked} /> */}
    </>
  );
}
