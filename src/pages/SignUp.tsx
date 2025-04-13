
import React, { useEffect, useState } from 'react';
import { login, getCurrentUser } from '@/utils/authService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MailCheck, Server, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

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
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-Adapteq-navy">Get API Access</h1>
              <p className="mt-2 text-gray-600">Sign up to access the Adapteq API and start integrating adaptive conversations into your applications.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
              <div className="flex items-start">
                <Server className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-Adapteq-navy">RESTful API Access</h3>
                  <p className="text-sm text-gray-600">Get full access to our conversation intelligence API with JSON requests and responses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 12H7L9 8L13 16L15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-medium text-Adapteq-navy">Dual Memory Architecture</h3>
                  <p className="text-sm text-gray-600">Leverage our hot and cool memory paths for immediate context and long-term storage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-Adapteq-purple mr-3 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H4V8H9V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 3H15V8H20V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 15H15V20H20V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 15H4V20H9V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 6H15V18H9V6Z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <h3 className="font-medium text-Adapteq-navy">Robust Microservices</h3>
                  <p className="text-sm text-gray-600">Our API is built on distributed microservices ensuring reliability and scalability.</p>
                </div>
              </div>

              <Link to="/api-docs" className="inline-flex items-center text-Adapteq-purple hover:text-Adapteq-dark-purple mt-2">
                View complete API documentation <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <Card className="w-full">
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
                    onClick={() => navigate('/api-docs')}
                    className="w-full bg-Adapteq-purple hover:bg-Adapteq-dark-purple"
                  >
                    View API Documentation
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
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
