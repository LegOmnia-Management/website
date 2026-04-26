# legOmnia Deployment Guide

## Overview

legOmnia consists of three independent services:
- **Static Site**: Pure HTML/CSS/JS deployed on OVH
- **Frontend Admin**: Next.js application (Node.js environment)
- **Backend API**: Express.js application (Node.js environment)

## Static Site Deployment (OVH)

### Prerequisites
- OVH shared hosting or VPS
- SSH/FTP access
- Domain pointed to your hosting

### Deployment Steps

1. **Upload Static Files via FTP/SCP:**
   ```bash
   # All HTML files
   main.html, omnia.html, omniscan.html, geode.html, ...
   
   # All static assets
   blog-integration.js
   load-navbar.js
   config.js
   
   # Configuration files
   .htaccess
   robots.txt
   sitemap.xml
   
   # Any images/media folders
   images/
   ```

2. **Verify Permissions:**
   - Directories: 755 (read/execute)
   - Files: 644 (read-only)

3. **Test Site:**
   - Visit https://www.legomnia.com
   - Check browser console for any errors
   - Verify API integration works (blog articles load)

### OVH Configuration

The `.htaccess` file handles:
- ✅ HTTPS enforcement
- ✅ GZIP compression
- ✅ Browser caching
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, CSP)
- ✅ Hotlink protection
- ✅ Block access to hidden files

## Backend API Deployment

### Hosting Options
- **Scaleway Kubernetes**: Production-grade
- **OVH Cloud Apps**: Managed Node.js
- **Self-hosted VPS**: Full control

### Environment Setup

1. **Create `.env.local` with production values:**
   ```bash
   NODE_ENV=production
   PORT=3001
   JWT_SECRET=<generate-secure-random-32-char-key>
   DB_HOST=<your-postgres-host>
   DB_PORT=5432
   DB_USER=<database-user>
   DB_PASSWORD=<secure-password>
   DB_NAME=legomnia_db
   DB_SSL=true
   ALLOWED_ORIGINS=https://www.legomnia.com,https://admin.legomnia.com
   ```

2. **Install Dependencies:**
   ```bash
   cd backend
   npm install
   npm run build
   ```

3. **Database Setup:**
   - Create PostgreSQL database on Scaleway
   - Run migrations (create articles/videos tables)
   - Set up SSL connection

4. **Start Server:**
   ```bash
   npm start
   # Or use process manager: pm2 start dist/index.js
   ```

5. **Verify Health:**
   ```bash
   curl https://api.legomnia.com/health
   # Should return: { "status": "ok", "database": "connected" }
   ```

## Frontend Admin Deployment

### Prerequisites
- Node.js 18+ runtime
- npm or yarn

### Environment Setup

1. **Create `frontend/.env.local`:**
   ```bash
   NEXT_PUBLIC_API_URL=https://api.legomnia.com
   ```

2. **Build for Production:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

3. **Deploy Built Files:**
   - Option A: OVH Cloud Apps (Next.js ready)
   - Option B: Self-hosted with PM2
   ```bash
   npm run start
   # Or with PM2:
   pm2 start npm --name "legomnia-frontend" -- start
   ```

4. **Verify:**
   - Visit https://admin.legomnia.com
   - Login should redirect to /admin/login
   - Dashboard should load after authentication

## Security Checklist

### Backend
- [ ] JWT_SECRET is strong (32+ random characters)
- [ ] Database SSL enabled
- [ ] CORS restricted to known origins
- [ ] Rate limiting enabled (helmet + express-rate-limit)
- [ ] Request size limit enforced (1MB)
- [ ] Error messages don't leak sensitive info
- [ ] All write endpoints require authentication

### Frontend
- [ ] API requests use secure tokens
- [ ] Admin routes protected with auth guard
- [ ] No hardcoded credentials in code
- [ ] All API endpoints properly typed (TypeScript)

### Static Site
- [ ] HTTPS enforced
- [ ] Security headers in .htaccess
- [ ] Blog API calls validated
- [ ] XSS protection (no innerHTML with user data)
- [ ] API timeout configured (5 seconds)

## Monitoring & Maintenance

### Health Checks
```bash
# Backend health
curl https://api.legomnia.com/health

# Frontend accessibility
curl https://admin.legomnia.com

# Static site 
curl -I https://www.legomnia.com
```

### Log Locations
- **Backend**: stdout/stderr or PM2 logs
- **Frontend**: PM2 logs
- **Static Site**: OVH access/error logs

### Regular Tasks
- [ ] Update npm dependencies monthly
- [ ] Rotate JWT secret quarterly
- [ ] Monitor API error rates
- [ ] Check broken links in sitemap
- [ ] Review security headers with online tools

## Troubleshooting

### Blog Articles Not Loading
1. Check config.js is loaded in HTML
2. Verify API_URL matches backend URL
3. Check browser console for CORS errors
4. Verify backend health endpoint

### Admin Login Fails
1. Check JWT_SECRET is set in backend
2. Verify database connection
3. Check CORS origins configuration
4. Review network tab for 401 responses

### HTTPS/SSL Issues
1. Verify certificate is valid
2. Check .htaccess HTTPS redirect
3. Ensure backend responds on HTTPS
4. Test with: `curl -I https://your-domain.com`

## Rollback Plan

If issues occur in production:

1. **Static Site**: Revert to previous HTML version via FTP
2. **Backend**: Keep two versions running, switch load balancer
3. **Frontend**: Use Next.js preview deployment

## Post-Deployment Verification

- [ ] All pages load (index, omnia, omniscan, geode, blog)
- [ ] Blog articles display correctly
- [ ] Admin login works
- [ ] Create/edit/delete articles in admin
- [ ] API responds with proper security headers
- [ ] No console errors in browser
- [ ] Mobile responsive
- [ ] Lighthouse score > 80

## Support

For issues:
1. Check backend logs: `pm2 logs`
2. Check frontend logs: `pm2 logs` or next build output
3. Verify environment variables are set
4. Check database connectivity
5. Review security headers with: https://securityheaders.com
