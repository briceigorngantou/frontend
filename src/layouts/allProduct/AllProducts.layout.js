import "./styles.css";
import CardProduct from "../../components/cardProduct/CardProduct";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const AllProducts = ({ error, loading, Products }) => {
  return (
    <div className="row">
      {loading || !Products ? (
        <Loading isLoading={loading} />
      ) : error ? (
        <Error />
      ) : (
        Products.map((value, key) => {
          return (
            <div className="col" id={value.id} key={key}>
              <CardProduct dataCard={value} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllProducts;
