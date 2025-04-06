"use client";
import { Input } from "@/components/ui/input";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon, Upload } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

type EmployerType = "webAdmin" | "towTruck" | "delivery";

interface DocumentUpload {
  passport?: string;
  driversLicense?: string;
  companyLicense?: string;
}

interface ProfileFormData {
  fullName: string;
  email: string;
  phone: string;
  employeeId: string;
  bio: string;
  employerType: EmployerType;
  profileImage: string | null;
}

export default function ProfileSettings() {
  // Profile form state
  const [profileData, setProfileData] = useState<ProfileFormData>({
    fullName: "",
    email: "",
    phone: "",
    employeeId: "",
    bio: "",
    employerType: "webAdmin",
    profileImage: null,
  });

  // UI state
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [isDocumentsLoading, setIsDocumentsLoading] = useState(false);
  const [documents, setDocuments] = useState<DocumentUpload>({});

  // Refs for file inputs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const documentRefs = {
    passport: useRef<HTMLInputElement>(null),
    driversLicense: useRef<HTMLInputElement>(null),
    companyLicense: useRef<HTMLInputElement>(null),
  };

  // Handle profile image upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileData((prev) => ({
          ...prev,
          profileImage: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Handle document uploads
  const handleDocumentUpload =
    (type: keyof DocumentUpload) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setDocuments((prev) => ({
            ...prev,
            [type]: e.target?.result as string,
          }));
        };
        reader.readAsDataURL(file);
      }
    };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle employer type change
  const handleEmployerTypeChange = (value: EmployerType) => {
    setProfileData((prev) => ({
      ...prev,
      employerType: value,
    }));
  };

  // Reset profile form
  const handleResetProfile = () => {
    setProfileData({
      fullName: "",
      email: "",
      phone: "",
      employeeId: "",
      bio: "",
      employerType: "webAdmin",
      profileImage: null,
    });

    toast.success("Form Reset", {
      description: "Your profile form has been reset.",
    });
  };

  // Reset documents
  const handleResetDocuments = () => {
    setDocuments({});

    toast.success("Documents Reset", {
      description: "Your documents have been reset.",
    });
  };

  // Update profile
  const handleUpdateProfile = async () => {
    setIsProfileLoading(true);

    try {
      // Validate form
      if (!profileData.fullName || !profileData.email || !profileData.phone) {
        throw new Error("Please fill in all required fields.");
      }

      // Simulate API call - replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would send the data to your API
      // const response = await fetch("/api/profile", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(profileData)
      // });
      //
      // if (!response.ok) {
      //   throw new Error("Failed to update profile");
      // }

      toast.success("Profile Updated", {
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      toast.error("Error", {
        description:
          error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsProfileLoading(false);
    }
  };

  // Save documents
  const handleSaveDocuments = async () => {
    setIsDocumentsLoading(true);

    try {
      if (profileData.employerType === "towTruck") {
        if (
          !documents.passport ||
          !documents.driversLicense ||
          !documents.companyLicense
        ) {
          throw new Error("Please upload all required documents.");
        }
      } else if (!documents.passport) {
        throw new Error("Please upload your passport.");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Documents Saved", {
        description: "Your documents have been successfully saved.",
      });
    } catch (error) {
      toast.error("Error", {
        description:
          error instanceof Error ? error.message : "An error occurred",
      });
    } finally {
      setIsDocumentsLoading(false);
    }
  };

  return (
    <div className="pb-5 -mx-2 md:mx-0">
      {/* Add Sonner Toaster component */}
      <Toaster />

      <div className="w-full pt-10 pb-2 px-2 md:px-6 bg-white rounded-[10px] shadow-md">
        <Tabs defaultValue="account">
          <TabsList className="flex pb-1 relative">
            <TabsTrigger
              value="account"
              className="md:px-4 py-2 font-medium text-xs md:text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E0E4EC] data-[state=active]:after:bg-orange data-[state=active]:text-orange data-[state=active]:shadow-none border-0"
            >
              Account Setting
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="md:px-4 py-2 font-medium text-xs md:text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E0E4EC] data-[state=active]:after:bg-orange data-[state=active]:text-orange data-[state=active]:shadow-none border-0"
            >
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="p-2 md:p-6">
              <CardContent>
                <div className="pb-10 mb-10 border-b border-[#E0E4EC] flex flex-col md:flex-row md:items-center gap-6">
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Profile Picture
                    </label>
                    <div className="mt-2">
                      {/* Hidden file input */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />

                      {/* Profile image display */}
                      {profileData.profileImage ? (
                        <div
                          onClick={handleUploadClick}
                          className="w-32 h-32 border-2 border-dashed border-[#E0E4EC] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange transition-colors"
                        >
                          <Image
                            src={profileData.profileImage || "/placeholder.svg"}
                            alt="Profile"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ) : (
                        <div
                          onClick={handleUploadClick}
                          className="w-32 h-32 border-2 border-dashed border-[#E0E4EC] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange transition-colors"
                        >
                          <svg
                            className="w-8 h-8 text-gray-400 mb-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                          <span className="text-xs text-gray-500">
                            Upload your photo
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* employee type */}
                  <div className="flex-1 space-y-3">
                    <Label className="font-medium text-base text-[#4C535F]">
                      Employer Type
                    </Label>
                    <Select
                      value={profileData.employerType}
                      onValueChange={(value: EmployerType) =>
                        handleEmployerTypeChange(value)
                      }
                    >
                      <SelectTrigger className="w-full relative appearance-none">
                        <ChevronDownIcon className="text-[#4C535F] absolute right-[12px] " />
                        <SelectValue placeholder="Select employer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webAdmin">
                          Web Administrator
                        </SelectItem>
                        <SelectItem value="towTruck">
                          Tow Truck Driver
                        </SelectItem>
                        <SelectItem value="delivery">
                          Delivery Personnel
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="space-y-3">
                    <Label
                      htmlFor="fullName"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Full name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={profileData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="employeeId"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Employee ID
                    </Label>
                    <Input
                      id="employeeId"
                      placeholder="Enter your employee ID"
                      value={profileData.employeeId}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="bio"
                    className="font-medium text-base text-[#4C535F]"
                  >
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Write your Bio here e.g. hobbies, interests, etc."
                    className="mb-4 h-[158px]"
                    value={profileData.bio}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={handleUpdateProfile}
                    disabled={isProfileLoading}
                    className="bg-orange hover:bg-transparent border border-transparent hover:border-orange text-white hover:text-orange"
                  >
                    {isProfileLoading ? "Updating..." : "Update Profile"}
                  </Button>
                  <Button
                    onClick={handleResetProfile}
                    disabled={isProfileLoading}
                    className="bg-orange hover:bg-transparent border border-transparent hover:border-orange text-white hover:text-orange"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {/* Passport Upload - Required for all */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-500">
                      Passport
                    </Label>
                    <div
                      onClick={() => documentRefs.passport.current?.click()}
                      className="border-2 border-dashed rounded-lg py-2 px-4 cursor-pointer hover:border-orange transition-colors text-sm"
                    >
                      {documents.passport ? (
                        <div className="flex items-center space-x-2">
                          <Upload className="w-5 h-5 text-green-500" />
                          <span className="text-green-500">
                            Passport uploaded successfully
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-500">Upload passport</span>
                        </div>
                      )}
                    </div>
                    <Input
                      type="file"
                      ref={documentRefs.passport}
                      onChange={handleDocumentUpload("passport")}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                  </div>

                  {/* Additional documents for Tow Truck Drivers */}
                  {profileData.employerType === "towTruck" && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-500">
                          Driver&apos;s License
                        </Label>
                        <div
                          onClick={() =>
                            documentRefs.driversLicense.current?.click()
                          }
                          className="border-2 border-dashed rounded-lg py-2 px-4 cursor-pointer hover:border-orange transition-colors text-sm"
                        >
                          {documents.driversLicense ? (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-green-500" />
                              <span className="text-green-500">
                                Driver&apos;s License uploaded successfully
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-500">
                                Upload driver&apos;s license
                              </span>
                            </div>
                          )}
                        </div>
                        <Input
                          type="file"
                          ref={documentRefs.driversLicense}
                          onChange={handleDocumentUpload("driversLicense")}
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-500">
                          Company License
                        </Label>
                        <div
                          onClick={() =>
                            documentRefs.companyLicense.current?.click()
                          }
                          className="border-2 border-dashed rounded-lg py-2 px-4 cursor-pointer hover:border-orange transition-colors text-sm"
                        >
                          {documents.companyLicense ? (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-green-500" />
                              <span className="text-green-500">
                                Company License uploaded successfully
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-500">
                                Upload company license
                              </span>
                            </div>
                          )}
                        </div>
                        <Input
                          type="file"
                          ref={documentRefs.companyLicense}
                          onChange={handleDocumentUpload("companyLicense")}
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleSaveDocuments}
                    disabled={isDocumentsLoading}
                    className="bg-orange hover:bg-orange/90 text-white"
                  >
                    {isDocumentsLoading ? "Saving..." : "Save Documents"}
                  </Button>
                  <Button
                    onClick={handleResetDocuments}
                    disabled={isDocumentsLoading}
                    className="bg-orange hover:bg-orange/90 text-white"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
