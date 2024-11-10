
## Hi there !!👋

Welcome to project **SpecTRE!** This project aims to assist users in evaluating the safety of websites by identifying potential vulnerabilities present within them. With the integration of our tools, users can easily assess the security posture of their websites and take necessary actions to mitigate risks.

## Project Overview

SpecTRE comprises of three main component:

1. **SpecTRE_Web_Extension**: The frontend code for the web-extension. Built using React, Vite plugin for web extension, and Material UI, the web-extension provides an intuitive interface for users to interact with our tools.

2. **SpecTRE_DB**: The backend system that powers the web-extension. SpecTRE_DB provides necessary endpoints for storing and retrieving data related to security assessments conducted through our platform.

3. **SpecTRE_ZAP**: A Flask server designed to analyze vulnerabilities in a given target website. SpecTRE_ZAP serves as a crucial component in our toolset, enabling users to perform comprehensive security tests effortlessly.

## Key Features 📢

- **Website Security Assessment**: Users can easily assess the security of their websites through our intuitive web interface.
  
- **Vulnerability Analysis**: SpecTRE_ZAP helps users identify potential vulnerabilities in target websites, simplifying the process of penetration testing in just a few clicks.

- **In-Depth Reports**: SpecTRE provides users with various crucials metrics like number of alerts, vulnerabilities, risk levels, attack possibilites and much more.

- **Cloud Deployment**: Deployed on AWS EC2 instance, our platform has zero-downtime.

- **Seamless Integration**: The three elements work together seamlessly to provide a unified platform for website security assessment.

## Workflow 🛠️
![SpecTRE](https://github.com/user-attachments/assets/e18d68e4-adc3-496b-8781-0a5f5e02f15d)


## ⚙ Getting Started 

To get started with SpecTRE, follow these steps:

1. Clone the repository:
   - [SpecTRE_Web_Extension](https://github.com/idlidosa1206/hackcbs/)

2. Set up the flask server:
   ```
     cd backend/zap
     python3 -m venv env
     source env/bin/activate
     pip install -r requirements.txt
     ```
     
3. Set up the node server:
   - Open a new terminal
     
     ```
     cd backend/db
     npm i
     npm run server
     ```

4. Set up the browser extension:
   - Open a new terminal
     
   ```
   
   cd frontend/vite-project
   npm i
   npm run dev
   ```
   - This script automatically opens up Google Chrome where you can access the extension.
   
5. Start using the tools 🚀:
   - Once everything is set up, you can start using SpecTRE to evaluate website security and identify vulnerabilities.

Thank you for choosing the SpecTRE to strengthen the security of your websites! We hope our tool proves to be valuable assets in your security arsenal.
