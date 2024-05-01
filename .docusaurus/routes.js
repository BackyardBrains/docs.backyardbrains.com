import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'adb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '403'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e54'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c23'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8cd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8d0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '364'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '458'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fbb'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '925'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '42b'),
            routes: [
              {
                path: '/Human/Claw/',
                component: ComponentCreator('/Human/Claw/', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/H&BSB/',
                component: ComponentCreator('/Human/H&BSB/', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/HHI/',
                component: ComponentCreator('/Human/HHI/', '226'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/HumanSB/',
                component: ComponentCreator('/Human/HumanSB/', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/HumanSB/GameController/',
                component: ComponentCreator('/Human/HumanSB/GameController/', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/HumanSB/ReactionTimer/',
                component: ComponentCreator('/Human/HumanSB/ReactionTimer/', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/HumanSB/ReflexHammer/',
                component: ComponentCreator('/Human/HumanSB/ReflexHammer/', '4d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/MuscleSB/',
                component: ComponentCreator('/Human/MuscleSB/', '798'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/MuscleSS/',
                component: ComponentCreator('/Human/MuscleSS/', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Human/MuscleSS/DIYNP/',
                component: ComponentCreator('/Human/MuscleSS/DIYNP/', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Insect/NSBclassic/',
                component: ComponentCreator('/Insect/NSBclassic/', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Insect/NSBpro/',
                component: ComponentCreator('/Insect/NSBpro/', '6f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Insect/Roboroach/',
                component: ComponentCreator('/Insect/Roboroach/', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Plant/PlantSpikerBox/',
                component: ComponentCreator('/Plant/PlantSpikerBox/', '001'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Policies/Ethics/',
                component: ComponentCreator('/Policies/Ethics/', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Policies/ReturnPolicy/',
                component: ComponentCreator('/Policies/ReturnPolicy/', '31a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Policies/StyleGuide/',
                component: ComponentCreator('/Policies/StyleGuide/', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/',
                component: ComponentCreator('/Software/SpikeRecorder/', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/Android/',
                component: ComponentCreator('/Software/SpikeRecorder/Android/', '4ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/Desktop/',
                component: ComponentCreator('/Software/SpikeRecorder/Desktop/', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/iOS/',
                component: ComponentCreator('/Software/SpikeRecorder/iOS/', 'd4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/Troubleshooting/',
                component: ComponentCreator('/Software/SpikeRecorder/Troubleshooting/', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Software/SpikeRecorder/Web/',
                component: ComponentCreator('/Software/SpikeRecorder/Web/', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'efb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
