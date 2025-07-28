import { useState, useEffect } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - My Electron App" },
    { name: "description", content: "Welcome to React Router v7 + Electron!" },
  ];
}

export default function Home() {
  const [electronInfo, setElectronInfo] = useState<any>(null);

  useEffect(() => {
    // Check if we're running in Electron
    const userAgent = navigator.userAgent;
    const isElectron = userAgent.includes('Electron');
    
    setElectronInfo({
      isElectron,
      userAgent,
      platform: navigator.platform,
      language: navigator.language,
    });
  }, []);

  return (
    <div className="card">
      <h1>Welcome to Electron + React Router v7! 🚀</h1>
      <p>
        This is a demo application showcasing React Router v7 framework mode 
        running inside an Electron desktop application.
      </p>
      
      <div className="electron-info">
        <h3>Environment Information:</h3>
        <p><strong>Running in Electron:</strong> {electronInfo?.isElectron ? 'Yes ✅' : 'No ❌'}</p>
        <p><strong>Platform:</strong> {electronInfo?.platform}</p>
        <p><strong>Language:</strong> {electronInfo?.language}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Features Available:</h3>
        <ul>
          <li>React Router v7 framework mode with file-based routing</li>
          <li>Hot reload during development</li>
          <li>Native desktop application capabilities</li>
          <li>Cross-platform support (Windows, macOS, Linux)</li>
          <li>Modern UI with glassmorphism design</li>
          <li>TypeScript support out of the box</li>
        </ul>
      </div>

      <div className="info-box blue">
        <p><strong>💡 Tip:</strong> Navigate to the About and Settings pages using the navigation above to see React Router v7's client-side routing in action!</p>
      </div>
    </div>
  );
}