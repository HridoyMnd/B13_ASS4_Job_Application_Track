const jobs = [
  {
    id: 1,
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳45,000 - ৳60,000",
    description: "We are looking for a skilled React developer with experience in Tailwind CSS and REST APIs."
  },
  {
    id: 2,
    companyName: "CodeCrafters Ltd.",
    position: "Backend Developer",
    location: "Chattogram, Bangladesh",
    type: "Remote",
    salary: "৳50,000 - ৳75,000",
    description: "Seeking a Node.js developer with strong knowledge of Express and MongoDB."
  },
  {
    id: 3,
    companyName: "Digital Spark",
    position: "UI/UX Designer",
    location: "Sylhet, Bangladesh",
    type: "Part-Time",
    salary: "৳30,000 - ৳40,000",
    description: "Looking for a creative designer with Figma and modern UI design experience."
  },
  {
    id: 4,
    companyName: "NextGen IT",
    position: "MERN Stack Developer",
    location: "Remote",
    type: "Contract",
    salary: "৳70,000 - ৳90,000",
    description: "We need a MERN stack developer for building scalable web applications."
  },
  {
    id: 5,
    companyName: "SoftEdge Technologies",
    position: "Junior Web Developer",
    location: "Rajshahi, Bangladesh",
    type: "Internship",
    salary: "৳15,000 - ৳20,000",
    description: "Great opportunity for beginners to gain hands-on experience in web development."
  },
  {
    id: 6,
    companyName: "Skyline Digital",
    position: "Full Stack Developer",
    location: "Khulna, Bangladesh",
    type: "Full-Time",
    salary: "৳60,000 - ৳85,000",
    description: "Looking for a full stack developer experienced in React, Node.js, and PostgreSQL."
  },
  {
    id: 7,
    companyName: "Bright Future Tech",
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳55,000 - ৳80,000",
    description: "Join our engineering team to build scalable SaaS products."
  },
  {
    id: 8,
    companyName: "Creative Apps Studio",
    position: "Mobile App Developer",
    location: "Remote",
    type: "Contract",
    salary: "৳65,000 - ৳95,000",
    description: "Hiring a React Native developer for cross-platform mobile applications."
  },
  {
    id: 9,
    companyName: "DataMind Analytics",
    position: "Data Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳40,000 - ৳65,000",
    description: "Looking for someone skilled in data visualization and SQL."
  },
  {
    id: 10,
    companyName: "InnoTech Labs",
    position: "DevOps Engineer",
    location: "Chattogram, Bangladesh",
    type: "Remote",
    salary: "৳75,000 - ৳1,00,000",
    description: "Seeking a DevOps engineer familiar with Docker, CI/CD pipelines, and cloud services."
  }
];

// all logic added below
const cardContainer = document.getElementById("card_container");

for (const job of jobs) {
  const card = document.createElement("div");
  card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                <div class="">
                    <h3 class="text-xl font-bold opacity-80">${job.companyName}</h3>
                    <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${job.position}</h4>
                    <h5 class="opacity-60"><span>${job.location} . </span><span>${job.type} . </span><span>${job.salary} . </span></h5>
                    <button class="btn uppercase bg-slate-300 font-semibold mb-5 mt-5">Not Applied</button>
                    <p class="text-gray-700 mb-5">${job.description}</p>
                    <button
                        class="btn border-green-500 text-[16px] font-semibold  uppercase text-green-500">Interview</button>
                    <button
                        class="btn border-red-500 text-[16px] font-semibold ml-2 uppercase text-red-500">Rejected</button>
                </div>
                <button class="hover:text-red-500 duration-300 cursor-pointer p-5">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
      `
    cardContainer.append(card);
}