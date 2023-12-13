import classes from "./CatalogueItem.module.css";

const CatalogueItem = (props) => {
  const { packageItem } = props;
  return (
    <>
      <div className="card catalogue-card col-lg-4 col-11 mx-auto">
        <div className="card-heading">
          <img src={packageItem.image} alt="" className={packageItem.name} />
        </div>
        <h5 className="brand text-center">{packageItem.name} Package</h5>
        <h6 className="price text-center">
          <span className="was">P {packageItem.wasPrice}</span> P{" "}
          {packageItem.currentPrice}
        </h6>
        <hr />
        <ul className="services m-auto">
          {packageItem.services.map((service) => {
            return <li>{service}</li>;
          })}
        </ul>
        <a
          href="/#contact-me"
          className="btn choose-package mx-auto my-3 mt-auto"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="Requesting Starter Package"
        >
          Choose Package
        </a>
      </div>
    </>
  );
};

export default CatalogueItem;
