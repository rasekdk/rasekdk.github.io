import { getLocaleText } from "@/assets/locales";

const jobs = [
  {
    company: getLocaleText("jobs.cloudSphere"),
    finished: false,
    startDate: 2022,
    desc: getLocaleText("jobs.cloudSphere.desc"),
    title: getLocaleText("jobs.cloudSphere.title"),
  },
  {
    company: getLocaleText("jobs.ingenyus"),
    finished: true,
    startDate: 2021,
    endDate: 2022,
    desc: getLocaleText("jobs.ingenyus.desc2"),
    title: getLocaleText("jobs.ingenyus.title2"),
  },
  {
    company: getLocaleText("jobs.ingenyus"),
    finished: true,
    startDate: 2020,
    endDate: 2019,
    desc: getLocaleText("jobs.ingenyus.desc1"),
    title: getLocaleText("jobs.ingenyus.title1"),
  },
];

function getJobs(ord: string = "desc") {
  let newArr = [];

  if (ord === "desc") {
    newArr = jobs.sort((a, b) => a.startDate - b.startDate);
  } else {
    newArr = jobs.sort((a, b) => b.startDate - a.startDate);
  }

  return newArr;
}

export { getJobs };
