import { DashboardStats } from "@/components/dashbord/Hero/dashboard-status";
import { DashboardCharts } from "@/components/dashbord/Hero/dashboard-charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { getUserData } from "@/utils/actions";
import { UserData } from "@/utils/Type";

export default async function DashboardPage() {
  const userData: UserData = await getUserData();
  if (userData?.name == null) {
    return <h1>No user data available</h1>;
  }
  const { name } = userData;
  return (
    <div className="min-h-screen  k flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-5">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-black to-gray-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 animate-in slide-in-from-left duration-500">
                  Welcome back, {name}! 👋
                </h1>
                <p className="text-blue-100 animate-in slide-in-from-left duration-500 delay-200">
                  Heres whas happening with your business today.
                </p>
              </div>
              <div className="hidden md:block animate-in slide-in-from-right duration-500">
                <div className="text-right">
                  <div className="text-2xl font-bold">$45,231</div>
                  <div className="text-blue-100">Total Revenue</div>
                </div>
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <DashboardStats />
          {/* Charts and Analytics */}
          <DashboardCharts />
          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-2">
              {/* <DashboardQuickActions /> */}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="font-medium text-green-700 dark:text-green-300">
                      delivered
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      Operational
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div>
                    <div className="font-medium text-red-700 dark:text-red-300">
                      shipped
                    </div>
                    <div className="text-sm text-red-600 dark:text-red-400">
                      Operational
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
                  <div>
                    <div className="font-medium text-yellow-700 dark:text-yellow-300">
                      pending
                    </div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-400">
                      Degraded
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div>
                    <div className="font-medium text-blue-700 dark:text-blue-300">
                      processing
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      Operational
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
