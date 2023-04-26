import { useCallback } from "react";
import {
  NavigateOptions,
  To,
  useLocation,
  useNavigate as useReactRouterNavigate,
} from "react-router-dom";

type NavigateOptionsExtended = NavigateOptions & {
  back?: boolean;
};

interface NavigateFunction {
  (to: To, options?: NavigateOptionsExtended): void;
  (delta: number, options?: NavigateOptionsExtended): void;
}

export const useNavigate = () => {
  const location = useLocation();
  const canGoBack = !!location?.state?.back;
  const reactRouterNavigate = useReactRouterNavigate();

  const navigate: NavigateFunction = useCallback(
    (to, options) => {
      const isDelta = typeof to === "number";

      if (isDelta) {
        return reactRouterNavigate(to);
      }

      if (options?.back && canGoBack) {
        return reactRouterNavigate(-1);
      }

      const state = {
        back: true,
        ...options?.state,
      };

      return reactRouterNavigate(to, {
        ...options,
        state,
      });
    },
    [canGoBack, reactRouterNavigate]
  );

  return navigate;
};
