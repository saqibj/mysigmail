# Windows Deployment Guide

This guide provides step-by-step instructions for deploying the Email Signature Generator on Windows 10/11.

## System Requirements

### Hardware Requirements
- CPU: 2 cores or more
- RAM: 4GB minimum (8GB recommended)
- Storage: 1GB free space minimum
- Internet connection

### Software Requirements
- Windows 10/11 (64-bit)
- Node.js LTS (v14 or higher)
- Git
- Visual Studio Code (recommended) or any modern IDE
- Windows Terminal (recommended) or PowerShell

## Pre-Installation Steps

1. **Install Node.js**
   ```powershell
   # Using winget (Windows Package Manager)
   winget install OpenJS.NodeJS.LTS
   
   # Verify installation
   node --version
   npm --version
   ```

2. **Install Git**
   ```powershell
   winget install Git.Git
   
   # Verify installation
   git --version
   ```

3. **Install Windows Terminal (Optional but recommended)**
   ```powershell
   winget install Microsoft.WindowsTerminal
   ```

4. **Configure Git (if not already configured)**
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## Installation Steps

1. **Create Project Directory**
   ```powershell
   # Navigate to desired location (example: Documents)
   cd $env:USERPROFILE\Documents
   
   # Create and enter project directory
   mkdir email-signature-generator
   cd email-signature-generator
   ```

2. **Clone Repository**
   ```powershell
   git clone <repository-url> .
   ```

3. **Install Dependencies**
   ```powershell
   # Install dependencies
   npm install
   
   # If you encounter any permission errors, try:
   npm install --no-optional
   ```

4. **Configure Environment**
   ```powershell
   # Create .env file
   Copy-Item .env.example .env
   
   # Open .env in notepad to edit
   notepad .env
   ```
   
   Add your configuration:
   ```env
   VUE_APP_AWS_S3_REGION=your-aws-region
   VUE_APP_AWS_S3_ID=your-aws-access-key-id
   VUE_APP_AWS_S3_KEY=your-aws-secret-access-key
   VUE_APP_AWS_S3_BASKET=your-s3-bucket-name
   VUE_APP_AWS_S3_URL=your-s3-bucket-url
   VUE_APP_GA=your-google-analytics-id
   ```

## AWS S3 Setup

1. **Create AWS Account**
   - Visit [AWS Console](https://aws.amazon.com/console/)
   - Sign up for a new account or sign in

2. **Create S3 Bucket**
   - Open S3 service in AWS Console
   - Click "Create bucket"
   - Set bucket name and region
   - Enable public access (required for image hosting)

3. **Configure CORS**
   ```json
   [
       {
           "AllowedHeaders": ["*"],
           "AllowedMethods": ["GET", "PUT", "POST"],
           "AllowedOrigins": ["*"],
           "ExposeHeaders": []
       }
   ]
   ```

4. **Create IAM User**
   - Open IAM service
   - Create new user with S3 access
   - Save access key and secret key

## Development Server

1. **Start Development Server**
   ```powershell
   npm run serve
   ```

2. **Access Application**
   - Open browser: http://localhost:8080
   - Test basic functionality

## Production Deployment

1. **Build Application**
   ```powershell
   # Create production build
   npm run build
   
   # Verify build
   dir dist
   ```

2. **Serve Production Build (Optional)**
   ```powershell
   # Install serve globally
   npm install -g serve
   
   # Serve the dist folder
   serve -s dist
   ```

3. **Deploy to Web Server**
   - Copy contents of `dist` folder to your web server
   - Configure web server (IIS/Apache/Nginx)

### IIS Deployment

1. **Install IIS**
   - Open Windows Features
   - Enable Internet Information Services
   - Enable IIS Management Console

2. **Configure IIS**
   ```powershell
   # Install URL Rewrite Module (if not installed)
   Start-Process "https://www.iis.net/downloads/microsoft/url-rewrite"
   
   # Create new website in IIS
   New-WebSite -Name "EmailSignatureGenerator" -Port 80 -PhysicalPath "C:\inetpub\wwwroot\email-signature-generator"
   ```

3. **Add web.config**
   Create `web.config` in the dist folder:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
     <system.webServer>
       <rewrite>
         <rules>
           <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
             <match url="(.*)" />
             <conditions logicalGrouping="MatchAll">
               <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
               <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
             </conditions>
             <action type="Rewrite" url="/" />
           </rule>
         </rules>
       </rewrite>
     </system.webServer>
   </configuration>
   ```

## Troubleshooting

### Common Windows Issues

1. **Node.js Installation**
   - Error: 'node' is not recognized
   - Solution: Add Node.js to PATH or reinstall

2. **Permission Errors**
   ```powershell
   # Run PowerShell as Administrator
   Start-Process powershell -Verb RunAs
   
   # Set execution policy
   Set-ExecutionPolicy RemoteSigned
   ```

3. **Port Conflicts**
   ```powershell
   # Find process using port 8080
   netstat -ano | findstr :8080
   
   # Kill process
   taskkill /PID <PID> /F
   ```

4. **Build Errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `Remove-Item -Recurse -Force node_modules`
   - Reinstall: `npm install`

## Maintenance

1. **Update Dependencies**
   ```powershell
   # Check outdated packages
   npm outdated
   
   # Update packages
   npm update
   ```

2. **Backup**
   ```powershell
   # Backup dist folder
   Copy-Item -Recurse dist dist_backup
   
   # Backup database
   # If using IIS, backup the application pool and site config
   ```

3. **Monitoring**
   - Enable IIS logging
   - Configure Windows Event Viewer
   - Set up monitoring tools (optional)

## Security Considerations

1. **File Permissions**
   ```powershell
   # Set appropriate NTFS permissions
   icacls "C:\inetpub\wwwroot\email-signature-generator" /grant "IIS_IUSRS:(OI)(CI)(RX)"
   ```

2. **SSL/TLS Configuration**
   - Install SSL certificate
   - Enable HTTPS in IIS
   - Force HTTPS redirect

3. **Environment Variables**
   - Secure storage of credentials
   - Regular rotation of AWS keys
   - Use Windows Environment Variables for production

## Support

For additional support:
1. Check the [Issues](issues) section
2. Review Windows-specific documentation
3. Contact the development team 