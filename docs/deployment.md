# Deployment and Handover Notes

The MangoPorter v2 website is built using **Vite**, a modern frontend build tool.

## 1. Local Development
To run the project locally for further edits:
```bash
npm install
npm run dev
```

## 2. Production Build
To generate the final optimized files for deployment:
```bash
npm run build
```
This will create a `dist/` folder.

## 3. Recommended Hosting
Since this is a static site, you can host it for FREE (or very low cost) on:
- **Vercel**: Easiest integration (connect your GitHub repo).
- **Netlify**: Just drag and drop the `dist/` folder.
- **GitHub Pages**: Ideal if your code is already on GitHub.

## 4. Final Checklist before Launch
- [ ] Update `EmailJS` credentials in `email-service.js`.
- [ ] Update `Google Sheet CSV URL` in `society-data.js`.
- [ ] Replace placeholder images with your actual farm photos (if preferred).
- [ ] Point your domain (`mangoporter.in`) to the new hosting nameservers.
