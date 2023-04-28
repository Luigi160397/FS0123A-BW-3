import RisorseCard from "./RisorseCard";
import AnalisiCard from "./AnalisiCard";

import Experiences from "./Experiences";
import UserMainCard from "./UserMainCard";
import BioCardUser from "./BioCardUser";

const UserContent = () => {
  return (
    <div>
      <UserMainCard />
      <AnalisiCard />
      <RisorseCard />
      <BioCardUser />
      <Experiences />
    </div>
  );
};

export default UserContent;
