import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export type MainMenuItemKey = 'personal-training' | 'group-classes' | 'transformations' | 'contact';

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
        key: 'personal-training',
      },
      {
        label: t('groupClasses'),
        key: 'group-classes',
      },
      {
        label: t('transformations'),
        key: 'transformations',
      },
      {
        label: t('contact'),
        key: 'contact',
      },
    ],
    onMenuItemClick,
  };
};
