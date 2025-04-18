# README.md - Sri Balaji Student Xerox Web Application

## Overview

Sri Balaji Student Xerox is a web application designed to streamline print job submission and management for college print shops. The application enables students to easily submit print jobs via QR code scanning and allows shop operators to efficiently manage the print queue.

## Features

### Student Features
- QR code scanning for print shop identification
- File upload with drag-and-drop support
- Print options configuration (copies, color/B&W, double-sided)
- Job tracking and history
- Job cancellation

### Operator Features
- Dashboard for print queue management
- Job approval/rejection system
- Printer status monitoring
- QR code generation for print shop

## Technology Stack

- **Frontend**: Next.js with Tailwind CSS
- **Backend**: Serverless functions (API routes)
- **Deployment**: GitHub Pages
- **QR Code**: jsQR for scanning, QRCode.js for generation
- **Printer Integration**: IPP (Internet Printing Protocol)

## Deployment

The application is deployed to GitHub Pages and can be accessed at:
`https://[your-github-username].github.io/sri-balaji-xerox/`

### Deployment Process

1. The application is configured for static export with GitHub Pages settings
2. A GitHub Actions workflow automatically deploys the application when code is pushed to the main branch
3. The deployment process includes building the application and publishing it to the gh-pages branch

## Local Development

To run the application locally:

1. Clone the repository:
   ```
   git clone https://github.com/[your-github-username]/sri-balaji-xerox.git
   ```

2. Install dependencies:
   ```
   cd sri-balaji-xerox
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage Instructions

### For Students

1. Navigate to the Student Portal from the homepage
2. Scan the QR code displayed at the print shop (or enter the code manually)
3. Upload your files using the file uploader
4. Configure print options (copies, color/B&W, double-sided)
5. Submit your print job
6. Track the status of your job in the Job Tracking section

### For Operators

1. Navigate to the Operator Dashboard from the homepage
2. View and manage the print queue
3. Approve or reject print jobs
4. Monitor printer status
5. Generate QR codes for your print shop

## Integration with Canon 4545 Printer

The application integrates with the Canon imageRUNNER ADVANCE 4545i printer using the Internet Printing Protocol (IPP). This enables:

- Sending print jobs directly to the printer
- Monitoring printer status (paper levels, toner levels, errors)
- Tracking job completion

## Future Enhancements

- User authentication for personalized experience
- Payment integration for direct billing
- Advanced print options (stapling, hole punching, etc.)
- Email notifications for job status updates
- Mobile app version

## Support

For additional assistance, please contact the development team or refer to the technical documentation.

---

Thank you for choosing Sri Balaji Student Xerox!
