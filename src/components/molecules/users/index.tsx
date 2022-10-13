import "./UserCard.scss";

const UserCard = ({
  title,
  img,
  count,
}: {
  title: string;
  img: string;
  count: string;
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-holder">
        <div>
          <img src={img} alt="" className="cursor-pointer" />
        </div>
        <h3 className="text-sm font-medium text-primary">{title}</h3>
        <h3 className="text-2xl text-purple font-semibold">{count}</h3>
      </div>
    </div>
  );
};

export default UserCard;
