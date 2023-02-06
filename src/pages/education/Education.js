import { degrees } from '../../data.js';
import DegreeCard from '../../components/educationCard/DegreeCard';
import Header from '../../components/header/Header.js';

const degreeList = degrees.degrees;

function Education() {
  return (
    <div className="Education">
      {/* <Header/> */}
      {degreeList.map((deg, idx) => {
        return <DegreeCard key={idx} degree={deg} />;
      })}
    </div>
  );
}

export default Education;
