import CatalogueItem from "./CatalogueItem";
import starterImage from "../images/icons/icons8-diamond-48.png";
import standardImage from "../images/icons/icons8-diamond-50.png";
import premiumImage from "../images/icons/icons8-sparkling-diamond-100.png";

const Catalogue = () => {
  const packages = [
    {
      name: "Starter",
      wasPrice: "3 499",
      currentPrice: "2 970",
      image: starterImage,
      services: [
        "1 - 3 Website pages",
        "Fully Responsive",
        "Social Media Plugins",
        "Email Contact Form",
        "Basic S.E.O",
        "First month hosting",
      ],
    },
    {
      name: "Standard",
      wasPrice: "4 199",
      currentPrice: "3 820",
      image: standardImage,
      services: [
        "4 - 6 Website pages",
        "Fully Responsive",
        "Social Media Plugins",
        "Email Contact Form",
        "Medium S.E.O",
        "First month hosting",
      ],
    },
    {
      name: "Premium",
      wasPrice: "5 200",
      currentPrice: "4 889",
      image: premiumImage,
      services: [
        "Basic/Standard features",
        "7 - 10 Website pages",
        "Cloud Based System",
        "E-Commerce/Online shop",
        "Professional S.E.O",
        "First month hosting",
      ],
    },
  ];
  return (
    <>
      <div className="container  pt-5">
        <h4 className="text-center heading pt-lg-5 pt-5">
          Add a Level of professionalism to your business at a lower cost.
        </h4>
        <div className="d-lg-flex d-block pt-5 mb-3">
          {packages.map((packageItem) => {
            return <CatalogueItem packageItem={packageItem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
