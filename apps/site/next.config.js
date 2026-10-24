/** Export statico: la cartella `out/` va caricata cosi' com'e' su qualunque hosting (FTP, cPanel, Cloudflare Pages, Netlify, Vercel). */
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ['@scala-sites/core', '@scala-sites/themes'],
}
