export default function Comment({ commentData }) {
  return (
    <div className="comment">
      <h4>@{commentData.username}</h4>
      <p>{commentData.content}</p>
    </div>
  );
}
