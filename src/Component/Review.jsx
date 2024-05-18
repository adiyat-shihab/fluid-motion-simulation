const Review = ({ icon }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt="company" />
      <div>
        <img src="rating.png" alt="rating" />
        <p className="text-[14px] leading-7">4.5 Score, 9 Reviews</p>
      </div>
    </div>
  );
};

export default Review;
