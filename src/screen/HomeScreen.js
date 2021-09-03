// bikin react component untuk mengisi home screen
import { Link } from "react-router-dom";
import products from "../database/products";

export default function HomeScreen() {
  return (
    <div className="grid grid-cols-2 gap-4 p-5">
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
}

function ProductCard({ id, title, price, location, rating }) {
  return (
    <Link to={`/produk-detail/${id}`}>
      <div className="bg-white rounded-xl shadow-xl pb-4">
        <img
          className="w-full rounded-t-xl"
          src={`https://picsum.photos/id/${id}/500/200`}
        />
        <div className="px-4">
          <div className="flex items-center justify-between">
            <p className="flex-auto text-xl truncate">{title}</p>
            <p className="font-bold">Rp{price}</p>
          </div>
          <p className="text-sm">{location}</p>
          <p className="text-sm">{rating} Stars</p>
        </div>
      </div>
    </Link>
  );
}
