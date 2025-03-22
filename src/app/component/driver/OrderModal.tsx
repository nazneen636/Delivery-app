"use client";

import type React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    order: "",
    address: "",
    date: "",
    time: "",
    phone: "",
    serviceType: "tow-truck",
    distance: "10", // Default 10km for tow truck
    packageType: "normal", // normal or emergency for delivery
  });

  const [towTruckRate] = useState("1.00"); // $1 per km
  const [normalDeliveryRate] = useState("25.00"); // $25 per normal package
  const [emergencyDeliveryRate] = useState("50.00"); // $50 per emergency package

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculatePrice = () => {
    if (formData.serviceType === "tow-truck") {
      return (
        Number.parseFloat(towTruckRate) *
        Number.parseFloat(formData.distance || "0")
      ).toFixed(2);
    } else {
      return formData.packageType === "normal"
        ? normalDeliveryRate
        : emergencyDeliveryRate;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      ...formData,
      price: calculatePrice(),
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Order</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="order">Order</Label>
            <Input
              id="order"
              name="order"
              value={formData.order}
              onChange={handleChange}
              placeholder="Enter order name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          {/* Service Type Selection */}
          <div className="grid gap-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) =>
                handleSelectChange("serviceType", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tow-truck">Tow Truck</SelectItem>
                <SelectItem value="delivery">Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Conditional fields based on service type */}
          {formData.serviceType === "tow-truck" ? (
            <div className="grid gap-2">
              <Label htmlFor="distance">Distance (km)</Label>
              <Input
                id="distance"
                name="distance"
                type="number"
                min="1"
                value={formData.distance}
                onChange={handleChange}
                placeholder="Enter distance in kilometers"
              />
              <p className="text-sm text-muted-foreground">
                Price: ${calculatePrice()} (${towTruckRate}/km ×{" "}
                {formData.distance}km)
              </p>
            </div>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor="packageType">Package Type</Label>
              <Select
                value={formData.packageType}
                onValueChange={(value) =>
                  handleSelectChange("packageType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select package type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">
                    Normal Delivery (${normalDeliveryRate})
                  </SelectItem>
                  <SelectItem value="emergency">
                    Emergency Delivery (${emergencyDeliveryRate})
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Price: ${calculatePrice()}
              </p>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Order</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
