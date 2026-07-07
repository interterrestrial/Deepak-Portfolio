import Image from "next/image";
import styles from "./About.module.css";
import profilePic from "../images/Ellipse 1.png";

const LinkedinIcon = ({ size, color, className }: { size: number, color: string, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} className={className}>
    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.44c-1.13 0-2.04-.9-2.04-2.02 0-1.1.91-2 2.04-2 1.14 0 2.05.9 2.05 2 0 1.12-.91 2.02-2.05 2.02zM20.45 20.45h-3.5v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.5V9h3.36v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.38v6.34z" />
  </svg>
);

const GithubIcon = ({ size, color, className }: { size: number, color: string, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>ABOUT ME</h2>
          <div className={styles.paragraphs}>
            <p>
              I'm a Full Stack Developer, UI/UX Designer, and Game Developer passionate about building products that are both functional and enjoyable to use. My journey into tech began with Unreal Engine, where I discovered my love for creating interactive experiences. Today, I build scalable web applications using React, Next.js, Node.js, TypeScript, MongoDB, and modern AI technologies while designing intuitive interfaces with Figma.
            </p>
            <p>
              I enjoy working across the entire product lifecycle—from understanding user problems and designing seamless experiences to developing performant, production-ready applications. Whether it's an AI-powered web platform, a real-time application, or a game prototype in Unreal Engine, I love turning ideas into polished digital products.
            </p>
            <p>
              Outside of development, I've led workshops, managed exhibitions, secured sponsorships, and coordinated operations for major college technical and cultural festivals. These experiences have strengthened my leadership, communication, and project management skills, helping me collaborate effectively and deliver impactful results in both technical and cross-functional teams.
            </p>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.imageContainer}>
            <Image 
              src={profilePic} 
              alt="Deepak Mishra" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/deepak-kmr-mishra" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={48} className={styles.icon} color="#0077b5" />
            </a>
            <a href="https://github.com/interterrestrial" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={48} className={styles.icon} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
