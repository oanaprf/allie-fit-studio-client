import { ImgGroupClasses, ImgNutritionPlans, ImgPersonalTraining } from '@/assets/index';

export const serviceData = [
  {
    image: ImgPersonalTraining,
    title: 'personalTraining',
    description: 'personalTrainingDescription',
  },
  {
    image: ImgGroupClasses,
    title: 'groupClasses',
    description: 'groupClassesDescription',
  },
  {
    image: ImgNutritionPlans,
    title: 'nutritionPlans',
    description: 'nutritionPlansDescription',
  },
];

export const camelToDashCase = (str: string) =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
