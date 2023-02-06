import './ExperienceCard.css';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

function ExperienceCard(props) {
  const experience = props.experience;
  const experienceBullets = experience.description.map((desc, i) => {
    return <li key={i}>{desc}</li>;
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          width: '99%',
          borderColor: experience.color,
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        <Paper
          elevation={1}
          sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={experience.logo_path}
              alt=""
            />
          </div>
          <div className="experience-card-body-div">
            <div className="experience-card-header-div">
              <div className="experience-card-heading-left">
                <h3 className="experience-card-title">{experience.title}</h3>
                <Link
                  href={experience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.main',
                    margin: '0',
                  }}
                  underline="hover"
                >
                  {experience.company}
                </Link>
              </div>
              <div className="experience-card-heading-right">
                <p className="experience-card-duration">
                  {experience.duration}
                </p>
                <p className="experience-card-location">
                  {experience.location}
                </p>
              </div>
            </div>
            <div className="experience-card-description-div">
              <ul className="experience-card-description-list">
                {experienceBullets}
              </ul>
            </div>
          </div>
        </Paper>
      </Card>
    </Box>
  );
}

export default ExperienceCard;
