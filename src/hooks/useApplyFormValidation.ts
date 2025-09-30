import { useCallback, useEffect, useRef, useState } from 'react';
import { buildPayload, validateAll } from '../utils/validators';

export function useApplyFormValidation() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [canNext, setCanNext] = useState(false);

  const validate = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const { allOk } = validateAll(root);
    setCanNext(allOk);
  }, []);

  const getPayload = useCallback(() => {
    const root = rootRef.current;
    if (!root) return null;
    return buildPayload(root);
  }, []);

  useEffect(() => {
    validate();
  }, [validate]);

  return { rootRef, canNext, validate, getPayload };
}
