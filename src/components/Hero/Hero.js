import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Anchor, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Bryan - Full Stack Developer <br />
    </SectionTitle>
    <SectionText>
      Hi, my name is Bryan, I am a Full-Stack Developer based in Chicago with 2 years of Experience. 🧑🏻‍💻 I am currently working as a Software Engineer @ Vanguard.
      <br />
      For any queries please feel free to contact me!
 
    </SectionText>
    <Anchor href = "mailto:arriagabryan@gmail.com"> <Button>Contact me</Button></Anchor>

  </LeftSection>

  </Section>
);

export default Hero;