import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
  useLocation,
  useNavigate,
} from "react-router-dom";

type LinkProps = ReactRouterLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    back?: boolean;
  };

export const Link: React.FC<LinkProps> = ({ children, back, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = !!location?.state?.back;

  const state = {
    back: true,
    ...props?.state,
  };

  return (
    <ReactRouterLink
      {...props}
      state={state}
      {...{
        ...(canGoBack && back
          ? {
              onClick: (e) => {
                e.preventDefault();
                navigate(-1);
              },
            }
          : {}),
      }}
    >
      {children}
    </ReactRouterLink>
  );
};
