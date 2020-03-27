import {ProjectsModel} from '../../../models/projects.model';

export const projects: ProjectsModel[] = [
  {
    projectName: 'Проект 1',
    modelUsed: ' Модел 2',
    startDate: new Date('2015-03'),
    endDate: new Date('2015-09'),
    description: 'Това е примерено описание за проекта',
    images: [
      'assets/k01.png',
      'assets/k02.png',
    ]
  },
  {
    projectName: 'Проект 2',
    modelUsed: 'Модел 1',
    startDate: new Date('2017-08'),
    endDate: new Date('2018-09'),
    description: 'Това е примерено описание за проекта',
    images: [
      'assets/k02.png',
      'assets/k01.png',
    ]
  },
];
