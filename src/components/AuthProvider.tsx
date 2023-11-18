import { Auth0Provider, AppState } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithNavigate = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const router = useRouter();

  const domain = "dev-rut5cexqqpraipp4.eu.auth0.com";
  const clientId = "g8j23v6rQgQY0YmxcGzi0KXta9fO1DO6";
  const redirectUri = "http://localhost:3000"; // this needs to be discussed on what to set it

  const onRedirectCallback = (appState?: AppState) => {
    // router.push(appState?.returnTo || window.location.pathname);
    router.push(window.location.origin);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
