import RisorseCard from "./RisorseCard";
import AnalisiCard from "./AnalisiCard";
import BioCard from "./BioCard";
import Experiences from "./Experiences";
import UserMainCard from "./UserMainCard";

const UserContent = () => {
  return (
    <div>
      <UserMainCard />
      <AnalisiCard />
      <RisorseCard />
      <BioCard />
      <Experiences />
    </div>
  );
};

export default UserContent;
