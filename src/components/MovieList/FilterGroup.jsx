const FilterGroup = ({
  ratings,
  minRating,
  onRatingClick,
}) => {
  return (
    <div className="filter_group">
      {ratings.map((rate) => (
        <button
          key={rate}
          className={
            minRating === rate
              ? "filter_btn active"
              : "filter_btn"
          }
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ ⭐
        </button>
      ))}
    </div>
  );
};

export default FilterGroup;
