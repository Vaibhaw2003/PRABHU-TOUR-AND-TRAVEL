import { redirect } from 'next/navigation'
import { verifyAdminSession } from '@/lib/auth'
import { AdminSidebar } from '@/components/admin-sidebar'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = await verifyAdminSession()

  if (!isAuthenticated) {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  )
}
