"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface PricingConfig {
  towTruckRate: number;
  normalDeliveryRate: number;
  emergencyDeliveryRate: number;
  midnightEmergencyRate: number;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrices: PricingConfig;
  onSave: (prices: PricingConfig) => void;
}

export function PricingModal({
  isOpen,
  onClose,
  initialPrices,
  onSave,
}: PricingModalProps) {
  const [towTruckRate, setTowTruckRate] = useState(
    initialPrices.towTruckRate.toFixed(2)
  );
  const [normalDeliveryRate, setNormalDeliveryRate] = useState(
    initialPrices.normalDeliveryRate.toFixed(2)
  );
  const [emergencyDeliveryRate, setEmergencyDeliveryRate] = useState(
    initialPrices.emergencyDeliveryRate.toFixed(2)
  );
  const [midnightEmergencyRate, setMidnightEmergencyRate] = useState(
    initialPrices.midnightEmergencyRate.toFixed(2)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const prices = {
      towTruckRate: parseFloat(towTruckRate),
      normalDeliveryRate: parseFloat(normalDeliveryRate),
      emergencyDeliveryRate: parseFloat(emergencyDeliveryRate),
      midnightEmergencyRate: parseFloat(midnightEmergencyRate),
    };

    // Simulate API call or form submission
    setTimeout(() => {
      onSave(prices); // Save prices
      onClose(); // Close modal
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pricing Settings</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSave}>
          <Tabs defaultValue="tow-truck">
            <TabsList>
              <TabsTrigger value="tow-truck">Tow Truck</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
            </TabsList>
            <TabsContent value="tow-truck">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="towTruckRate">Price per km (AED)</Label>
                  <Input
                    id="towTruckRate"
                    value={towTruckRate}
                    onChange={(e) => setTowTruckRate(e.target.value)}
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="delivery">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="normalDeliveryRate">
                    Normal Delivery Price (AED/box)
                  </Label>
                  <Input
                    id="normalDeliveryRate"
                    value={normalDeliveryRate}
                    onChange={(e) => setNormalDeliveryRate(e.target.value)}
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyDeliveryRate">
                    Emergency Delivery Price (AED/box)
                  </Label>
                  <Input
                    id="emergencyDeliveryRate"
                    value={emergencyDeliveryRate}
                    onChange={(e) => setEmergencyDeliveryRate(e.target.value)}
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="midnightEmergencyRate">
                    Midnight Emergency Delivery Price (AED/box)
                  </Label>
                  <Input
                    id="midnightEmergencyRate"
                    value={midnightEmergencyRate}
                    onChange={(e) => setMidnightEmergencyRate(e.target.value)}
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
