import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TorreDeControle from "./pages/TorreDeControle";
import TransporteRodoviario from "./pages/TransporteRodoviario";
import Armazenagem from "./pages/Armazenagem";
import FretesUrgentes from "./pages/FretesUrgentes";
import TmsVms from "./pages/TmsVms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/torre-de-controle" element={<TorreDeControle />} />
            <Route path="/transporte-rodoviario" element={<TransporteRodoviario />} />
            <Route path="/armazenagem" element={<Armazenagem />} />
            <Route path="/fretes-urgentes" element={<FretesUrgentes />} />
            <Route path="/tms-vms" element={<TmsVms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
