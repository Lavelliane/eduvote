export { default } from 'next-auth/middleware'

export const config = { matcher: ['/admin', '/candidates/:path', '/dashboard', '/vote', '/voting-success'] }
