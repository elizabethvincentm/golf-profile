export const SkeletonLoader = ({ className, isCircle }) => {
  return (
    <div
      className={`${className} pulse bg-black-10 ${
        isCircle ? "rounded-full" : ""
      }`}
    ></div>
  );
};
