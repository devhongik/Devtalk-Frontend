import { useCallback, useEffect, useRef, useState } from 'react';
import { validateAll } from '../utils/validators';

export function useApplyFormValidation() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [canNext, setCanNext] = useState(false);

  const runValidate = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    requestAnimationFrame(() => {
      const { allOk } = validateAll(root);
      setCanNext(allOk);
    });
  }, []);

  useEffect(() => {
    runValidate();
    const el = rootRef.current;
    if (!el) return;
    el.addEventListener('change', runValidate);
    el.addEventListener('input', runValidate);
    return () => {
      el.removeEventListener('change', runValidate);
      el.removeEventListener('input', runValidate);
    };
  }, [runValidate]);

  return { rootRef, canNext };
}
