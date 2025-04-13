
import React, { useEffect, useState } from 'react';
import { login, getCurrentUser } from '@/utils/authService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already signed in
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await login();
      if (response) {
        setUser(response.account);
        toast.success("Successfully signed in!");
      }
    } catch (error) {
      toast.error("Sign-in failed. Please try again.");
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-center text-Adapteq-purple">
              Welcome to Adapteq
            </CardTitle>
            <CardDescription className="text-center">
              {user ? "You're successfully signed in" : "Sign up to try our adaptive conversations"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4 pt-4">
            {user ? (
              <div className="text-center space-y-4">
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  <p className="font-medium">Signed in as:</p>
                  <p>{user.username || user.name}</p>
                </div>
                <Button 
                  onClick={() => navigate('/')}
                  className="w-full bg-Adapteq-purple hover:bg-Adapteq-dark-purple"
                >
                  Return to Home
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleSignIn} 
                className="w-full bg-Adapteq-purple hover:bg-Adapteq-dark-purple"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in with Microsoft"}
              </Button>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center text-gray-500">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
