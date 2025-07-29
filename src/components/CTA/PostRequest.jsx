import { FaClipboardList } from "react-icons/fa";
import "./CTA.css";

const PostRequest = () => {
  return (
    <div className="cta-card">
      <div className="cta-icon">
        <FaClipboardList />
      </div>
      <h4>Post a Property Request</h4>
      <p>
        Can’t find what you’re looking for? Let agents know what you need.
      </p>
      <button className="cta-btn">Post Request</button>
    </div>
  );
};

export default PostRequest;
