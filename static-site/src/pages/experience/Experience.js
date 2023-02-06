import ExperienceCard from '../../components/experienceCard/ExperienceCard.js';
import Header from '../../components/header/Header.js';
import { experience } from '../../data.js';
import './Experience.css';
import Stack from '@mui/material/Stack';

const workExperienceList = experience.sections[0].experiences;
function Experience() {
  return (
    <div className="experience-main">
      {/* <Header /> */}
      <Stack sx={{ width: '100%' }}>
        {workExperienceList.map((exp, idx) => {
          return <ExperienceCard key={idx} experience={exp} />;
        })}
      </Stack>
    </div>
  );
}

export default Experience;
