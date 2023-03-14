import BrandsInFocus from "./BrandsInFocus";
import Carousel from "./Carousel";

function Home() {
  return (
    <section className=" bg-blackBlueLighter">
      <div className="container text-gray-100 mx-auto grid py-6 grid-cols-5 gap-4">
        <div className="col-span-1">
          <BrandsInFocus />
        </div>
        <div className="col-span-4 ml-6">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Home;
