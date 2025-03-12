# Email Signature Generator - Quickstart Guide

A modern email signature generator built with Vue.js that allows users to create, customize, and manage professional email signatures.

**Current Version:** 2.0.0

![Preview](msmc-preview.gif)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS Account (for image upload functionality)

## Quick Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd email-signature-generator
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
Create a `.env` file in the root directory:

```env
VUE_APP_AWS_S3_REGION=your-aws-region
VUE_APP_AWS_S3_ID=your-aws-access-key-id
VUE_APP_AWS_S3_KEY=your-aws-secret-access-key
VUE_APP_AWS_S3_BASKET=your-s3-bucket-name
VUE_APP_AWS_S3_URL=your-s3-bucket-url
VUE_APP_GA=your-google-analytics-id
```

4. **Start development server**

```bash
npm run serve
# or
yarn serve
```

5. **Build for production**

```bash
npm run build
# or
yarn build
```

## Migration Guide (1.x to 2.0)

### Breaking Changes

- Vue 2.x to Vue 3.x migration
- Vuex to Pinia state management
- Element UI to Element Plus
- AWS SDK v2 to v3

### Step-by-Step Migration

1. **Backup Your Project**

```bash
# Create a backup of your current project
cp -r email-signature-generator email-signature-generator-backup
```

2. **Update Dependencies**

```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install new dependencies
npm install
```

3. **Update Vue Components**

- Convert Options API to Composition API
- Update template syntax for Vue 3

```vue
<!-- Old Format -->
<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  }
}
</script>

<!-- New Format -->
<template>
  <div>{{ message }}</div>
</template>
<script setup>
import { ref } from 'vue'
const message = ref('Hello')
</script>
```

4. **State Management Migration**

- Convert Vuex stores to Pinia

```js
// Old Vuex Store
export default {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

// New Pinia Store
import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  state: () => ({ ... }),
  actions: { ... }
})
```

5. **UI Component Updates**

- Replace Element UI with Element Plus

```js
// Old imports
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// New imports
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```

6. **AWS SDK Migration**

- Update AWS S3 implementation

```js
// Old AWS SDK v2
import AWS from 'aws-sdk'
const s3 = new AWS.S3()

// New AWS SDK v3
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
const s3Client = new S3Client(config)
```

7. **TypeScript Integration**

- Add TypeScript configuration
- Convert .js files to .ts
- Add type definitions

```bash
# Add TypeScript
npm install typescript @types/node --save-dev

# Initialize TypeScript config
npx tsc --init
```

### Data Migration

1. **Local Storage**

- IndexedDB data structure remains compatible
- No action required for existing signatures

2. **Project Files**

- Templates remain compatible
- Social media configurations need manual update

### Post-Migration Steps

1. **Testing**

```bash
# Run tests
npm run test

# Check for type errors
npm run type-check
```

2. **Verify Features**

- Test signature generation
- Verify image uploads
- Check social media integration
- Validate template rendering

3. **Performance Verification**

- Run Lighthouse audit
- Check bundle size
- Verify load times

### Common Migration Issues

1. **Component Lifecycle Changes**

- `beforeDestroy` → `onBeforeUnmount`
- `destroyed` → `onUnmounted`

2. **Event Handling**

- `.native` modifier removed
- `$listeners` replaced with `v-on="$attrs"`

3. **Slots Syntax**

- Scope slots simplified
- Named slots syntax updated

### Need Help?

If you encounter issues during migration:

1. Check the [Migration Guide](https://v3.vuejs.org/guide/migration/introduction.html)
2. Review [Element Plus Migration](https://element-plus.org/en-US/guide/migration.html)
3. Open an issue in our repository

## Usage Guide

### Creating a New Signature

1. Click "New Project" to start a new signature
2. Choose a template from the available options
3. Fill in your personal/company information
4. Upload your profile picture or company logo (supported formats: JPG, PNG)
5. Customize colors and layout options
6. Preview your signature in real-time

### Managing Signatures

- **Save**: Your signatures are automatically saved locally
- **Export**: Copy the generated HTML or preview the signature
- **Share**: Share your signature template with others
- **Edit**: Modify existing signatures anytime
- **Delete**: Remove unwanted signatures from your list

### Image Upload Requirements

- Supported formats: JPG, PNG
- Maximum file size: 5MB
- Recommended dimensions:
  - Profile pictures: 200x200px
  - Logos: 300x100px

### Template Customization

1. **Basic Information**
   - Name and title
   - Contact details
   - Company information

2. **Style Options**
   - Color schemes
   - Font selection
   - Layout alignment
   - Spacing adjustments

3. **Social Media Links**
   - Add/remove social media profiles
   - Customize icon styles
   - Arrange icon order

4. **Additional Features**
   - Disclaimer text
   - Mobile app badges
   - Custom links
   - Banner images

## Troubleshooting

### Common Issues

1. **Images not uploading**
   - Verify AWS credentials in `.env`
   - Check file size and format
   - Ensure S3 bucket permissions are correct

2. **Changes not saving**
   - Clear browser cache
   - Check IndexedDB storage permissions
   - Ensure sufficient storage space

3. **Template not rendering**
   - Try different browser
   - Clear browser cache
   - Check console for errors

### Support

For additional support:

- Check the [Issues](issues) section
- Contact the development team
- Review the documentation

## Development

### Project Structure

```
email-signature-generator/
├── src/
│   ├── components/    # Vue components
│   ├── store/        # Vuex store modules
│   ├── services/     # API and services
│   ├── utils/        # Utility functions
│   └── assets/       # Static assets
├── public/           # Public static files
└── scripts/         # Build and deploy scripts
```

### Key Features

- Vue.js + Vuex for state management
- Element UI components
- AWS S3 integration for image storage
- IndexedDB for local storage
- Responsive design
- Real-time preview
- Multiple template options

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
