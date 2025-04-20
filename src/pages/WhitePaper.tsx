
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Download, Printer } from "lucide-react";

const WhitePaper = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end gap-4 mb-8 print:hidden">
          <Button 
            variant="outline" 
            onClick={handlePrint}
            className="flex items-center gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button 
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
        <article className="prose max-w-none">
          {/* Content will be added here */}
        </article>
      </div>
    </div>
  );
};

export default WhitePaper;
