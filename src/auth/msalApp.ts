//shamelessly stolen from: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/react-sample-app/src/auth-utils.js
import { UserAgentApplication } from 'msal';

function isIE() {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ') > -1;
  const msie11 = ua.indexOf('Trident/') > -1;

  // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
  // const isEdge = ua.indexOf("Edge/") > -1;
  return msie || msie11;
}

export const msalApp = new UserAgentApplication({
  auth: {
    clientId: 'aef11d58-ffea-40d6-ba8a-32fab90f14db',
    authority: 'https://login.microsoftonline.com/bshp.onmicrosoft.com',
    validateAuthority: true,
    postLogoutRedirectUri: 'https://api.bshp.edu/v1/teams',
    navigateToLoginRequestUrl: false
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: isIE()
  },
  system: {
    navigateFrameWait: 0
  }
});