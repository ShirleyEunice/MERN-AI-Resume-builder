import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import { BookUserIcon, Loader } from "lucide-react";
import api from "../../configs/api";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      const res = await api.get("/api/feedback");
      setFeedbacks(res.data.feedbacks);
      setLoading(false);
    };

    fetchFeedback();
  }, []);

  const avatarColors = [
    "FF5733", // red-orange
    "33C1FF", // blue
    "8E44AD", // purple
    "27AE60", // green
    "F39C12", // orange
  ];

  const CreateCard = ({ card, index }) => {
    const bgColor = avatarColors[index % avatarColors.length];
    const displayName = card?.user?.name || "Anonymous";

    return (
      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition w-72 shrink-0">
        {loading ? (
          <Loader className=" animate-spin" />
        ) : (
          <>
            {/* Top Row */}
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={`https://ui-avatars.com/api/?name=${displayName}&background=${bgColor}&color=fff`}
                alt="User"
              />

              <div>
                <p className="font-semibold text-gray-800">{displayName}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(card.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-sm">
                  ★
                </span>
              ))}
              {[...Array(5 - card.rating)].map((_, i) => (
                <span key={i} className="text-gray-300 text-sm">
                  ★
                </span>
              ))}
            </div>

            {/* Message */}
            <p className="text-sm text-gray-700 mt-3 leading-relaxed">
              {card.message}
            </p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      <div id="testimonials" className="flex flex-col items-center my-10">
        <div className="flex items-center gap-2 text-sm text-purple-800 bg-purple-500/10 rounded-full px-6 py-1.5">
          <BookUserIcon className="size-4.5 stroke-purple-600" />
          <span>Testimonials</span>
        </div>

        <Title
          title="Don't just take our words"
          description="Hear what our users say about us."
        />

        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 gap-5">
            {[...feedbacks, ...feedbacks].map((card, index) => (
              <CreateCard key={index} card={card} index={index} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
