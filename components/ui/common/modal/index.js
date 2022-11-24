export default function Modal({ isOpen, children }) {
  return (
    <section>
      {/* Remove hidden to display it */}
      <div
        className={`${!isOpen && "hidden"} fixed inset-0 z-10 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Adds Gray BG */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
          )}

          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {children}
        </div>
      </div>
    </section>
  );
}
