"use client";
import { Input } from "@/components/ui/input";
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
import { Upload } from "lucide-react";
type EmployerType = "webAdmin" | "towTruck" | "delivery";

interface DocumentUpload {
  passport?: string;
  driversLicense?: string;
  companyLicense?: string;
}
export default function ProfileSettings() {
  const [employerType, setEmployerType] = useState<EmployerType>("webAdmin");
  const [documents, setDocuments] = useState<DocumentUpload>({});
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const documentRefs = {
    passport: useRef<HTMLInputElement>(null),
    driversLicense: useRef<HTMLInputElement>(null),
    companyLicense: useRef<HTMLInputElement>(null),
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
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
  return (
    <div className="pb-5 -mx-2 md:mx-0">
      <div className=" w-full pt-10 pb-2 px-2 md:px-6 bg-white rounded-[10px] shadow-md">
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
              {/* Login & Security */}
              Documents
            </TabsTrigger>
            {/* <TabsTrigger
              value="notifications"
              className="md:px-4 py-2 font-medium text-xs md:text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E0E4EC] data-[state=active]:shadow-none data-[state=active]:after:bg-orange data-[state=active]:text-orange border-0"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="interface"
              className="md:px-4 py-2 font-medium text-xs md:text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E0E4EC] data-[state=active]:after:bg-orange data-[state=active]:text-orange data-[state=active]:shadow-none border-0"
            >
              Interface
            </TabsTrigger> */}
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
                      {profileImage ? (
                        <div
                          onClick={handleUploadClick}
                          className="w-32 h-32 border-2 border-dashed border-[#E0E4EC] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange transition-colors"
                        >
                          <Image
                            src={profileImage || "/placeholder.svg"}
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
                      value={employerType || undefined}
                      onValueChange={(value: EmployerType) =>
                        setEmployerType(value)
                      }
                    >
                      <SelectTrigger className="w-full">
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
                      htmlFor="fullname"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Full name
                    </Label>
                    <Input placeholder="Enter your full name" id="fullname" />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
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
                      type="tel"
                      placeholder="Enter your phone number"
                      id="phone"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="username"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Employee ID
                    </Label>
                    <Input placeholder="Enter your employee ID" id="username" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="fullname"
                    className="font-medium text-base text-[#4C535F]"
                  >
                    Bio
                  </Label>
                  <Textarea
                    placeholder="Write your Bio here e.g. hobbies, interests, etc."
                    className="mb-4 h-[158px]"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button className="bg-orange hover:bg-transparent border border-transparent hover:border-orange text-white hover:text-orange">
                    Update Profile
                  </Button>
                  <Button className="bg-orange hover:bg-transparent border border-transparent hover:border-orange text-white hover:text-orange">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <TabsContent value="login">
            <Card className=" p-6">
              <CardContent>
                <div className="flex flex-col gap-6 mb-4">
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Email
                    </Label>
                    <Input type="email" placeholder="Email" id="email" />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="username"
                      className="font-medium text-base text-[#4C535F]"
                    >
                      Username
                    </Label>
                    <Input placeholder="Username" id="username" />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button className="bg-orange hover:bg-transparent border border-transparent hover:border-orange text-white hover:text-orange">
                    Login
                  </Button>                  
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}
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
                  {employerType === "towTruck" && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-500">
                          Drivers `&lsquo;` License
                        </Label>
                        <div
                          onClick={() =>
                            documentRefs.driversLicense.current?.click()
                          }
                          className="border-2 border-dashed rounded-lg py-2 px-4  cursor-pointer hover:border-orange transition-colors text-sm"
                        >
                          {documents.driversLicense ? (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-green-500" />
                              <span className="text-green-500">
                                Driver`&lsquo;`s License uploaded successfully
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Upload className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-500">
                                Upload driver`&lsquo;`s license
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
                          className="border-2 border-dashed rounded-lg py-2 px-4  cursor-pointer hover:border-orange transition-colors text-sm"
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
                  <Button className="bg-orange hover:bg-orange/90 text-white">
                    Save Documents
                  </Button>
                  <Button className="bg-orange hover:bg-orange/90 text-white">
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
