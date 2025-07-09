import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export enum MainMenuItemKey {
  PERSONAL_TRAINING = 'personal-training',
  GROUP_CLASSES = 'group-classes',
  TRANSFORMATIONS = 'transformations',
  CONTACT = 'contact',
}

export const useMainMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(
    (key: string) => {
      navigate(key);
    },
    [navigate]
  );

  return {
    items: [
      {
        label: t('personalTraining'),
        key: MainMenuItemKey.PERSONAL_TRAINING,
      },
      {
        label: t('groupClasses'),
        key: MainMenuItemKey.GROUP_CLASSES,
      },
      {
        label: t('transformations'),
        key: MainMenuItemKey.TRANSFORMATIONS,
      },
      {
        label: t('contact'),
        key: MainMenuItemKey.CONTACT,
      },
    ],
    onMenuItemClick,
  };
};
