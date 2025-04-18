# Technical Documentation - Sri Balaji Student Xerox Web Application

## System Architecture

The Sri Balaji Student Xerox web application is built using a modern web architecture that allows for GitHub Pages deployment while maintaining the functionality of the original Android application.

### Architecture Overview

The application consists of:

1. **Static Frontend**: A Next.js application deployed to GitHub Pages
2. **Serverless Backend**: API routes implemented as serverless functions
3. **Storage Solution**: Mock storage for print job files (would be replaced with cloud storage in production)
4. **Printer Integration**: Communication with Canon 4545 printer via IPP

### Component Structure

#### Frontend Components

1. **Layout Components**
   - `Layout.js`: Main layout wrapper with responsive design
   - `Navbar.js`: Navigation component with role-based options
   - `Footer.js`: Application footer with links and information

2. **Student Interface Components**
   - `QRScanner.js`: Web camera integration for QR code scanning
   - `FileUploader.js`: Drag-and-drop file upload component
   - `PrintOptions.js`: Form for configuring print job options
   - `JobTracking.js`: List and details of submitted print jobs

3. **Operator Interface Components**
   - `OperatorDashboard.js`: Main view for print shop operators
   - `PrinterStatus.js`: Display of printer status and controls
   - `QRGenerator.js`: Tool for generating print shop QR codes

4. **Utility Components**
   - Custom hooks for API communication and feature integration

#### Backend Services

1. **API Modules**
   - `jobApi.js`: Job management functions
   - `fileApi.js`: File handling functions
   - `printerApi.js`: Printer communication functions
   - `qrApi.js`: QR code handling functions

2. **API Routes**
   - `/api/jobs`: Job management endpoints
   - `/api/files/upload`: File upload endpoints
   - `/api/printer`: Printer communication endpoints
   - `/api/printshops/qr`: QR code handling endpoints

### Integration Modules

1. **QR Code Integration**
   - `qrScanner.js`: Utility for QR code scanning
   - `useQRScanner.js`: React hook for QR scanning functionality

2. **Printer Integration**
   - `printerConnection.js`: Utility for printer communication
   - `usePrinterConnection.js`: React hook for printer functionality

3. **API Integration**
   - `apiClient.js`: Client for API communication
   - `useApi.js`: React hook for API functionality

## Technology Stack

### Frontend
- **Next.js**: React framework for static site generation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **jsQR**: Library for QR code scanning
- **Axios**: HTTP client for API requests

### Backend
- **Next.js API Routes**: Serverless functions for backend logic
- **Mock Data**: Simulated database for development and demo

### Deployment
- **GitHub Pages**: Static site hosting
- **GitHub Actions**: CI/CD pipeline for automated deployment

## Data Flow

### Student Print Job Submission Flow
1. Student scans QR code using device camera
2. QR code data sent to backend to identify print shop
3. Student selects files for upload
4. Files uploaded to storage
5. Student configures print options
6. Job submission request sent to backend
7. Backend creates job record and returns job ID
8. Student receives confirmation and job tracking information

### Operator Job Management Flow
1. Operator logs into dashboard
2. Backend retrieves pending jobs for the print shop
3. Operator reviews job details
4. Operator approves or rejects job
5. If approved, backend sends job to printer
6. Printer processes job and reports status
7. Backend updates job status

## API Endpoints

### Jobs API
- `GET /api/jobs`: Get all jobs (with optional studentId filter)
- `POST /api/jobs`: Submit a new job
- `GET /api/jobs/[jobId]`: Get job by ID
- `PUT /api/jobs/[jobId]`: Update job status
- `DELETE /api/jobs/[jobId]`: Cancel a job

### Files API
- `POST /api/files/upload/[jobId]`: Upload a file for a job
- `POST /api/files/upload/[jobId]/batch`: Upload multiple files for a job

### Printer API
- `GET /api/printer/status`: Get printer status
- `POST /api/printer/print/[jobId]`: Send job to printer

### QR Code API
- `GET /api/printshops/qr/[qrCode]`: Get print shop by QR code

## Deployment Process

The application is configured for deployment to GitHub Pages:

1. **Static Export Configuration**
   - `next.config.js` configured with `output: 'export'`
   - Images set to `unoptimized: true`
   - Base path set to `/sri-balaji-xerox`

2. **GitHub Actions Workflow**
   - Triggered on push to main branch
   - Builds the application with `npm run build`
   - Deploys to GitHub Pages using the gh-pages branch

3. **Mock Backend for Static Deployment**
   - Since GitHub Pages only supports static content, the backend is implemented as mock services
   - In a production environment, these would be replaced with actual serverless functions

## Security Considerations

1. **Data Protection**
   - All API communications would use HTTPS in production
   - Files would be encrypted at rest in storage
   - Automatic file deletion after printing or expiration

2. **Access Control**
   - Basic role separation between students and operators
   - In production, would implement proper authentication

## Future Enhancements

1. **Authentication System**
   - Implement user accounts for students and operators
   - Role-based access control

2. **Real Backend Services**
   - Replace mock backend with actual serverless functions
   - Implement cloud storage for files

3. **Payment Integration**
   - Add payment processing for print jobs
   - Generate invoices and receipts

4. **Email Notifications**
   - Send status updates to students
   - Notify operators of new jobs

5. **Advanced Printer Features**
   - Support for more print options (stapling, hole punching, etc.)
   - Multiple printer management

## Development Guidelines

### Local Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Access the application at `http://localhost:3000`

### Adding New Features

1. **Frontend Components**
   - Add new components in the appropriate directory
   - Update page files to include new components

2. **Backend Services**
   - Add new API modules in `src/lib/api`
   - Implement corresponding API routes in `src/app/api`

3. **Integration**
   - Update API client to include new endpoints
   - Create or update hooks as needed

### Deployment

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy the application
3. Verify the deployment at the GitHub Pages URL

## Troubleshooting

### Common Development Issues

1. **API Route Not Found**
   - Check route path in `src/app/api`
   - Verify API client is using correct endpoint

2. **Component Rendering Issues**
   - Check for missing dependencies
   - Verify props are being passed correctly

3. **Build Errors**
   - Check for syntax errors
   - Verify all dependencies are installed

### Deployment Issues

1. **GitHub Pages Not Updating**
   - Check GitHub Actions workflow for errors
   - Verify gh-pages branch is being updated

2. **Static Export Issues**
   - Ensure all components are compatible with static export
   - Check for server-side only code

## Maintenance

Regular maintenance tasks include:

1. Updating dependencies to latest versions
2. Monitoring GitHub Actions workflow for deployment issues
3. Reviewing and addressing any reported bugs
4. Implementing new features as needed

---

This technical documentation provides an overview of the Sri Balaji Student Xerox web application architecture, components, and development guidelines. For more detailed information, refer to the code comments and specific component documentation.
