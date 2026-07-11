// const FilterGroup = ({ ratings, minRating, onRatingClick }) => {
//   return (
//     <ul className="movie_filter">
//       {ratings.map((rate) => (
//         <li
//           key={rate}
//           className={
//             minRating === rate
//               ? "movie_filter_item active"
//               : "movie_filter_item"
//           }
//           onClick={() => onRatingClick(rate)}
//         >
//           {rate}+ ⭐
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FilterGroup;



// import "./FilterGroup.css";

// const FilterGroup = ({
//   ratings,
//   minRating,
//   onRatingClick,
// }) => {
//   return (
//     <div className="filter_group">
//       {ratings.map((rate) => (
//         <button
//           key={rate}
//           className={
//             minRating === rate
//               ? "filter_btn active"
//               : "filter_btn"
//           }
//           onClick={() => onRatingClick(rate)}
//         >
//           {rate}+ ⭐
//         </button>
//       ))}
//     </div>
//   );
// };

// export default FilterGroup;




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