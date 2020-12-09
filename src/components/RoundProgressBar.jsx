export const RoundProgressBar = ({ progressValue, size = 28 }) => {
  const progressedLength = progressValue * 2.512;
  const remainingLength = 251.2 - progressedLength;
  return (
    <svg className="p-0.5" viewBox="0 0 100 100" width={size}>
      <circle cx="50" cy="50" r="41.5" fill="#E6E8EB" />
      <circle
        cx="50"
        cy="50"
        r="38.5"
        fill="currentColor"
        className="text-inverse"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeWidth="3"
        stroke="#F43168"
        strokeDasharray={`${progressedLength},${remainingLength}`}
        d="M50 10
             a 40 40 0 0 1 0 80
             a 40 40 0 0 1 0 -80"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,251.2"
          to={`${progressedLength},${remainingLength}`}
          dur="0.5s"
        />
      </path>
    </svg>
  );
};
