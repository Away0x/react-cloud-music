import { useRef, useCallback } from 'react';

import { ConfirmHandlers } from '.';

export default function useConfirm() {
  const confirmRef = useRef<ConfirmHandlers | null>(null);

  const showConfirm = useCallback(() => {
    confirmRef.current?.show();
  }, []);

  return { showConfirm, confirmRef };
}
