# Debug Instructions for Firebase Loading Issues

## Problem
Our Key Initiatives (Projects) and Events & Activities are not loading on the website, but are updated in Firebase.

## Debugging Steps

### 1. Check Browser Console
1. Open the main website: `http://localhost:8000/index.html`
2. Open browser developer tools (F12)
3. Go to the Console tab
4. Look for any error messages or debug logs
5. The console should show:
   - "DOM Content Loaded - Starting Firebase initialization..."
   - "Initializing website with Firebase data..."
   - "Loading projects from Firebase..."
   - "Projects loaded: [array of projects]"
   - "Displaying projects: [array of projects]"

### 2. Test Firebase Connectivity
1. Open the debug page: `http://localhost:8000/debug-firebase.html`
2. This page will automatically test all Firebase collections
3. Check if projects and events collections have data
4. Look for any error messages

### 3. Check Collection Names
The website is looking for these collections:
- `projects` - for Key Initiatives
- `events` - for Events & Activities
- `products` - for Support Products
- `website` - for general settings

### 4. Verify Data Structure
Projects should have this structure:
```json
{
  "title": "Project Title",
  "description": "Project description",
  "image": "image_url",
  "order": 1
}
```

Events should have this structure:
```json
{
  "title": "Event Title",
  "description": "Event description",
  "date": "2024-03-15",
  "image": "image_url"
}
```

### 5. Common Issues and Solutions

#### Issue: "projectsContainer element not found"
- **Cause**: HTML element with ID `projectsContainer` doesn't exist
- **Solution**: Check if the HTML structure is correct

#### Issue: "OrderBy failed"
- **Cause**: Documents don't have the required fields for ordering
- **Solution**: The code now falls back to loading without orderBy

#### Issue: "No projects found"
- **Cause**: The projects collection is empty
- **Solution**: Add projects through the admin panel

#### Issue: Firebase connection failed
- **Cause**: Network issues or incorrect Firebase config
- **Solution**: Check internet connection and Firebase configuration

### 6. Manual Testing

#### Test 1: Check if containers exist
```javascript
// Run this in browser console
console.log('Projects container:', document.getElementById('projectsContainer'));
console.log('Events container:', document.getElementById('eventsContainer'));
console.log('Products container:', document.getElementById('productsContainer'));
```

#### Test 2: Manually load data
```javascript
// Run this in browser console
db.collection('projects').get().then(snapshot => {
    const projects = [];
    snapshot.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() });
    });
    console.log('Manual projects load:', projects);
});
```

#### Test 3: Check Firebase connection
```javascript
// Run this in browser console
console.log('Firebase initialized:', firebase.apps.length > 0);
console.log('Firestore available:', !!firebase.firestore);
```

### 7. Expected Behavior

When working correctly, you should see:
1. **Console logs** showing data being loaded
2. **Projects section** showing dynamic content from Firebase
3. **Events section** showing dynamic content from Firebase
4. **Fallback content** if no data exists in Firebase

### 8. If Still Not Working

1. **Check Admin Panel**: Verify data is being saved correctly
2. **Check Firebase Console**: Verify data exists in Firestore
3. **Check Network Tab**: Look for failed requests
4. **Try Different Browser**: Rule out browser-specific issues
5. **Check Firebase Rules**: Ensure read permissions are correct

### 9. Firebase Security Rules

Make sure your Firestore rules allow read access:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 10. Contact Information

If you're still having issues:
1. Check the browser console for specific error messages
2. Note the exact error messages
3. Check if data exists in Firebase Console
4. Verify the collection names match exactly

## Quick Fixes

### If projects/events are empty:
1. Go to admin panel: `http://localhost:8000/admin.html`
2. Add some test projects and events
3. Refresh the main website

### If containers are missing:
1. Check the HTML structure in `index.html`
2. Ensure all container IDs are present

### If Firebase connection fails:
1. Check internet connection
2. Verify Firebase configuration
3. Check Firebase Console for any issues 