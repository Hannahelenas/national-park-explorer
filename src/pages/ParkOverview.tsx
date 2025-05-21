import { useParams } from "react-router";

const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  return (
    <div className="mt-20">
      Welcome to {parkCode} stunning Nationalpark!
      <h2>Singe park page</h2>
    </div>
  );
};

export default ParkOverview;
