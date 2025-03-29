# Whitelabel ERPNext Customization

Complete branding solution for ERPNext v15 with mobile-optimized login screen.

## 🔑 Key Features Implemented

### 🎨 Complete Branding Customization
- **Logo Replacement**: Custom logo (`applogo.svg`) across entire application
- **Favicon Update**: Custom favicon (`favicon.ico`) for all browser tabs
- **Color Scheme**: Consistent branding colors throughout UI

### 📱 Mobile-Optimized Login Experience
- **Responsive Layout**: 
  - Desktop: 65/35 split with background images
  - Mobile: Full-width simplified login form
- **Touch-Friendly**:
  - Larger input fields and buttons
  - Optimized keyboard interactions

### 🖥️ Desktop Login Enhancements
- **Visual Design**:
  - Left section with dynamic marquee (partner logos)
  - Right section with clean login form
- **Branding Elements**:
  - Company logo positioning
  - Copyright information display

### 🧹 UI Cleanup
- Removed default help menu
- Replaced default footer with custom text

## ⚙️ Installation

### Prerequisites
- ERPNext v15 installed
- Bench configured
- Git installed

### Installation Steps
```bash
# Clone the repository
bench get-app whitelabel https://github.com/routeget/erpnext15-whitelabel

# Install on your site
bench --site yoursite.com install-app whitelabel

# Build assets
bench build
bench clear-cache
bench restart
