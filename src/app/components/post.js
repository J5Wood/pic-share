import Image from "next/image";

export default function Post({ postData }) {
  function renderHeart() {
    if (postData.postLiked) {
      return <span>♥︎</span>;
    }
    return <span>♡</span>;
  }
  return (
    <>
      <Image
        src={postData.url}
        width={250}
        height={250}
        alt="WHERE'S MY ALT TEXT?!?!"
      />
      <div>
        <h4>@{postData.username}: </h4>
        <p>{postData.content}</p>
      </div>
      {renderHeart()}
    </>
  );
}
