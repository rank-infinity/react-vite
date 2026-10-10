import {
  
  aaveg,
  merlab,
  heera,
  citi,
  // carrent,
  // jobit,
  // tripguide,
  autopano, 
  edge, 
  openx, 
  rgrrt, 
  sfm, 
  zhangs, 
  grasp,
  thesis,
  citiweb, 
  heeraweb,
  team_aaveg, 
  thesis_commitee,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];




const experiences = [
  {
    title: "Researcher",
    company_name: "Manipulation and Environmental Robotics Lab, WPI",
    icon: merlab,
    iconBg: "#E6DEDD",
    date: "August 2025 - September 2026",

    points: [
      {
        text: "Designed a two module configuration space which relied on the position of robot's keypoint for state estimation"
      },
      {
        text: "Designed and built automated ML pipelines for training, evaluating and comparing generative models (VAE, Goggle, CNetwork) across different architectures, hyperparameters and dataset sizes."
      },
      {
        text: "Developed CNetwork - a VAE based network that took advantage of the modularity of the robot to learn sampling one module states and this network to sample the whole robot configuration"
      },
      {
        text: "Designed experiments and validity metrics to test the learning ability of each method in simulation"
      },
      {
        text: "Developed data collections pipelines using ROS and visual-servoing control pipeline to evaluate validity of samples by measuring error from reached state"
      },
      {
        text: "Debugged issues in the construction, electronics and mechanical components of the system"
      },
      {
        links: [
          {
            text: "Link to thesis document and presentation",
            url: "https://drive.google.com/drive/folders/1A_pumS8tMMfxoAkHWa4qSY6vJynPhoXo?usp=sharing"
          }
        ]
      },

    ],

     teamPhotos: [
      {
        src: thesis_commitee,
        caption: "At the end of thesis- Super grateful to my thesis commitee and my PI Prof Berk Calli"
      },
    ],

    media: [
      {
        type: "image",
        src: thesis, 
        caption: "Thesis Title"
      },
      {
        type: "video",
        src: "https://drive.google.com/file/d/1QMLB-awTg3gQAwjaGiegJvRRNZ6Uc2WW/preview?usp=drive_link", 
        caption: "Visual servoing of soft robot arm (to green targets) used in my experiments."
      }
    ]
  },

  {
    title: "Technology Analyst",
    company_name: "Citi",
    icon: citi,
    iconBg: "#E6DEDD",
    date: "July 2023 - July 2024",

    points: [
      {
        text: "Developed microservices using Spring Boot and SQL within a large-scale banking codebase, working with distributed systems patterns including Hystrix for fault tolerance"
      },
      {
        text: "Independently designed and built a Jenkins-based tool to automatically create JIRA tickets and notify responsible teams on BDD test failures, streamlining bug triage"
      },
      {
        text: "Contributed to cloud migration to OpenShift following CI/CD principles for production deployment"
      },
      {
        links: [
          {
            text: "take a look at one of the applications I worked on",
            url: "https://online.citi.com/US/nga/lendingv2/ntc/welcome?affcode=CPI&intc=pil_borrow_icon_prelogin"
          }
        ]
      }
    ],

    media: [
      {
        type: "image",
        src: citiweb, 
        caption: "A mockup of one of the projects I worked on."
      }
    ]
  },

  {
    title: "Research Intern",
    company_name: "Heera",
    icon: heera,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",

    points: [
      {
        text: "Trained and deployed YOLOv4 across 50 visually similar object classes using custom image augmentation scripts to scale dataset 3x.",
      },
      {
        text: "Built Android app for on-device object detection using quantized MobileNet, achieving under 1 second inferences on edge devices."
      },
      {
        text: "My work was pitched to clients and started a new avenue for the company.",
        links: [
          {
            text: "click here to know more",
            url: "https://heerasoftware.com/ai-and-data-analytics/"
          }
        ]
      }
    ],

    // media: [
    //   {
    //     type: "image",
    //     src: heeraweb, 
    //     caption: "Visual description of App"
    //   }
    // ]
  },

  {
    title: "Coding Lead",
    company_name: "Team Aaveg",
    icon: aaveg,
    iconBg: "#030303",
    date: "December 2022 - July 2022",

    points: [
      {
        text: "ROBOCON 2022- Architected full software stack for two competition robots — PID odometry, encoder-based closed-loop speed control, and hall sensor-based precision actuator positioning over SPI Bluetooth communication",
        
        // text: "(blue team in the video)"
      },
      {
        text: "ROBOCON 2022- Designed distributed master-slave architecture across multiple microcontrollers for modular concurrent control using interrupts.",
        
      },
       {
        links: [
          {
            text: "ROBOCON 2022",
            url: "https://www.youtube.com/live/wttdU6ItDhI?si=vWvFpygJTMUkCVkg"
          },
          {
            text: "deeper look at robots",
            url: "https://drive.google.com/drive/folders/1A99iP5bfNqvXnfL8r95PhgK7PbfQwtX5?usp=sharing"
          }
        ], 
      },

      {
        text: "Flipkart GRID 3.0- Designed centralised multi-robot coordination system for autonomous warehouse operations, sequencing 4 robots for delivery. ",
        
      },
      {
        text: "Flipkart GRID 3.0- Built real-time state estimation pipeline using overhead camera, OpenCV-based segmentation and tracking, with wireless command transmission via PC-Arduino-HC module bridge"
      }, 
      {
        links: [
          {
            text: "Flipkart GRID 3.0",
            url: "https://unstop.com/hackathons/flipkart-grid-30-robotics-challenge-flipkart-grid-30-flipkart-175210"
          },
          {
            text: "more",
            url: "https://drive.google.com/drive/folders/12QBm3ALIO4-v1_JNHUsIzNC1tfCAVFvZ?usp=drive_link"
          },
          
        ], 
      }
    ],

    teamPhotos: [
      {
        src: team_aaveg,
        caption: "I am super lucky to have learned from and worked with our team."
      },
    ], 

    media: [
      {
        type: "youtube",
        videoId: "n4SiYBaqO6g",
        start: 2294,
        end: 2360, 
        caption: "Our first ROBOCON 2022 match broadcasted on national television."
      },
      {
        type: "video",
        src: "https://drive.google.com/file/d/1iL3JXQJtZp_1dxx4fCc4r1ek5tXHxGtA/preview?usp=drive_link", 
        caption: "Our robot dropping a parcel based on only visual feedback."
      }
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Nehal is hardworking and critical thinker. She doesn’t stop until she actually understands it which is crucial in robotics. Once she understands the concept she is good at communicating it and articulate it for general audience which make her good team member for multidisciplinary project. ",
    name: "Shambhuraj Mane",
    designation: "Lab Mate",
    company: "PhD candidate at WPI",
    image: "https://shambhurajmane.github.io/img/portrait_mys.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const projects = [{
    name: "Texture-based boundary detector from scratch",
    category: "Computer Vision",
    description:
      "Created brighness, color and texture maps using hand-crafted filter banks and k-means clustering on the derived features. Then used these maps with chi-square gradients for edge estimation. ",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "OpenCV", color: "green-text-400" },
    ],
    image: edge,
    source_code_link: "https://github.com/",
  },
  { 
    name: "Camera Calibration from Scratch",
    category: "Computer Vision",
    description:
      "Used Zhang's method to estimate intrinsic matrix via per view homography estimation and non-linear refinement of radial distortion parameters using LM optimization ",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "OpenCV", color: "green-text-400" },
    ],
    image: zhangs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automatic Panoramic Stitching",
    category: "Computer Vision",
    description:
      "Built classical (SIFT & RANSAC) and learning based (HomographyNet) homography estimation pipelines, and blended the images using centre-out stitching",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "OpenCV", color: "green-text-400" },
    ],
    image: autopano,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Reconstruction - Structure from Motion",
    category: "Computer Vision",
    description:
      "Estimated camera poses for different images, then used triangulation for 3D point recovery. Finally used PnP based pose estimation and bundle adjustment to improve reconstruction accuracy.",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "OpenCV", color: "green-text-400" },
    ],
    image: sfm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Planning with Non-holonomic Constraints",
    category: "Motion Planning",
    description:
      "Implemented and benchmarked Reachability-Guided RRT for torque controlled pendulum and car-like system with respect to RRT",
    tags: [
      { name: "C++", color: "blue-text-400" },
      { name: "OMPL", color: "green-text-400" },
    ],
    image: rgrrt,
    source_code_link: "https://github.com/",
  },
  {
    name: "Kinematics of a 6DOF Robot Manipulator",
    category: "Manipulation",
    description:
      "Used ROS2 for forward, analytical inverse and velocity kinematics for OpenX Manipulator for control.",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "ROS2", color: "green-text-400" },
    ],
    image: openx,
    source_code_link: "https://github.com/",
  },{
    name: "Dyanmics of a Robot Arms",
    category: "Manipulation",
    description:
      "Generated spiral trajectory via parametric equations on simulated manipulator using recursive Newton-Euler formulation. ",
    tags: [
      { name: "MATLAB", color: "blue-text-400" },
    ],
    image: openx,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Visual Servoing of a 3dof Manipulator",
  //   category: "Manipulation",
  //   description:
  //     "Used ROS2 for forward, analytical inverse and velocity kinematics for OpenX Manipulator for control.",
  //   tags: [
  //     { name: "Python", color: "blue-text-400" },
  //     { name: "ROS2", color: "green-text-400" },
  //     { name: "Gazebo", color: "orange-text-400" },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Robust Grasping under Uncertainty",
    category: "Manipulation",
    description:
      "Used PyBullet to simulate grasping with 4% noise added to object positions, optimized GGCNN(grasp prediction model) to use neighborhood consesus while predicting grasps",
    tags: [
      { name: "Python", color: "blue-text-400" },
      { name: "ROS2", color: "green-text-400" },
      { name: "Pybullet", color: "orange-text-400" },
    ],
    image: grasp,
    source_code_link: "https://github.com/",
  },
];

export { experiences, testimonials, projects };