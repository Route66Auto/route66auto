import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Headers from "../components/Headers";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeaturedProducts from "../components/products/FeaturedProducts";
import Products from "../components/products/Products";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import { get_category, get_products } from "../store/reducers/homeReducer";
const Home = () => {
  const dispatch = useDispatch();
  const { products, latest_product, topRated_product, discount_product } =
    useSelector((state) => state.home);
  useEffect(() => {
    dispatch(get_products());
  }, []);
  return (
    <div className="w-full bg-[#eeeeee]">
      <Headers />
      <Banner />
      <div className="my-4">
        <Categorys />
      </div>
      <div className="py-[45px]">
        <FeaturedProducts products={products} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Últimos Produtos" products={latest_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Mais Avaliados" products={topRated_product} />
            </div>
            <div className="overflow-hidden">
              <Products
                title="Produtos com Desconto"
                products={discount_product}
              />
            </div>
          </div>
        </div>
        <div className="py-14">
          <Brands />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
