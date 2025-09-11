# Lavanya Foundation - Admin Panel

A comprehensive admin panel for the Lavanya Foundation website with full customization capabilities using Firebase as the backend.

## Features

### 🔐 Authentication
- Secure login system with Firebase Authentication
- Protected admin routes
- Session management

### 🎛️ Full Website Customization
- **General Settings**: Website title, logo text
- **Home Section**: Hero title, subtitle, background image
- **About Section**: Mission and vision text, about image
- **Key Initiatives**: Add, edit, delete project cards with images and descriptions
- **Events & Activities**: Manage upcoming events with dates and details
- **Support Products**: Product management with pricing and descriptions
- **Contact Information**: Address, phone, email, office hours

### 📊 Dashboard
- Real-time statistics
- Volunteer applications management
- Donation records
- Content management overview

### 🖼️ Media Management
- Image URL input for all images
- Real-time image preview
- No file upload required

## Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable the following services:
   - **Authentication** (Email/Password)
   - **Firestore Database**

### 2. Firebase Configuration

1. In your Firebase project, go to Project Settings
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web
4. Register your app and copy the configuration
5. Replace the Firebase config in the following files:
   - `admin.js` (line 2-8)
   - `login.html` (line 200-206)

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 3. Firestore Database Rules

Set up the following security rules in your Firestore Database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write website settings
    match /website/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to manage projects
    match /projects/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to manage events
    match /events/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to manage products
    match /products/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Allow public read access to website content
    match /website/settings {
      allow read: if true;
    }
    
    // Allow public write access for volunteer applications
    match /volunteers/{document} {
      allow read: if request.auth != null;
      allow write: if true;
    }
    
    // Allow public write access for donations
    match /donations/{document} {
      allow read: if request.auth != null;
      allow write: if true;
    }
  }
}
```

### 4. Image Management

The admin panel now uses image URLs instead of file uploads:
- Enter image URLs directly in the form fields
- Images are previewed in real-time
- No Firebase Storage required
- Works with any publicly accessible image URL

### 5. Create Admin User

1. In Firebase Console, go to Authentication
2. Click "Add user"
3. Enter the admin email and password
4. Use these credentials to log into the admin panel

### 6. File Structure

```
lav/
├── index.html          # Main website
├── admin.html          # Admin panel
├── login.html          # Admin login
├── admin.js            # Admin panel functionality
└── README.md           # This file
```

## Usage

### Accessing the Admin Panel

1. Navigate to `login.html` in your browser
2. Enter your admin credentials
3. You'll be redirected to the admin panel

### Managing Content

#### General Settings
- Update website title and logo text
- Changes apply immediately to the main website

#### Home Section
- Customize hero title and subtitle
- Enter hero background image URL
- Preview changes in real-time

#### About Section
- Edit mission and vision statements
- Enter about section image URL
- All changes are saved to Firebase

#### Key Initiatives
- Add new initiatives with title, description, and image URL
- Edit existing initiatives
- Delete initiatives
- Reorder initiatives using drag-and-drop

#### Events & Activities
- Add upcoming events with dates
- Enter event image URLs
- Manage event descriptions
- Delete past events

#### Support Products
- Add products with pricing
- Enter product image URLs
- Manage product descriptions
- Set custom pricing

#### Contact Information
- Update address, phone, email
- Set office hours
- All contact details are synchronized

### Dashboard Features

- **Statistics**: View total volunteers, donations, events, and products
- **Volunteer Management**: Review and manage volunteer applications
- **Donation Tracking**: Monitor donation records and payment status
- **Content Overview**: Quick access to all website sections

## Security Features

- **Authentication Required**: All admin functions require login
- **Session Management**: Automatic logout on inactivity
- **Image URLs**: Images referenced via URLs (no storage costs)
- **Data Validation**: All inputs are validated before saving

## Technical Details

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: ES6+ with async/await
- **Font Awesome**: Icons

### Backend
- **Firebase Authentication**: User management
- **Firestore Database**: NoSQL document storage
- **Image URLs**: External image hosting (no storage costs)
- **Real-time Updates**: Live data synchronization

### Features
- **Responsive Design**: Works on all devices
- **Image URLs**: Enter image URLs for instant preview
- **Real-time Preview**: See changes immediately
- **Error Handling**: Comprehensive error messages
- **Loading States**: Visual feedback during operations

## Customization

### Adding New Sections

1. Add the section to the admin panel HTML
2. Create corresponding Firebase collection
3. Add JavaScript functions for CRUD operations
4. Update the main website to fetch and display data

### Styling

The admin panel uses a clean, modern design with:
- Consistent color scheme (#e74c3c primary)
- Smooth animations and transitions
- Responsive grid layouts
- Professional typography

### Extending Functionality

The modular design makes it easy to add new features:
- Form validation
- Advanced image editing
- Bulk operations
- Export functionality
- Analytics integration

## Troubleshooting

### Common Issues

1. **Firebase not initialized**: Check your Firebase configuration
2. **Authentication errors**: Verify admin user exists in Firebase
3. **Image not loading**: Check if the image URL is accessible
4. **Data not saving**: Verify Firestore rules allow write access

### Debug Mode

Enable console logging by adding this to admin.js:
```javascript
// Enable debug mode
const DEBUG = true;
if (DEBUG) {
    console.log('Admin panel loaded');
}
```

## Support

For technical support or feature requests, please contact the development team.

---

**Note**: Remember to replace all Firebase configuration placeholders with your actual Firebase project credentials before deploying. 