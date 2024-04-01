import Rect from "@/components/icons/Rect"
import Tailwind from "@/components/icons/Tailwind"
import Noxt from "@/components/icons/Noxt"
import JavaScript from "@/components/icons/JavaScript"
import Typescript from "@/components/icons/Typescript"
import Mongodb from "@/components/icons/Mangod"


const navLinks = [
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
    }
];

export const skills=[
    {
      id:1,
      title : "react",
      img:<Rect/>,
    },
    {
      id:2,
      title : "tailwind",
      img:<Tailwind/>,
    },
    {
      id:3,
      title : "next",
      img:<Noxt/>,
    },
    {
      id:4,
      title : "javascript",
      img:<JavaScript/>,
    },
    {
      id:5,
      title : "typescript",
      img:<Typescript/>,
    },
    {
      id:6,
      title :"mangod",
      img:<Mongodb/>,
    }
];

export const projects=[
  {
      id:0,
      title:"Scroll Voyage",
      link:"https://scroll-voyage.vercel.app/",
      description:[
        "The website boasts a visually captivating 3D design, creating the impression of traversing a path as users scroll and progress through a three-dimensional space.",
       "I created a website using React Three Fiber and React Three Drei, blending 3D elements seamlessly with CSS for dynamic, visually captivating user experiences.",
       
      ],
      teckStack:[
        "React JS",
        "react-three/drei",
        "react-thee/fiber",
        "CSS",
      ]
    
   
  },
  {
    id:1,
    title:"Zingle",
      gif:"/project_assets/scrollVoyage.png",
      description:[
        "The website offers a group chat platform with text editing and deletion. Users sign in via email for a personalized experience. A live listener ensures real-time updates and message deletions.",
        "I employed Next.js, TypeScript, and Supabase for database management. Shadcn UI crafted the UI.Ensured type safety using typescript.",
       
      ],
      teckStack:[
        "Next JS",
       "Tailwind",
        "Typescript",
]
  },
  {
    id:2,
    title:"Artist Page",
    gif:"",
    description:[
      "The website was made to display all the details of the upcoming shows of an artist",
      "I utilized Next.js and Tailwind CSS in the development of this website. Additionally, I integrated GSAP for implementing captivating animations, thereby enhancing the visual appeal and user experience of the site.",
     
    ],
    teckStack:[
      "React JS",
      "Next JS",
      "Tailwind",
  ]
  },
  {
    id:3,
    title:"Prometeo Website",
      gif:"",
      description:[
        "This project was the website for Prometeo,the tech fest at IIT Jodhpur",
       "I designed and developed the Navbar, as well as pages for teams, past speakers, and campus ambassadors. Additionally, I implemented functionality to fetch data from the database and present it on the frontend.",
       
      ],
      teckStack:[
        "React JS",
        "CSS",
        "Django",
      ]
  },
  // {
  //   title:"Promptopia",
  //     gif:"",
  //     description:{
  //       info:"",
  //       my_role:"",
  //       learning:"",
  //     },
  //     teckStack:{
  //       first:"",
  //       second:"",
  //       third:"",
  //     }
  // }
]

export default navLinks