export default function Breadcrumbs() {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-9 mt-2 px-4 pb-4 sm:px-6 lg:px-8"
    >
      <ol className="flex divide-x divide-gray-400 font-medium leading-none text-gray-500 hover:text-gray-900">
        <li className="pr-4">
          <a href="#">Buy</a>
        </li>
        <li className="px-4">
          <a href="#">My Courses</a>
        </li>
        <li className="px-4">
          <a href="#">Manage Courses</a>
        </li>
      </ol>
    </nav>
  );
}
