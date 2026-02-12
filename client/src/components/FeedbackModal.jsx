import { useState } from "react";
import api from "../configs/api";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { XIcon } from "lucide-react";
import { updateUser } from "../app/features/authSlice";

const FeedbackModal = ({ onClose }) => {
  const { token } = useSelector((state) => state.auth);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitFeedback = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Please enter feedback");
      return;
    }

    setLoading(true);
    try {
      await api.post(
        "/api/feedback",
        { message, rating },
        { headers: { Authorization: token } }
      );

      dispatch(updateUser({ hasGivenFeedback: true }));

      toast.success("Thank you for your feedback ❤️");
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
    >
      <form
        onSubmit={submitFeedback}
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl w-full max-w-md relative"
      >
        <h2 className="text-xl font-bold mb-2">
          🎉 Congrats on your first resume!
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          We'd love to hear your feedback.
        </p>

        <textarea
          className="w-full border rounded-md p-2 mb-3"
          rows="4"
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <select
          className="w-full border rounded-md p-2 mb-4"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[5,4,3,2,1].map(num => (
            <option key={num} value={num}>
              {num} Star
            </option>
          ))}
        </select>

        <button
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>

        <XIcon
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-slate-400"
        />
      </form>
    </div>
  );
};

export default FeedbackModal;
