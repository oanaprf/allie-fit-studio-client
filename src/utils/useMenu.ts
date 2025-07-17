import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useMenu = (items: string[], nested?: boolean) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(
    (key: string) => {
      navigate(`${nested ? '' : '/'}${key}`);
    },
    [navigate, nested]
  );

  return {
    items: items.map(item => ({
      label: t(item),
      key: item,
    })),
    onMenuItemClick,
  };
};
