
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

// Login function with Microsoft - opens a popup for authentication
export const login = async (provider = 'microsoft') => {
  try {
    let loginResponse;
    
    switch (provider) {
      case 'microsoft':
        loginResponse = await msalInstance.loginPopup({
          scopes: ["openid", "profile"]
        });
        break;
      case 'google':
        // In a real implementation, this would use the appropriate B2C policy for Google
        // or a separate Google authentication library
        loginResponse = await msalInstance.loginPopup({
          scopes: ["openid", "profile"],
          // Here you would specify the Google auth policy in your B2C tenant
          authority: `https://${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.b2clogin.com/${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.onmicrosoft.com/B2C_1_google`
        });
        break;
      case 'email':
        // In a real implementation, this would use the appropriate B2C policy for email/password
        loginResponse = await msalInstance.loginPopup({
          scopes: ["openid", "profile"],
          // Here you would specify the email/password auth policy in your B2C tenant
          authority: `https://${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.b2clogin.com/${import.meta.env.VITE_AZURE_AD_TENANT_NAME || "yourtenant"}.onmicrosoft.com/B2C_1_email`
        });
        break;
      default:
        throw new Error("Invalid provider specified");
    }
    
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
