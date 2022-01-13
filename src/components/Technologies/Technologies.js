import React from 'react';
import { DiAngularSimple, DiAws, DiFirebase, DiJavascript, DiMongodb, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
  <SectionDivider/>
  <br /><br /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience in a range of technologies working as a Full-Stack Dev. Ranging from from Front-End to Cloud and everything in between.
    </SectionText>
    <List>
      <ListItem>
        <DiAngularSimple size = "4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Angular.js + TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size = "7.5rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "4rem"/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      </List>
  </Section>
);

export default Technologies;
