export default function Button({
  children,
  className,
  hoverable = true,
  variant = "purple",
  ...rest
}) {
  const variants = {
    purple: `bg-indigo-600 text-white ${hoverable && "hover:bg-indigo-700"}`,
    red: `bg-red-600 text-white ${hoverable && "hover:bg-red-700"}`,
    lightPurple: `bg-indigo-100 text-indigo-700 ${
      hoverable && "hover:bg-indigo-200"
    }`,
  };
  return (
    <button
      {...rest}
      className={`rounded-md px-8 py-3 text-base font-medium hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
