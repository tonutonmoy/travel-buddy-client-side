const DashboardHomePage = () => {
  return (
    <div className="h-full homeThumbnail-bg-img relative">
      <div className="bg-black h-full w-full absolute opacity-30"></div>
      <div className="relative z-10 text-center  py-40 ">
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight mb-4 text-white">
          Welcome to dashboard
        </h1>

        <br />
        <span className="text-gray-50 text-2xl font-semibold">
          Please choose your preferable route
        </span>
      </div>
    </div>
  );
};

export default DashboardHomePage;
