import { Vehicle } from '../models/Vehicle';

export const vehiclesDb: Vehicle[] = [
  {
    id: '1',
    name: 'mono-cycle',
    tires: [{ id: 't01', rim: { id: 'r01' } }],
    rims: [{ id: 'r01', tire: { id: 't01' } }],
  },
  {
    id: '2',
    name: 'four wheels drive',
    tires: [
      { id: 't11', rim: { id: 'r11' } },
      { id: 't12', rim: { id: 'r12' } },
      { id: 't13', rim: { id: 'r13' } },
      { id: 't14', rim: { id: 'r14' } },
    ],
    rims: [
      { id: 'r21', tire: { id: 't21' } },
      { id: 'r22', tire: { id: 't22' } },
      { id: 'r23', tire: { id: 't23' } },
      { id: 'r24', tire: { id: 't24' } },
    ],
  },
  {
    id: '3',
    name: 'train',
    tires: [],
    rims: [{ id: 'r31'}, { id: 'r32'}, { id: 'r33'}, { id: 'r34'}],
  },
];
