import RisorseCard from "./RisorseCard";
import AnalisiCard from "./AnalisiCard";

import UserMainCard from "./UserMainCard";
import BioCardUser from "./BioCardUser";
import UserExperiences from "./UserExperiences";

const UserContent = () => {
  return (
    <div>
      <UserMainCard />
      <AnalisiCard />
      <RisorseCard />
      <BioCardUser />
      <UserExperiences />
    </div>
  );
};

export default UserContent;
