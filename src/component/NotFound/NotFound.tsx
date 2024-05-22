import Link from "next/link";

const NotFound = ({ title, semiTitle, paragraph, button }: any) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {title}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {semiTitle}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {paragraph}
          </p>
          {button && (
            <Link
              href="/"
              className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
            >
              Back to Homepage
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotFound;
