import React, { useEffect, useState } from 'react';
import { login, getCurrentUser } from '@/utils/authService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MailCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [user, setUser] = useState(getCurrentUser());
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSignIn = async (provider: string) => {
    setActiveProvider(provider);
    setIsLoading(true);
    
    try {
      if (provider === 'email' && !showEmailForm) {
        setShowEmailForm(true);
        setIsLoading(false);
        return;
      }
      
      const response = await login(provider);
      if (response) {
        setUser(response.account);
        toast.success(`Successfully signed in with ${provider}!`);
      }
    } catch (error) {
      toast.error(`Sign-in with ${provider} failed. Please try again.`);
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
      setActiveProvider(null);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);
    try {
      toast.success("Check your email for a verification link");
    } catch (error) {
      toast.error("Failed to send verification email. Please try again.");
      console.error("Email verification error:", error);
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
            ) : showEmailForm ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="flex space-x-2">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setShowEmailForm(false)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-Adapteq-purple hover:bg-Adapteq-dark-purple"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Continue"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <Button 
                  onClick={() => handleSignIn('microsoft')}
                  className="w-full bg-[#2f2f2f] hover:bg-[#1f1f1f] text-white flex items-center justify-center"
                  disabled={isLoading && activeProvider === 'microsoft'}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f3f3f3" d="M0 0h11v11H0z"/>
                    <path fill="#f35325" d="M12 0h11v11H12z"/>
                    <path fill="#81bc06" d="M0 12h11v11H0z"/>
                    <path fill="#05a6f0" d="M12 12h11v11H12z"/>
                  </svg>
                  {isLoading && activeProvider === 'microsoft' ? "Signing in..." : "Sign in with Microsoft"}
                </Button>
                
                <Button 
                  onClick={() => handleSignIn('google')}
                  className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center"
                  disabled={isLoading && activeProvider === 'google'}
                >
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2363636,5.50909091 16.4527273,6.49090909 L19.6054545,3.33818182 C17.5527273,1.36 14.9345455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                  </svg>
                  {isLoading && activeProvider === 'google' ? "Signing in..." : "Sign in with Google"}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSignIn('email')}
                  className="w-full bg-Adapteq-purple hover:bg-Adapteq-dark-purple flex items-center justify-center"
                  disabled={isLoading && activeProvider === 'email'}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {isLoading && activeProvider === 'email' ? "Preparing..." : "Sign in with Email"}
                </Button>
              </div>
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
