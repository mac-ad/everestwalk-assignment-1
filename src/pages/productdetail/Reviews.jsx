import { Rating } from "@mui/material";

const reviews = [
  {
    profile: {
      img: "/images/person.jpeg",
      name: "Mark Williams",
    },
    rating: 5,
    title: "Excellent product, I love it!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperferendis deserunt delectus incidunt architecto inventorcupiditate veritatis! Assumenda, amet.",
    reviewdBy: "Krist",
    date: "June 05, 2023",
  },
  {
    profile: {
      img: "/images/person.jpeg",
      name: "Sam Williams",
    },
    rating: 3,
    title: "Excellent product, I love it!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperferendis deserunt delectus incidunt architecto inventorcupiditate veritatis! Assumenda, amet.",
    reviewdBy: "Krist",
    date: "June 05, 2023",
  },
];

const Reviews = () => {
  return (
    <div className="  w-full">
      <h2 className="font-bold text-lg mb-5">Customer reviews</h2>
      <div className="flex flex-col gap-8">
        {reviews.map((review) => (
          <div key={review.name}>
            <div className="flex items-start gap-2">
              <img
                src={review.profile.img}
                className="w-[40px] h-[40px] object-cover rounded-full"
                alt=""
              />
              <div className="flex flex-col mt-[-3px]">
                <span>{review.profile.name}</span>
                <div>
                  <Rating
                    value={review.value || 4.5}
                    sx={{ fontSize: "1rem" }}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="text-sm mt-2">
              <h3 className="font-semibold">{review.title}</h3>
              <p>{review.description}</p>
              <p className="mt-3">
                <span>Review by</span> <strong>{review.reviewdBy}</strong>{" "}
                <span>posted on </span> <strong>{review.date}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
