import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://image.thanhnien.vn/1200x630/Uploaded/2022/cqjwqlqjd/2019_04_20/h_qlwx.jpg"
            alt=""
            className="w-full h-full rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: End game</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Drama
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
