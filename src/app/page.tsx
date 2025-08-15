import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          OpenCare4All
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Modern occupational health management platform for medical campaigns, 
          employee health tracking, and workplace wellness programs.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/auth/login">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🏢</span>
              Organizations
            </CardTitle>
            <CardDescription>
              Manage company profiles and organizational structures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Comprehensive organization management with address tracking and campaign associations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🎯</span>
              Campaigns
            </CardTitle>
            <CardDescription>
              Plan and execute medical health campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Create time-bound health campaigns with employee assignments and progress tracking.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>👥</span>
              Employees
            </CardTitle>
            <CardDescription>
              Track employee health and medical records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              FHIR-compliant employee health records with OpenMRS integration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🔧</span>
              Workstations
            </CardTitle>
            <CardDescription>
              Manage workplace environments and risks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Track professional risks and workplace conditions for occupational health.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🔒</span>
              Security
            </CardTitle>
            <CardDescription>
              Enterprise-grade security and compliance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              JWT authentication, role-based access control, and FHIR compliance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>📊</span>
              Analytics
            </CardTitle>
            <CardDescription>
              Health insights and reporting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Coming soon: Advanced analytics and health trend reporting.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Status Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">System Status</h2>
        <div className="flex gap-2 justify-center flex-wrap">
          <Badge variant="default">Backend API Ready</Badge>
          <Badge variant="secondary">Frontend In Development</Badge>
          <Badge variant="outline">FHIR Compatible</Badge>
        </div>
      </div>
    </div>
  );
}
