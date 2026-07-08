import React from "react";
import styles from "./Skills.module.css";
import { 
  Code2, AppWindow, Server, Database, BarChart3, Cloud, Settings, PenTool, Gamepad2, 
  Terminal, MonitorSmartphone, Cpu, Box, LayoutTemplate, Globe, Layers, GitBranch,
  Workflow, FileCode2, Boxes, Triangle, Lock, DatabaseZap, Palette
} from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 size={24} className={styles.categoryIcon} color="#60A5FA" />,
    bgColor: "rgba(15, 23, 42, 0.6)", // dark blue
    skills: [
      { name: "Python", icon: <Terminal size={16} color="#3776AB" /> },
      { name: "TypeScript", icon: <FileCode2 size={16} color="#3178C6" /> },
      { name: "JavaScript", icon: <FileCode2 size={16} color="#F7DF1E" /> },
      { name: "SQL", icon: <DatabaseZap size={16} color="#4479A1" /> },
      { name: "HTML", icon: <Globe size={16} color="#E34F26" /> },
      { name: "CSS", icon: <LayoutTemplate size={16} color="#1572B6" /> },
    ]
  },
  {
    category: "Frontend",
    icon: <AppWindow size={24} className={styles.categoryIcon} color="#A78BFA" />,
    bgColor: "rgba(46, 16, 101, 0.6)", // dark purple
    skills: [
      { name: "React", icon: <Boxes size={16} color="#61DAFB" /> },
      { name: "Next.js", icon: <Globe size={16} color="#ffffff" /> },
      { name: "Tailwind CSS", icon: <Palette size={16} color="#06B6D4" /> },
    ]
  },
  {
    category: "Backend",
    icon: <Server size={24} className={styles.categoryIcon} color="#FBBF24" />,
    bgColor: "rgba(69, 26, 3, 0.6)", // dark orange/brown
    skills: [
      { name: "Node.js", icon: <Box size={16} color="#339933" /> },
      { name: "Express.js", icon: <Server size={16} color="#ffffff" /> },
      { name: "REST APIs", icon: <Workflow size={16} color="#4EA94B" /> },
      { name: "JWT", icon: <Lock size={16} color="#FF0000" /> },
      { name: "OAuth 2.0", icon: <Lock size={16} color="#333333" /> },
    ]
  },
  {
    category: "Databases",
    icon: <Database size={24} className={styles.categoryIcon} color="#38BDF8" />,
    bgColor: "rgba(8, 51, 68, 0.6)", // dark cyan/blue
    skills: [
      { name: "PostgreSQL", icon: <DatabaseZap size={16} color="#4169E1" /> },
      { name: "MySQL", icon: <DatabaseZap size={16} color="#4479A1" /> },
      { name: "MongoDB", icon: <DatabaseZap size={16} color="#47A248" /> },
      { name: "Prisma ORM", icon: <Layers size={16} color="#5A67D8" /> },
    ]
  },
  {
    category: "Data Analytics",
    icon: <BarChart3 size={24} className={styles.categoryIcon} color="#34D399" />,
    bgColor: "rgba(6, 78, 59, 0.6)", // dark green
    skills: [
      { name: "Pandas", icon: <Box size={16} color="#150458" /> },
      { name: "NumPy", icon: <Cpu size={16} color="#013243" /> },
      { name: "Tableau", icon: <BarChart3 size={16} color="#E97627" /> },
      { name: "Matplotlib", icon: <BarChart3 size={16} color="#ffffff" /> },
      { name: "Seaborn", icon: <BarChart3 size={16} color="#4C72B0" /> },
      { name: "EDA", icon: <BarChart3 size={16} color="#F39C12" /> },
      { name: "ETL Pipelines", icon: <Workflow size={16} color="#3498DB" /> },
      { name: "Excel", icon: <Box size={16} color="#217346" /> },
      { name: "Google Sheets", icon: <Box size={16} color="#34A853" /> },
    ]
  },
  {
    category: "Deployment",
    icon: <Cloud size={24} className={styles.categoryIcon} color="#F87171" />,
    bgColor: "rgba(76, 5, 25, 0.6)", // dark red
    skills: [
      { name: "Streamlit", icon: <Box size={16} color="#FF4B4B" /> },
      { name: "Vercel", icon: <Triangle size={16} color="#ffffff" /> },
      { name: "Render", icon: <Cloud size={16} color="#46E3B7" /> },
      { name: "Git", icon: <GitBranch size={16} color="#F05032" /> },
      { name: "GitHub Actions", icon: <Workflow size={16} color="#2088FF" /> },
      { name: "Agile", icon: <Workflow size={16} color="#F39C12" /> },
    ]
  },
  {
    category: "System Design",
    icon: <Settings size={24} className={styles.categoryIcon} color="#FDE047" />,
    bgColor: "rgba(66, 32, 6, 0.6)", // dark yellow/olive
    skills: [
      { name: "DSA", icon: <Settings size={16} color="#E74C3C" /> },
      { name: "OOP", icon: <Box size={16} color="#3498DB" /> },
      { name: "SOLID", icon: <Box size={16} color="#2ECC71" /> },
      { name: "Design Patterns", icon: <Layers size={16} color="#F1C40F" /> },
    ]
  },
  {
    category: "Design",
    icon: <PenTool size={24} className={styles.categoryIcon} color="#F472B6" />,
    bgColor: "rgba(49, 13, 56, 0.6)", // dark magenta
    skills: [
      { name: "Figma", icon: <Palette size={16} color="#F24E1E" /> },
    ]
  },
  {
    category: "Game & 3D",
    icon: <Gamepad2 size={24} className={styles.categoryIcon} color="#10B981" />,
    bgColor: "rgba(10, 48, 28, 0.6)", // another dark green
    skills: [
      { name: "Unreal Engine", icon: <Gamepad2 size={16} color="#ffffff" /> },
      { name: "Unity", icon: <Gamepad2 size={16} color="#ffffff" /> },
      { name: "Blender", icon: <Box size={16} color="#F5792A" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.heading}>SKILLS</h2>
      </div>
      
      <div className={styles.skillsContainer}>
        {skillsData.map((category) => (
          <div 
            className={styles.categoryRow} 
            style={{ backgroundColor: category.bgColor }} 
            key={category.category}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.categoryTitle}>
                {category.icon}
                <span>{category.category}</span>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map(skill => (
                  <div className={styles.skillTag} key={skill.name}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
