"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react"; // Importar o ícone de cupom

const BlackFridayPromoDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre o diálogo automaticamente quando o componente é montado
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="flex flex-col items-center">
          <img
            src="https://brandlogos.net/wp-content/uploads/2022/05/tiktok_shop-logo_brandlogos.net_5ewfz-768x768.png"
            alt="TikTok Shop Logo"
            className="w-32 h-32 object-contain mb-4"
          />
          <DialogTitle className="text-2xl font-bold">Promoção Black Friday</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground mt-2">
            Cupom de Frete Grátis disponível!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button onClick={() => setIsOpen(false)} className="w-full">
            <Gift className="mr-2 h-4 w-4" /> Resgatar Cupom
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPromoDialog;