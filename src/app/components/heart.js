export default function Heart({ postLiked }) {
  function renderHeart() {
    if (postLiked) {
      return "♥︎";
    }
    return "♡";
  }

  return <span>{renderHeart()}</span>;
}
