export default function Comment({ commentData }) {
  return (
    <div className="comment">
      <h6>{commentData.username}</h6>
      <p>{commentData.content}</p>
    </div>
  );
}
