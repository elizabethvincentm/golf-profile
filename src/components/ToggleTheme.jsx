export const ToggleTheme = ({ currentTheme, onClick }) => {
  return (
    <div className="flex items-center py-3">
      <span
        className={`text-sm text-black px-1 ${
          currentTheme === "theme-light" ? "font-medium" : "opacity-60"
        }`}
      >
        Light
      </span>
      <button
        type="button"
        onClick={onClick}
        className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
      >
        <span className="sr-only">Use setting</span>
        <span className="bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
        <span
          className={`${
            currentTheme === "theme-light" ? "translate-x-0" : "translate-x-5"
          } absolute left-0 inline-block h-5 w-5  border border-pink-600 rounded-full bg-white shadow transform transition-transform ease-in-out duration-200`}
        ></span>
      </button>
      <span
        className={`text-sm text-black px-1 ${
          currentTheme === "theme-dark" ? "font-medium" : "opacity-60"
        }`}
      >
        Dark
      </span>
    </div>
  );
};
