
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import DemoRequestForm from './DemoRequestForm';
import { Button } from './ui/button';

interface DemoRequestSheetProps {
  triggerText?: string;
  buttonClassName?: string;
}

const DemoRequestSheet = ({ 
  triggerText = "Try It Free", 
  buttonClassName = "bg-Adapteq-blue hover:bg-blue-700" 
}: DemoRequestSheetProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={buttonClassName}>{triggerText}</Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-r from-blue-800 to-purple-400 text-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-white text-2xl">Get Started Now</SheetTitle>
          <SheetDescription className="text-white/90">
            Try Adapteq's adaptive conversation platform for free. No commitments.
          </SheetDescription>
        </SheetHeader>
        <DemoRequestForm onSuccess={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default DemoRequestSheet;
