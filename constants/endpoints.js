import fs from "fs";

const File1 = fs.readFileSync(__dirname + "/endpoints.js", "utf8");
const File2 = fs.readFileSync(__dirname + "/endpoints.js", "utf8");
const PDF = fs.readFileSync(__dirname + "/endpoints.js", "utf8");

export const endpoints = [
  {
    id: 2,
    endpoint: "/profiles/upload",
    url: "http://localhost:8080/profiles/upload",
    method: "POST",
    payload: {
      files: [File1, File2],
      keywords: ["react", "angular", "javascript"],
      text: PDF,
    },
    response: [
      {
        Job_id: 123456,
      },
      {
        Job_id: 456,
      },
      {
        Job_id: 789,
      },
    ],
  },
  {
    id: 3,
    endpoint: "/profiles/jobs",
    url: "http://localhost:8080/profiles/jobs",
    method: "GET",
    response: {
      jobs: [
        {
          id: "123456",
          exp_range: "2-3years",
          title: "Software Engineer",
          created: "2015-03-25T12:00:00Z",
          recruit_by: "2015-03-25T12:00:00Z",
          status: "in-progress",
          matched: 100,
          totalCount: 233,
          match_criteria: [
            {
              from: 90,
              to: 100,
              value: 10,
            },
            {
              from: 50,
              to: 90,
              value: 50,
            },
            {
              from: 20,
              to: 50,
              value: 20,
            },
            {
              from: 0,
              to: 20,
              value: 10,
            },
          ],
        },
        {
          id: "7890",
          exp_range: "4-5years",
          title: "Delivery Head",
          created: "2015-03-25T12:00:00Z",
          recruit_by: "2015-03-25T12:00:00Z",
          status: "delayed",
          matched: 100,
          totalCount: 233,
          match_criteria: [
            {
              from: 90,
              to: 100,
              value: 10,
            },
            {
              from: 80,
              to: 90,
              value: 50,
            },
            {
              from: 70,
              to: 80,
              value: 20,
            },
            {
              from: 0,
              to: 20,
              value: 10,
            },
          ],
        },
      ],
      totalJobs: 124,
      kpis: {
        jobListings: {
          totalJobListings: 10,
          onTrack: 2,
          atRisk: 4,
          delayed: 10,
          averageResumesPerJob: 100,
        },
        jobApplication: {
          totalJobApplication: 105,
          shortListed: 20,
          onHold: 5,
          averageTimeToHire: "30-60",
          hiringConversionRate: 7,
        },
        hiringConfiguration: {
          businessUnits: 5,
          hiringManagers: 2,
          internalProcessTime: "05-10",
          internalProcessEfficieny: 23,
        },
      },
    },
  },
  {
    id: 4,
    endpoint: "/profiles/resumes/:parameters",
    url: "http://localhost:8080/profiles/resumes/job_id=444&page=1&size=10",
    method: "GET",
    response: {
      data: {
        resumes: [
          {
            name: "siva",
            location: "hyderabad",
            exp: "10 yrs",
            no_of_jobs_applied: 3,
            match_percentage: 80,
            keywords: ["react", "angular"],
            status: "active",
          },
          {
            name: "Venkat",
            location: "Banglore",
            exp: "10 yrs",
            no_of_jobs_applied: 3,
            match_percentage: 80,
            keywords: ["Python", "Scala"],
            status: "Unavailable",
          },
        ],
        count: 100,
        page_no: 1,
      },
      Criteria: {
        preference: "Skill, Education, Experience, Domani",
        mandatory: { Skill: "Python" },
        optional: { Skill: "Machine Learning" },
        "exclude ": { Skill: "Cloud" },
      },
    },
  },
  {
    id: 6,
    endpoint: "/profiles/candidateresume/:parameters",
    url: "http://localhost:8080/profiles/candidateresume/CandidateId=1234&JobId=1234",
    method: "GET",
    response: {
      data: {
        summary: "Some summary text",
        matchPercentage: 53,
        keywords: [
          {
            keyword: "Javascript",
            frequency: 4,
            matchPercentage: 40,
          },
        ],
        jobsApplied: [
          {
            id: 1123432,
            role: "Senior Front end developer",
          },
          {
            id: 1123433,
            role: "Front end developer",
          },
        ],
      },
    },
  },
  {
    id: 7,
    endpoint: "/profile/suggestions/:parameters",
    url: "http://localhost:8080/profile/suggestions/search_term=a,b,c",
    method: "GET",
    response: {
      data: ["React", "Angular", "Java Script", "Typescript"],
      count: 5,
    },
  },
  {
    id: 8,
    endpoint: "/search-results/:parameters",
    url: "http://localhost:8080/search-results/search_term=React",
    method: "GET",
    response: {
      data: [
        {
          isJob: true,
          isProfile: false,
          designation: "Senior React Developer",
          hiringManager: "Subham",
          expRange: "3-5",
          createdOn: "2015-03-25T12:00:00Z",
          jobId: 123456,
        },
        {
          isJob: false,
          isProfile: true,
          name: "Ramsey",
          location: "Hyderabad",
          experience: 5,
          keywords: ["React", "Javascript"],
          profileId: 123,
        },
      ],
      count: 2,
    },
  },
  {
    id: 9,
    endpoint: "/profiles/jdsummary/:parameters",
    url: "http://localhost:8080/profiles/jdsummary/JobId=1234",
    method: "GET",
    response: {
      data: {
        id: "123456",
        exp_range: "2-3years",
        title: "Software Engineer",
        created: "2015-03-25T12:00:00Z",
        recruit_by: "2015-03-25T12:00:00Z",
        status: "in-progress",
        summary:
          "Multi-faceted, efficient, and reliable administrative professional with 10+ years of experience supporting executives, sales personnel, and managers to improve internal operations for small businesses. Proficient in CRM applications and designing programs. Diversified skill set covering administrative support, client relations, writing, human resources, and find in recruiting, account management, and project management. Excellent interpersonal, phone, and digital communication.",
        keywords: ["react", "angular", "javascript"],
        match_criteria: [
          {
            key: "90 to 100",
            value: 10,
            from: 90,
            to: 100,
            value: 10,
          },
          {
            key: "50 to 90",
            value: 50,
          },
          {
            key: "20 to 50",
            value: 30,
          },
          {
            key: "0 to 20",
            value: 10,
          },
        ],
      },
    },
  },
  {
    id: 10,
    endpoint: "/profile/:parameters/metrics",
    url: "http://localhost:8080/profile/12345/metrics",
    method: "GET",
    response: {
      metrics: {
        evaluation: 23,
        selected: 23,
        available: 23,
        rejected: 52,
        onHold: 25,
        applied: 30,
      },
      total: 150,
    },
  },
  {
    id: 11,
    endpoint: "/preferences",
    url: "http://localhost:8080/preferences",
    method: "PUT",
    payload: {
      jobId: "444",
      preference: "Skill",
      mandatory: '{"Skill":"Python"}',
      optional: '{"Skill":"Machine Learning"}',
      exclude: '{"Skill":"Cloud"}',
    },
    response: {
      success: true,
      message: "Successfully updated the preferences for Job ID 1444",
    },
  },
  {
    id: 12,
    endpoint: "/profiles/feedback/:parameters",
    url: "http://localhost:8080/profiles/feedback/12345",
    method: "POST",
    payload: {
      job_id: 33223,
      suitable: true,
      description: "some description supporting the marked feedback",
    },
    response: {
      success: true,
      message: "Successfully posted the feedback for Resume 12345",
    },
  },
  {
    id: 13,
    endpoint: "/notifications",
    url: "http://localhost:8080/notifications",
    method: "GET",
    response: {
      notification_id: 33223,
      type: "notification type",
      message: "some message",
    },
  },
  {
    id: 14,
    endpoint: "/items",
    url: "http://localhost:8080/items",
    method: "POST",
    payload: [
      {
        item: "M Tech",
        type: "Education",
      },
      {
        item: "React Js",
        type: "Skills",
      },
      {
        item: "B Tech",
        type: "Education",
      },
    ],
    response: {
      success: true,
      message: "Items stored successfully",
    },
  },
];
