import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4e3'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b36'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6bf'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '926'),
            routes: [
              {
                path: '/devices/devices/Human/Claw/',
                component: ComponentCreator('/devices/devices/Human/Claw/', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/H&BSB/',
                component: ComponentCreator('/devices/devices/Human/H&BSB/', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/HHI/',
                component: ComponentCreator('/devices/devices/Human/HHI/', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/HumanSB/',
                component: ComponentCreator('/devices/devices/Human/HumanSB/', '1e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/HumanSB/GameController/',
                component: ComponentCreator('/devices/devices/Human/HumanSB/GameController/', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/HumanSB/ReactionTimer/',
                component: ComponentCreator('/devices/devices/Human/HumanSB/ReactionTimer/', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/HumanSB/ReflexHammer/',
                component: ComponentCreator('/devices/devices/Human/HumanSB/ReflexHammer/', '5d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/MuscleSB/',
                component: ComponentCreator('/devices/devices/Human/MuscleSB/', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/MuscleSS/',
                component: ComponentCreator('/devices/devices/Human/MuscleSS/', 'a25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Human/MuscleSS/DIYNP/',
                component: ComponentCreator('/devices/devices/Human/MuscleSS/DIYNP/', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Insect/NSBclassic/',
                component: ComponentCreator('/devices/devices/Insect/NSBclassic/', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Insect/NSBpro/',
                component: ComponentCreator('/devices/devices/Insect/NSBpro/', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Insect/Roboroach/',
                component: ComponentCreator('/devices/devices/Insect/Roboroach/', '14c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Plant/PlantSpikerBox/',
                component: ComponentCreator('/devices/devices/Plant/PlantSpikerBox/', 'e17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devices/devices/Software/SpikeRecorder/',
                component: ComponentCreator('/devices/devices/Software/SpikeRecorder/', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/experiments',
                component: ComponentCreator('/experiments', '60b'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Engineering/Transistors/',
                component: ComponentCreator('/experiments/experiments/Engineering/Transistors/', '3eb'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/DIYHand/',
                component: ComponentCreator('/experiments/experiments/Human/DIYHand/', 'd6b'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/DIYHand/Programming/',
                component: ComponentCreator('/experiments/experiments/Human/DIYHand/Programming/', '601'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/DIYHand/Programming/Blocks/',
                component: ComponentCreator('/experiments/experiments/Human/DIYHand/Programming/Blocks/', '521'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/DIYHand/Programming/JS/',
                component: ComponentCreator('/experiments/experiments/Human/DIYHand/Programming/JS/', '40d'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/DIYHand/Programming/Python/',
                component: ComponentCreator('/experiments/experiments/Human/DIYHand/Programming/Python/', '8de'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/EOG/',
                component: ComponentCreator('/experiments/experiments/Human/EOG/', '0e7'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/Muscles/',
                component: ComponentCreator('/experiments/experiments/Human/Muscles/', '304'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Human/Skin/',
                component: ComponentCreator('/experiments/experiments/Human/Skin/', '7ca'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Insect/NeuronSpikerBox/',
                component: ComponentCreator('/experiments/experiments/Insect/NeuronSpikerBox/', 'd11'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/experiments/experiments/Plant/Flytrap/',
                component: ComponentCreator('/experiments/experiments/Plant/Flytrap/', 'aa0'),
                exact: true,
                sidebar: "experimentsSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '4ef'),
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
