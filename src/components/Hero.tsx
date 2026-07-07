import Image from "next/image";
import styles from "./Hero.module.css";
import profilePic from "../images/Ellipse 1.png";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.leftContent}>
                <h1 className={styles.title}>DEEPAK MISHRA</h1>
                <div className={styles.subtitle}>
                    <span className={styles.primaryRole}>Full Stack Developer</span>
                    <span className={styles.bullet}>&bull;</span>
                    <span className={styles.secondaryRole}>UI-UX Designer</span>
                    <span className={styles.bullet}>&bull;</span>
                    <span className={styles.secondaryRole}>Game Designer & Developer</span>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={profilePic} 
                        alt="Deepak Mishra" 
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </div>
    )
}