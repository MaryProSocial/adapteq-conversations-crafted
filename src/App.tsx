import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ApiDocs from "./pages/ApiDocs";
import NotFound from "./pages/NotFound";
import WhitePaper from "./pages/WhitePaper";
import ExecutiveSummary from "./pages/ExecutiveSummary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/white-paper" element={<WhitePaper />} />
        <Route path="/executive-summary" element={<ExecutiveSummary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
