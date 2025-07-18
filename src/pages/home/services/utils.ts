import { ImgGroupClasses, ImgNutritionPlans, ImgPersonalTraining } from '@/assets/index';

export const serviceData = [
  {
    image: ImgPersonalTraining,
    title: 'personal-training',
    path: '/personal-training',
    description: 'personalTrainingDescription',
  },
  {
    image: ImgGroupClasses,
    title: 'group-classes',
    path: '/group-classes',
    description: 'groupClassesDescription',
  },
  {
    image: ImgNutritionPlans,
    title: 'nutrition-plans',
    path: '/personal-training/nutrition-plans',
    description: 'nutritionPlansDescription',
  },
];

export const camelToDashCase = (str: string) =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
