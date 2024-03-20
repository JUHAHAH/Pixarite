import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Routes that are public
  publicRoutes: ['/api/webhooks(.*)', '/api(.*)'],
  // Ignored routes
  ignoredRoutes: ['/haha'],
  // Rest url reamin protected
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
