import React from 'react';
import { Collapse } from 'antd';

const items = [
  {
    key: '1',
    label: 'What are the key issues in the upcoming election?',
    children: (
      <p>
        Candidates will address issues such as economic growth, social justice, education, national security, and healthcare accessibility.
      </p>
    ),
  },
  {
    key: '2',
    label: 'How can I learn more about each candidate?',
    children: (
      <p>
        Each candidate will provide information about their background, platform, and priorities. Stay informed by attending debates, researching online, and engaging with campaign materials.
      </p>
    ),
  },
  {
    key: '3',
    label: 'How do I register to vote?',
    children: (
      <p>
        To register to vote, visit your local election office, or register online through official government websites. Make sure to meet the registration deadlines to participate in the upcoming election.
      </p>
    ),
  },
];

const Accordion = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '70%', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
      <Collapse accordion items={items} />
    </div>
  </div>
);

export default Accordion;
