
// src/pages/neuroengineering/spikerbot.js

import React from 'react';
import Layout from '@theme/Layout';
import { Redirect } from '@docusaurus/router';

export default function SpikerBotRedirect() {
  return (
    <Layout>
      <Redirect to="/neuroengineering/pre-release/spikerbot" />
    </Layout>
  );
}
