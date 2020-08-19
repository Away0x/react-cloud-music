import { useRef, useCallback } from 'react';

import { ToastHandlers } from '.';

export default function useToast() {
  const toastRef = useRef<ToastHandlers | null>(null);

  const showToast = useCallback(() => {
    toastRef.current?.show();
  }, []);

  return { showToast, toastRef };
}
