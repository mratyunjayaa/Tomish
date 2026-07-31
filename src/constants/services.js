import {
  Code,
  Cpu,
  ShieldCheck,
  Bot,
  Globe,
  Briefcase,
  UserCheck,
  Radio,
} from "lucide-react";

export const SERVICES_DATA = [
  {
    id: "iot",
    title: "Internet of Things (IoT)",
    description:
      "Empower students with practical IoT skills through interactive projects, smart devices, and real-world applications.",
    detailedInfo:
      "Our experienced educators conduct engaging IoT workshops where students design smart systems using sensors, microcontrollers, and cloud technologies. Trusted by multiple schools for delivering future-ready STEM education.",
    icon: Radio,
    status: "Available",
  },
  {
    id: "robotics",
    title: "Robotics & AI",
    description:
      "Inspire innovation with hands-on robotics training that develops creativity, engineering skills, and problem-solving abilities.",
    detailedInfo:
      "Students build and program robots while learning electronics, mechanics, and automation. Our expert trainers have successfully conducted robotics programs in numerous schools, making learning interactive and exciting.",
    icon: Cpu,
    status: "Available",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Prepare students to stay safe in the digital world through practical cybersecurity education.",
    detailedInfo:
      "From cyber awareness to ethical hacking fundamentals, our educators help students understand online safety, digital ethics, and modern security practices through engaging hands-on activities.",
    icon: ShieldCheck,
    status: "Available",
  },
  {
    id: "automation",
    title: "Automation & Future Technologies",
    description:
      "Introduce students to the technologies transforming industries through practical automation learning.",
    detailedInfo:
      "Our industry-oriented curriculum covers automation concepts, smart systems, and emerging technologies that help students develop future-ready technical skills.",
    icon: Bot,
    status: "Available",
  },
  {
    id: "coding",
    title: "Coding & Programming",
    description:
      "Develop logical thinking and problem-solving skills through fun, project-based coding sessions.",
    detailedInfo:
      "Our experienced instructors teach programming using age-appropriate methods, enabling students to create games, applications, and innovative software projects while building confidence in technology.",
    icon: Code,
    status: "Available",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Enable students to design and build modern websites while exploring creativity and technology.",
    detailedInfo:
      "Students learn website development using HTML, CSS, JavaScript, and modern frameworks through practical projects guided by experienced mentors.",
    icon: Globe,
    status: "Available",
  },
  {
    id: "business-dev",
    title: "Entrepreneurship & Innovation",
    description:
      "Encourage young innovators to think creatively, solve problems, and build entrepreneurial mindsets.",
    detailedInfo:
      "Our entrepreneurship programs help students explore business ideas, teamwork, leadership, and innovation through interactive workshops and real-world case studies.",
    icon: Briefcase,
    status: "Available",
  },
  {
    id: "personality-dev",
    title: "Personality Development",
    description:
      "Build confident communicators and future leaders with essential life and professional skills.",
    detailedInfo:
      "Our sessions focus on communication, leadership, public speaking, teamwork, interview preparation, and confidence building, helping students excel academically and professionally.",
    icon: UserCheck,
    status: "Available",
  },
];