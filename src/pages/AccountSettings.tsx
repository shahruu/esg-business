import { useState } from "react";
import { Save, User, Building, Mail } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

/* ================= DROPDOWN OPTIONS ================= */

const INDUSTRY_OPTIONS = [
  "A. Agriculture, Forestry and Fishing",
  "B. Mining and Quarrying",
  "C. Manufacturing",
  "D. Electricity and Gas Supply",
  "E. Water and Waste Management",
  "F. Construction",
  "G. Wholesale and Retail Trade",
  "H. Transportation and Storage",
  "I. Accommodation and Food Service",
  "J. Information and Communication",
  "K. Financial and Insurance",
  "L. Real Estate",
  "M. Professional and Technical",
  "N. Administrative Services",
  "O. Public Administration",
  "P. Education",
  "Q. Health and Social Work",
  "R. Arts and Recreation",
  "S. Other Services",
];

const COMPANY_SIZE_OPTIONS = [
  "1-5 (Micro Business)",
  "6-10 (Small Business)",
  "11-50 (SME)",
  "51-200 (Medium Enterprise)",
  "201-500 (Large Enterprise)",
  "501-1,000",
  "1,001-5,000",
  "5,001-10,000",
  "10,000+",
];

const ESG_FOCUS_OPTIONS = [
  "Carbon Neutrality",
  "Circular Economy",
  "Social Responsibility",
  "Governance Practices",
  "Diversity & Inclusion",
];

/* ================= COMPONENT ================= */

export default function AccountSettings() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyRegNumber: "",
    role: "",
    industry: "",
    businessEmail: "",
    mobileNumber: "",
    officePhone: "",
    linkedinProfile: "",
    website: "",
    companySize: "",
    country: "",
    address: "",
    esgFocus: "",
    esgInitiatives: "",
  });

  const setField = (key: string, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleSave = () => {
    toast.success("Account settings saved");
  };

  return (
    <PageLayout companyName={form.companyName || "Your Company"}>
      <div className="space-y-6">

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Account Settings" }
        ]} />

        {/* ================= BASIC INFO ================= */}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Core identity and registration details.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid md:grid-cols-2 gap-6">

            <div>
              <Label>First Name</Label>
              <Input onChange={e => setField("firstName", e.target.value)} />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input onChange={e => setField("lastName", e.target.value)} />
            </div>

            <div>
              <Label>Company Name</Label>
              <Input onChange={e => setField("companyName", e.target.value)} />
            </div>

            <div>
              <Label>Company Registration Number</Label>
              <Input onChange={e => setField("companyRegNumber", e.target.value)} />
            </div>

            <div>
              <Label>Role / Designation</Label>
              <Input onChange={e => setField("role", e.target.value)} />
            </div>

            <div>
              <Label>Industry</Label>
              <Select onValueChange={v => setField("industry", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRY_OPTIONS.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          </CardContent>
        </Card>

        {/* ================= CONTACT ================= */}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Details
            </CardTitle>
          </CardHeader>

          <CardContent className="grid md:grid-cols-2 gap-6">

            <div>
              <Label>Business Email</Label>
              <Input onChange={e => setField("businessEmail", e.target.value)} />
            </div>

            <div>
              <Label>Mobile Number</Label>
              <Input onChange={e => setField("mobileNumber", e.target.value)} />
            </div>

            <div>
              <Label>Office Phone</Label>
              <Input onChange={e => setField("officePhone", e.target.value)} />
            </div>

            <div>
              <Label>LinkedIn</Label>
              <Input onChange={e => setField("linkedinProfile", e.target.value)} />
            </div>

            <div className="md:col-span-2">
              <Label>Website</Label>
              <Input onChange={e => setField("website", e.target.value)} />
            </div>

          </CardContent>
        </Card>

        {/* ================= BUSINESS ================= */}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Business Profile
            </CardTitle>
          </CardHeader>

          <CardContent className="grid md:grid-cols-2 gap-6">

            <div>
              <Label>Company Size</Label>
              <Select onValueChange={v => setField("companySize", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_SIZE_OPTIONS.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Country</Label>
              <Input onChange={e => setField("country", e.target.value)} />
            </div>

            <div className="md:col-span-2">
              <Label>Business Address</Label>
              <Input onChange={e => setField("address", e.target.value)} />
            </div>

          </CardContent>
        </Card>

        {/* ================= ESG ================= */}

        <Card>
          <CardHeader>
            <CardTitle>Sustainability Focus</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            <div>
              <Label>Primary ESG Focus</Label>
              <Select onValueChange={v => setField("esgFocus", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select focus" />
                </SelectTrigger>
                <SelectContent>
                  {ESG_FOCUS_OPTIONS.map(opt => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Ongoing ESG Initiatives</Label>
              <Input onChange={e => setField("esgInitiatives", e.target.value)} />
            </div>

          </CardContent>
        </Card>

        {/* ================= SAVE ================= */}

        <div className="flex justify-end">
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
