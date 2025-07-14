import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useMenu = (items: string[]) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(
    (key: string) => {
      navigate(`/${key}`);
    },
    [navigate]
  );

  return {
    items: items.map(item => ({
      label: t(item),
      key: item,
    })),
    onMenuItemClick,
  };
};
