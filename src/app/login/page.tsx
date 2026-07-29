import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-navy">
            Authentication Disabled
          </CardTitle>
          <CardDescription>
            This site is currently running in static mode without authentication.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-6">
            Login and signup have been removed. Browse the public pages to learn more about our courses.
          </p>
          <Link
            href="/"
            className="inline-flex h-11 px-8 items-center justify-center rounded-lg bg-navy text-white font-medium hover:bg-navy-light transition-colors"
          >
            Back to Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
