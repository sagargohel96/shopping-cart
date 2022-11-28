import "../style/headings/heading.css";

type CardObj = {
  imgurl: string;
  title: string;
  price: number;
  rating: number;
};
type CardProps = {
  cardDetails: CardObj;
};
export const Card = (props: CardProps) => {
  const { imgurl, title, price, rating } = props.cardDetails;

  return (
    <>
      <div className=" flex flex-1 max-w-sm flex-col drop-shadow-lg   border border-solid  border-black p-2 ">
        <div className="flex max-w-xs max-h-64">
          <img src={imgurl} alt={title} />
        </div>
        <div className="flex p-3  text-ellipsis">
          <h1> Title : {title} </h1>
        </div>
        <div className="flex justify-between p-3">
          <span>Price : {price}</span>
          <span> Rating : {rating}</span>
        </div>
        <button className="border border-blue-500 bg-blue-700 p-1">
          Add to cart
        </button>
      </div>
    </>
  );
};
