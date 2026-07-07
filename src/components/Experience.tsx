import Image, { StaticImageData } from "next/image";
import styles from "./Experience.module.css";

import gameDevIcon from "../images/game-dev-club.png";
import neutronIcon from "../images/neutron.png";
import damruIcon from "../images/damru.png";
import calendarIcon from "../images/calender (for duration).png";
import locationIcon from "../images/location.png";

interface Role {
  title: string;
  duration: string;
}

interface ExperienceProps {
  company: string;
  location: string;
  type: string;
  icon: StaticImageData;
  roles: Role[];
  achievements: string[];
}

const experiences: ExperienceProps[] = [
  {
    company: "Game Dev Club NST-RU",
    location: "Sonipat, Haryana",
    type: "Full Time",
    icon: gameDevIcon,
    roles: [
      {
        title: "Advisor",
        duration: "Mar 2026 - Present • 5 mos",
      },
      {
        title: "President",
        duration: "Aug 2025 - Feb 2026 • 7 mos",
      },
    ],
    achievements: [
      "Led strategic planning and community growth for the university's Game Development Club",
      "Directed the club's vision, operations, and technical initiatives as President and later Advisor",
      "Planned and executed workshops, game jams, and community events for aspiring game developers",
      "Guided student teams through the complete game development lifecycle",
      "Built an inclusive environment that encouraged learning, innovation, and teamwork",
    ],
  },
  {
    company: "Neutron",
    location: "Sonipat, Haryana",
    type: "Full Time",
    icon: neutronIcon,
    roles: [
      {
        title: "Head (Workshops & Exhibitions)",
        duration: "Feb 2026 - Apr 2026 • 3 mos",
      },
      {
        title: "Core Committee (Sponsorship & Exhibition)",
        duration: "Feb 2025 - Jan 2026 • 1 yr",
      },
    ],
    achievements: [
      "Led the Sponsorship & Exhibition team for Neutron, the college's flagship tech fest, delivering an event attended by thousands of participants from across the region",
      "Secured strategic partnerships with leading tech companies, startups, and local businesses, driving a 10x increase in sponsorship revenue over the previous year",
      "Planned and managed the exhibition zone, curating engaging showcases including a retro technology exhibition",
      "Designed tailored sponsorship packages, cultivated long-term partner relationships, and ensured seamless sponsor engagement before, during, and after the event",
      "Collaborated with marketing, logistics, and technical teams to maximize sponsor visibility across on-ground activations and digital campaigns",
    ],
  },
  {
    company: "Damru",
    location: "Sonipat, Haryana",
    type: "Full Time",
    icon: damruIcon,
    roles: [
      {
        title: "Head (Workshops & Exhibitions)",
        duration: "Jun 2025 - Dec 2025 • 7 mos",
      },
    ],
    achievements: [
      "Led the Workshops & Exhibition team for Damru, the university's annual cultural festival, delivering engaging experiences for thousands of attendees",
      "Planned and executed workshops and exhibitions by coordinating with artists, exhibitors, vendors, and internal organizing teams",
      "Managed end-to-end exhibition operations, including venue planning, logistics, scheduling, and on-ground execution",
      "Collaborated with multiple committees to ensure seamless event delivery, smooth participant experience, and timely execution",
      "Streamlined workflows and coordinated volunteers to efficiently manage high-footfall events under tight timelines",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          PROFESSIONAL<br />JOURNEY
        </h2>

        <div className={styles.cardsContainer}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <Image src={exp.icon} alt={exp.company} className={styles.companyIcon} />
                  <h3 className={styles.companyName}>{exp.company}</h3>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.badge}>{exp.type}</span>
                  <div className={styles.location}>
                    <Image src={locationIcon} alt="Location" className={styles.metaIcon} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className={styles.rolesContainer}>
                <div className={styles.timeline}></div>
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className={styles.roleItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.roleContent}>
                      <h4 className={styles.roleTitle}>{role.title}</h4>
                      <div className={styles.roleDuration}>
                        <Image src={calendarIcon} alt="Calendar" className={styles.metaIcon} />
                        <span>{role.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, aIndex) => (
                  <li key={aIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
