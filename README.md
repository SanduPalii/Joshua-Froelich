# Joshua Froelich - Official Merch & Music Website

A professional e-commerce website for Christian Rock musician Joshua Froelich, featuring merchandise sales, music releases, and an admin panel for order management.

![Christian Rock Music](assets/images/hero-image.jpg)

## 🎸 Features

### Customer-Facing
- **Merchandise Store**: T-shirts with size selection (S-4XL), CDs, and digital downloads
- **Shopping Cart**: Persistent cart with localStorage, floating cart button, and drawer UI
- **Checkout System**: Integrated checkout with shipping options and order confirmation
- **Music Releases**: EP showcase and track listings
- **Tour Dates**: Concert schedule with ticket purchasing
- **Responsive Design**: Mobile-friendly interface with Bootstrap 5

### Admin Panel
- **Order Management**: View, filter, and search all orders
- **Order Details**: Update order status, add tracking numbers, and internal notes
- **Shipping Integration**: Support for USPS, FedEx, UPS, and DHL
- **Invoice Generation**: Print professional invoices
- **Data Export**: Export orders to CSV
- **Backup & Restore**: Full order data backup/restoration
- **Tax Settings**: Configure tax rates by country
- **Secure Access**: SHA-256 password authentication

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/joshua-froelich.git
   cd joshua-froelich
   ```

2. **Open in browser**
   ```bash
   open index.html
   # Or use a local server (recommended):
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Access Admin Panel**
   - Navigate to `admin.html`
   - Password: `CyrusReigns2024!Secure#Admin`
   - ⚠️ **Change this password before deploying to production!**

## 📁 Project Structure

```
joshua-froelich/
├── index.html              # Homepage
├── about.html              # About page
├── music.html              # Music releases
├── merch.html              # Merchandise store
├── contact.html            # Contact form
├── checkout.html           # Checkout page
├── admin.html              # Admin panel (password protected)
├── assets/
│   ├── css/
│   │   ├── main.css        # Custom styles
│   │   └── cart.css        # Cart & checkout styles
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── cart.js         # Shopping cart
│   │   ├── checkout.js     # Checkout logic
│   │   ├── admin.js        # Admin panel
│   │   ├── tour.js         # Tour dates
│   │   ├── slider.js       # Image sliders
│   │   └── track.js        # Music player
│   ├── images/             # Images and graphics
│   └── fonts/              # Custom fonts
├── vendor/                 # Third-party libraries (Bootstrap, etc.)
├── Original Recordings/        # Source audio files
└── README.md                   # This file
```

## 🛒 Cart & Checkout System

### localStorage Keys
- `cr_cart` - Shopping cart items
- `cr_orders` - Order history
- `cr_admin_session` - Admin authentication
- `cr_tax_settings` - Tax configuration

### Cart Item Structure
```javascript
{
  id: "tee",
  name: "Reigning Over Darkness — Tee",
  price: 24.00,
  quantity: 1,
  size: "L"  // For apparel items
}
```

## 🔐 Security Notes

### Current Implementation
- Admin password is hashed using SHA-256
- Session-based authentication (sessionStorage)
- **⚠️ Important**: This is a client-side demo implementation

### Production Recommendations
1. **Move authentication to server-side**
2. **Remove password from source code comments**
3. **Implement proper backend API**
4. **Use HTTPS** (required for crypto.subtle.digest)
5. **Add CORS protection**
6. **Implement rate limiting**
7. **Use environment variables for sensitive data**

## 🎨 Customization

### Update Product Catalog
Edit the `PRODUCTS` object in [`assets/js/cart.js`](assets/js/cart.js):
```javascript
var PRODUCTS = {
  cd: { name: 'First EP — CD', price: 12.00, image: 'assets/images/merch/02-cd.jpg' },
  tee: { name: 'Your Product', price: 24.00, image: 'path/to/image.jpg' }
};
```

### Modify T-Shirt Sizes
Update `TEE_SIZES` array in [`assets/js/cart.js`](assets/js/cart.js):
```javascript
var TEE_SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
```

### Change Tax Rates
Access admin panel → Settings tab → Update tax percentages

## 🧪 Testing

### Manual Testing Checklist
- [ ] Add items to cart
- [ ] Modify quantities and sizes in cart
- [ ] Remove items from cart
- [ ] Complete checkout process
- [ ] Verify order appears in admin panel
- [ ] Update order status
- [ ] Generate invoice
- [ ] Export orders to CSV
- [ ] Test on mobile devices
- [ ] Test in different browsers

## 📦 Deployment

### Docker (VPS / Cloud Server)

1. **On your VPS**, clone the repo and build:
   ```bash
   git clone https://github.com/yourusername/joshua-froelich.git
   cd joshua-froelich
   docker compose up -d --build
   ```
   The site will be available on port 80.

2. **With custom domain / HTTPS** (recommended for production):
   - Use a reverse proxy (nginx, Caddy, Traefik) in front of the container
   - Or add Certbot/Let's Encrypt for SSL

3. **Stop the container**:
   ```bash
   docker compose down
   ```

### GitHub Pages (Static Hosting)
```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Select branch: main
# Select folder: / (root)
```

### Traditional Web Hosting
1. Upload all root files to your web server
2. Ensure `index.html` is in the root directory
3. Configure `.htaccess` if using Apache
4. Enable HTTPS (required for admin authentication)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **JavaScript (ES5)** - Vanilla JS, no framework dependencies
- **Bootstrap 5** - UI framework
- **Font Awesome** - Icons
- **localStorage** - Client-side data persistence
- **Web Crypto API** - Password hashing

## 📄 License

Copyright © 2024 Joshua Froelich / Cyrus Reigns Records. All rights reserved.

**Important**: This repository contains copyrighted music, artwork, and branding. Please contact for licensing inquiries.

## 🤝 Contributing

This is a personal artist website. For bug reports or feature suggestions, please open an issue.

## 📞 Contact

- **Website**: [joshuafroelich.com](#)
- **Email**: [contact@joshuafroelich.com](#)
- **Social Media**: [Facebook](https://web.facebook.com/joshuafroelich), [Instagram](https://www.instagram.com/joshuafroelich/), [YouTube](https://www.youtube.com/@cherifroelich2561)

## 🎵 About Cyrus Reigns

Cyrus Reigns is a Christian Rock project bringing powerful music with a faith-based message. The project combines heavy rock aesthetics with spiritual themes, creating a unique sound that resonates with believers and rock fans alike.

---

**Made with ❤️ for the glory of God**
