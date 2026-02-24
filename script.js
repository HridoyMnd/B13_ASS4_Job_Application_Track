// demo datas
let jobs = [
  {
    id: 1,
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    status: "Not Applied",
    type: "Full-Time",
    salary: "৳45,000 - ৳60,000",
    description: "We are looking for a skilled React developer with experience in Tailwind CSS and REST APIs."
  },
  {
    id: 2,
    companyName: "CodeCrafters Ltd.",
    position: "Backend Developer",
    location: "Chattogram, Bangladesh",
    status: "Not Applied",
    type: "Remote",
    salary: "৳50,000 - ৳75,000",
    description: "Seeking a Node.js developer with strong knowledge of Express and MongoDB."
  },
  {
    id: 3,
    companyName: "Digital Spark",
    position: "UI/UX Designer",
    location: "Sylhet, Bangladesh",
    status: "Not Applied",
    type: "Part-Time",
    salary: "৳30,000 - ৳40,000",
    description: "Looking for a creative designer with Figma and modern UI design experience."
  },
  {
    id: 4,
    companyName: "NextGen IT",
    position: "MERN Stack Developer",
    location: "Remote",
    status: "Not Applied",
    type: "Contract",
    salary: "৳70,000 - ৳90,000",
    description: "We need a MERN stack developer for building scalable web applications."
  },
  {
    id: 5,
    companyName: "SoftEdge Technologies",
    position: "Junior Web Developer",
    location: "Rajshahi, Bangladesh",
    status: "Not Applied",
    type: "Internship",
    salary: "৳15,000 - ৳20,000",
    description: "Great opportunity for beginners to gain hands-on experience in web development."
  },
  {
    id: 6,
    companyName: "Skyline Digital",
    position: "Full Stack Developer",
    location: "Khulna, Bangladesh",
    status: "Not Applied",
    type: "Full-Time",
    salary: "৳60,000 - ৳85,000",
    description: "Looking for a full stack developer experienced in React, Node.js, and PostgreSQL."
  },
  {
    id: 7,
    companyName: "Bright Future Tech",
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    status: "Not Applied",
    type: "Full-Time",
    salary: "৳55,000 - ৳80,000",
    description: "Join our engineering team to build scalable SaaS products."
  },
  {
    id: 8,
    companyName: "Creative Apps Studio",
    position: "Mobile App Developer",
    location: "Remote",
    status: "Not Applied",
    type: "Contract",
    salary: "৳65,000 - ৳95,000",
    description: "Hiring a React Native developer for cross-platform mobile applications."
  },
  {
    id: 9,
    companyName: "DataMind Analytics",
    position: "Data Analyst",
    location: "Dhaka, Bangladesh",
    status: "Not Applied",
    type: "Full-Time",
    salary: "৳40,000 - ৳65,000",
    description: "Looking for someone skilled in data visualization and SQL."
  },
  {
    id: 10,
    companyName: "InnoTech Labs",
    position: "DevOps Engineer",
    location: "Chattogram, Bangladesh",
    status: "Not Applied",
    type: "Remote",
    salary: "৳75,000 - ৳1,00,000",
    description: "Seeking a DevOps engineer familiar with Docker, CI/CD pipelines, and cloud services."
  }
];

// all logic added below
const allTab = document.getElementById("all_tab")
const interviewTab = document.getElementById("interview_tab")
const rejectedTab = document.getElementById("rejected_tab")
const totalJob = document.getElementById("total_job");
totalJob.innerText = jobs.length;
const availableJob = document.getElementById("available_job")
availableJob.innerText = jobs.length;
const allCardContainer = document.getElementById("all_card_container");
const interviewCardContainer = document.getElementById("interview_card_container");
const rejectedCardContainer = document.getElementById("rejected_card_container");


// all jobs data display here
function allDataDisplay(jobs){
  allCardContainer.innerHTML = "";
  for (const job of jobs) {
  const card = document.createElement("div");
  card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                  <div class="">
                      <h3 class="text-xl font-bold opacity-80">${job.companyName}</h3>
                      <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${job.position}</h4>
                      <h5 class="opacity-60"><span>${job.location} . </span><span>${job.type} . </span><span>${job.salary} . </span></h5>
                      <button class="btn stt_btn uppercase bg-slate-300 font-semibold mb-5 mt-5">${job.status}</button>
                      <p class="text-gray-700 mb-5">${job.description}</p>
                      <button
                          
                          onclick="selectJob('interview', ${job.id})"
                          class="btn border-green-500 text-[16px] font-semibold hover:bg-green-400 hover:text-white duration-300 uppercase text-green-500">Interview</button>
                      <button
                          onclick="selectJob('rejected', ${job.id})"
                          class="btn border-red-500 text-[16px] font-semibold ml-2 hover:bg-red-400 hover:text-white duration-300 uppercase text-red-500">Rejected</button>
                  </div>
                  <button onclick="deleteApplication(${job.id})" class="hover:text-red-500 duration-300 cursor-pointer p-5">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
        `
  allCardContainer.append(card);
}
}
allDataDisplay(jobs);

// all rejected data display here
rejectedTab.addEventListener("click", () => {
  if (rejectedDatas.length === 0) {
    rejectedCardContainer.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("bg-white", "shadow-sm", "rounded-md", "my-4", "text-center", "p-44")
    section.innerHTML = `<img src="./images/document.png" alt="" class="mx-auto">
            <h2 class="text-2xl font-bold opacity-80 my-3">No Jobs Available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>`;
    rejectedCardContainer.append(section);
  } else {
    rejectedCardContainer.innerHTML = "";
    for (const rejectedData of rejectedDatas) {
      const card = document.createElement("div");
      card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                  <div class="">
                      <h3 class="text-xl font-bold opacity-80">${rejectedData.companyName}</h3>
                      <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${rejectedData.position}</h4>
                      <h5 class="opacity-60"><span>${rejectedData.location} . </span><span>${rejectedData.type} . </span><span>${rejectedData.salary} . </span></h5>
                      <button class="btn uppercase bg-slate-300 font-semibold mb-5 mt-5">Not Applied</button>
                      <p class="text-gray-700 mb-5">${rejectedData.description}</p>
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
      rejectedCardContainer.append(card);
    }
  }
})

// all interview data display here
interviewTab.addEventListener("click", () => {
  if (interviewDatas.length === 0) {
    interviewCardContainer.innerHTML = "";
    const section = document.createElement("section");
    section.classList.add("bg-white", "shadow-sm", "rounded-md", "my-4", "text-center", "p-44")
    section.innerHTML = `<img src="./images/document.png" alt="" class="mx-auto">
            <h2 class="text-2xl font-bold opacity-80 my-3">No Jobs Available</h2>
            <p class="text-gray-700">Check back soon for new job opportunities</p>`;
    interviewCardContainer.append(section);
  } else {
    interviewCardContainer.innerHTML = "";
    for (const interviewData of interviewDatas) {
      console.log(interviewData.status);
      const card = document.createElement("div");
      card.innerHTML = `
              <div class="p-4 rounded-md bg-white shadow-sm flex items-center justify-between">
                  <div class="">
                      <h3 class="text-xl font-bold opacity-80">${interviewData.companyName}</h3>
                      <h4 class="text-lg font-medium opacity-60 mb-5 mt-2">${interviewData.position}</h4>
                      <h5 class="opacity-60"><span>${interviewData.location} . </span><span>${interviewData.type} . </span><span>${interviewData.salary} . </span></h5>
                      <button class="btn uppercase bg-slate-300 font-semibold mb-5 mt-5">${interviewData.status}</button>
                      <p class="text-gray-700 mb-5">${interviewData.description}</p>
                      <button
                          class="btn border-green-500 text-[16px] font-semibold uppercase text-green-500">Interview</button>
                      <button
                          class="btn border-red-500 text-[16px] font-semibold ml-2 uppercase text-red-500">Rejected</button>
                  </div>
                  <button class="hover:text-red-500 duration-300 cursor-pointer p-5">
                      <i class="fa-solid fa-trash"></i>
                  </button>
              </div>
        `
      interviewCardContainer.append(card);
    }
  }
})

// application delete
function deleteApplication(applicationId) {
  jobs = jobs.filter((data) => data.id !== applicationId);
  allDataDisplay(jobs)
}


const interviewDatas = [];
const rejectedDatas = [];

// interview and rejected data select here
function selectJob(btnId, jobId) {
  if (btnId === 'interview') {
    const findData = jobs.filter((data) => data.id === jobId);
    const isExist = findData[0];
    if (!interviewDatas.includes(isExist) && !rejectedDatas.includes(isExist)) {
      findData[0].status = "interview"
      interviewDatas.push(findData[0]);
      console.log(isExist);
      console.log(interviewDatas[0]);
    }
  }
  else {
    const findData = jobs.filter((data) => data.id === jobId);
    const isExist = findData[0];
    if (!rejectedDatas.includes(isExist) && !interviewDatas.includes(isExist)) {
      rejectedDatas.push(findData[0]);
    }
  }
}

// application data container control here
function dataDisplayController() {
  interviewCardContainer.classList.add("hidden")
  rejectedCardContainer.classList.add("hidden")
  interviewTab.addEventListener("click", () => {
    interviewCardContainer.classList.remove("hidden")
    allCardContainer.classList.add("hidden")
    rejectedCardContainer.classList.add("hidden")
  })
  rejectedTab.addEventListener("click", () => {
    rejectedCardContainer.classList.remove("hidden")
    allCardContainer.classList.add("hidden")
    interviewCardContainer.classList.add("hidden")
  })
  allTab.addEventListener("click", () => {
    allCardContainer.classList.remove("hidden")
    rejectedCardContainer.classList.add("hidden")
    interviewCardContainer.classList.add("hidden")
  })
}
dataDisplayController();

//active button tab logic here 
function activeTabController() {
  const buttons = document.getElementsByClassName("btn_tab");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      for (const btn of buttons) {
        btn.classList.remove("bg-blue-500", "text-white");
        btn.classList.add("bg-white", "shadow-sm")
      }

      button.classList.remove("bg-white", "shadow-sm");
      button.classList.add("bg-blue-500", "text-white")

    })
  }
}
activeTabController();