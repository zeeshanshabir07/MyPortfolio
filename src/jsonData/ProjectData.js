import project1 from '/public/1.PNG'; // Correct path for your image
import project2 from '/assets/projects/project2.png';
import project3 from '/assets/projects/project3.png';

const ProjectData = [
  {
    category: "Web Development",
    picture: project1, // Use a consistent structure for all projects
    name: "E-Commerce Website",
    description: "A full-stack e-commerce website with user authentication and Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    links: {
      viewDetail: "https://yourportfolio.com/projects/ecommerce",
      github: "https://github.com/yourusername/ecommerce-website"
    }
  },
  {
    category: "Mobile App",
    picture: project2,
    name: "Fitness Tracker App",
    description: "A mobile app to track workouts, calories, and fitness goals.",
    tags: ["React Native", "Firebase", "Redux"],
    links: {
      viewDetail: "https://yourportfolio.com/projects/fitnesstracker",
      github: "https://github.com/yourusername/fitness-tracker-app"
    }
  },
  {
    category: "Machine Learning",
    picture: project3,
    name: "Image Classifier",
    description: "A machine learning model to classify images into different categories.",
    tags: ["Python", "TensorFlow", "CNN"],
    links: {
      viewDetail: "https://yourportfolio.com/projects/image-classifier",
      github: "https://github.com/yourusername/image-classifier"
    }
  }
];

export default ProjectData;
