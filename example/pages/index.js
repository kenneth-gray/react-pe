import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import Head from 'next/head';
import { ProgressivelyEnhance } from '../../dist/progressive-enhancement';

const Heading = 'h2';

const heading1 = 'Step 1: Do a thing';
const info1 = (
  <p>
    Here are some detailed instructions about doing a thing. I am very complex
    and probably contain a lot of content, so a user can hide or show me by
    clicking the button above.
  </p>
);

const heading2 = 'Step 2: Do another thing';
const info2 = (
  <p>
    Here are some detailed instructions about doing yet another thing. There are
    a lot of things someone might want to do, so I am only going to talk about
    doing that other thing. I'll let my fellow accordion items go into detail
    about even more things.
  </p>
);

function AccordionExample() {
  return (
    <>
      <h1>Accordion example</h1>
      <ProgressivelyEnhance enhancement={<WithJs />}>
        <WithoutJs />
      </ProgressivelyEnhance>
    </>
  );
}

function WithoutJs() {
  return (
    <>
      <Heading>{heading1}</Heading>
      {info1}
      <Heading>{heading2}</Heading>
      {info2}
    </>
  );
}

function WithJs() {
  return (
    <Accordion>
      <AccordionItem>
        <Heading>
          <AccordionButton>{heading1}</AccordionButton>
        </Heading>
        <AccordionPanel>{info1}</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Heading>
          <AccordionButton>{heading2}</AccordionButton>
        </Heading>
        <AccordionPanel>{info2}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accordion example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AccordionExample />
      </main>
    </div>
  );
}
