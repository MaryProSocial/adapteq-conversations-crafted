
import { PublicClientApplication } from "@azure/msal-browser";

// Configuration for Microsoft Authentication Library (MSAL)
const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_AD_CLIENT_ID || "default-client-id",
    authority: `https://${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.b2clogin.com/${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.onmicrosoft.com/B2C_1_SignUpSignIn`,
    knownAuthorities: [`${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.b2clogin.com`],
    redirectUri: window.location.origin
  }
};

// Initialize MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// Login function - opens a popup for authentication
export const login = async () => {
  try {
    const loginResponse = await msalInstance.loginPopup({
      scopes: ["openid", "profile"]
    });
    return loginResponse;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Logout function
export const logout = () => {
  msalInstance.logout();
};

// Get current authenticated user
export const getCurrentUser = () => {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    return accounts[0];
  }
  return null;
};
