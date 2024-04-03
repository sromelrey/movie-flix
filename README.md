## Simple Todo List with Next.js 14 and NextAuth.js

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Orchestrator: Your Personal Symphony of Productivity

Project Name is a cutting-edge mobile application developed using React Native, designed to redefine the way movie enthusiasts explore and discover their favorite films. Leveraging the powerful capabilities of React Native, this app offers a seamless and intuitive user experience across both iOS and Android platforms, ensuring that your next movie adventure is always at your fingertips.

## Installed packages

```bash
npm install 
```

### Built With

This section list any major frameworks/libraries used in the project.

![GitHub Logo](https://d1m75rqqgidzqn.cloudfront.net/images/logo.png) Format: ![Alt Text](url) 

https://github.com/jquense/react-big-calendar

React Expo



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

.
├── app # Root application component contains all the routes, components, and logic for the application.
│ ├── (auth) # Route Group for Authentication
│ │ ├── login
│ │ │ └── page.tsx # Sample page with filename is a server side components.
│ │ └── signup
│ ├── about-us
│ ├── contact-us
│ ├── (dashboard) #Route Group for Authenticated Routes (assuming "dashboard" for authenticated area)
│ │ └── todo # todo Feature
│ ├── layout.tsx
│ ├── global.css # Global stylesheet (optional)
│ ├── font.css # Root layout (optional)
│ ├── components # Reusable UI components (mostly client side components)
│ │ └── modal.tsx # sample resusable component
│ ├── sidenav
│ └── lib # folder for server actions, helpers and utils functions.
├── package.json
└── README.md
