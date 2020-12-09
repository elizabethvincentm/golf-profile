export const Card = ({ children }) => {
  return (
    <div className="bg-primary w-card max-h-card border border-primary rounded-lg shadow-card py-4.5 divide-y divide-primary divide-solid">
      {children}
    </div>
  );
};
