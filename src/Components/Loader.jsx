const Loader = ({ loading }) => {
  return (
    <div
      className={`h-full w-full flex items-center justify-center pointer-events-none z-[999] fixed bg-[#000] text-white transition-transform duration-1000 ${
        loading ? "opacity-1" : "opacity-0"
      } top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
