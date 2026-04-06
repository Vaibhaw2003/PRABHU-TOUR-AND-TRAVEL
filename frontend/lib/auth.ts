import { cookies } from 'next/headers'

const ADMIN_SESSION_COOKIE = 'admin_session'
const SESSION_TOKEN = 'prabhu_admin_authenticated'

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)
  return session?.value === SESSION_TOKEN
}

export async function createAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_SESSION_COOKIE, SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  })
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_SESSION_COOKIE)
}

export function verifyPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD environment variable is not set')
    return false
  }
  return password === adminPassword
}
