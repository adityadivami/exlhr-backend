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
          id: 444,
          created: "2021-02-26T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Consultant II | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 114,
            "20 to 50": 44,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary:
            "Required a Consultant II | Analytics | Retail, Media & Hi-Tech with 4.0 years  of experience. And proficient in agile, analysis, analytical, analytics, crm, data and, databases, it, management, science, statistical, statistics, visualization",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 442,
          created: "2021-02-26T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Data Engineer | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 0,
            "20 to 50": 0,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Data Engineer | Analytics | Retail, Media & Hi-Tech with 5.0 years  of experience. And proficient in agile, airflow, analysis, analytical, analytical, analytics, azure, big, big data, cloud, cloud, cluster, crm, data models, db2, db2, design, designing, framework, gcp), hadoop, hadoop, hbase, kafka, kubernetes, machine learning, management, modeling, nlp, nlp, nosql, oracle, pig, pytorch, rdbms, reporting, science, spark, spark, sql, sql,, statistical, statistics, teradata",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 443,
          created: "2021-02-26T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Data Visualization | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 0,
            "20 to 50": 0,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Data Visualization | Analytics | Retail, Media & Hi-Tech with 4.0 years  of experience. And proficient in (extract transform, agile, analysis, analytical, analytics, bi, bi, business intelligence, crm, dashboards, data models, data visualizations, design, designing, etl, etl, hadoop, management, math, oracle, power, power bi,, python, qlikview, r, r,, reporting, sas, software, sql, sql, statistical, statistics, tableau, tableau, teradata, testing, testing, transform, visualization, visualizations",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 234,
          created: "2021-04-07T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title:
            "Engagement Manager | Analytics | Banking & Financial Services",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 88,
            "20 to 50": 69,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Engagement Manager | Analytics | Banking & Financial Services with 6.0 years  of experience. And proficient in agile, ai, analysis, analysts, analytical, analytics, ba/bs, big, big data,, crm, design, management, services, statistical",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 236,
          created: "2021-07-01T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title:
            "Data Capabilities Project Manager | Analytics | Banking & Financial Services",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 98,
            "20 to 50": 29,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Data Capabilities Project Manager | Analytics | Banking & Financial Services with 7.0 years  of experience. And proficient in accuracy, agile, agile, ai, analysis, analytics, asana, ba/bs, bi, bi, big, big data, building, business intelligence, cloud, cloud, crm, dashboards, data engineering, database, design, designing, etl, etl, implementation, insurance, jira, jira,, management, mis, pm, reporting, statistical, teams, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1397,
          created: "2021-08-23T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title:
            "Lead Assistant Manager (SAS/SQL/ETL developer) - Decision Analytics",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 116,
            "20 to 50": 56,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary:
            "Required a Lead Assistant Manager (SAS/SQL/ETL developer) - Decision Analytics with 5.0 years  of experience. And proficient in analysis, analytics, automation, building, coding, crm, dataset, datasets, design, excel, excel, joins, management, power, python, sas, sas, scrum, software, sql, statistical, testing",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1679,
          created: "2021-11-01T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Machine Learning Engineer",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 134,
            "20 to 50": 25,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary:
            "Required a Machine Learning Engineer with 4.0 years  of experience. And proficient in access, agile, agile, ai, airflow, algorithms, analysis, analytical, analytics, aws, aws cloud,, ba/bs, big, big data,, building, ci/cd, ci/cd, cloud, coding, crm, data science, detection, dynamodb, ec2, hadoop, hive, insurance, kafka, kinesis, lambda, machine learning, management, ml, ml, pipeline, programming, python, python, s3, sagemaker, spark, spark, statistical, statistics, testing, testing, unit testing, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1766,
          created: "2021-10-18T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Senior Consultant",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 17,
            "20 to 50": 8,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Senior Consultant with 20.0 years  of experience. And proficient in a/b, agile, ai, analysis, analytical, analytics, automation, building, cloud, coding, crm, design, insurance, it, management, marketing, marketing, math, programming, python, qa/qc, services, sql, statistical, statistics, tableau, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1835,
          created: "2021-11-03T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Manager - Data Engineering",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 91,
            "20 to 50": 67,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Manager - Data Engineering with 6.0 years  of experience. And proficient in agile, ai, analytical, analytics, automation, aws, big, big data, bigquery, building, business intelligence, ci/cd, cloud, cloud, data engineering, data integration, databases, emr, etl, glue, insurance, intelligence, it, lambda, management, modeling, planning, powerbi, powerbi, python, python, quantitative, rds, redshift, science, snowflake, sns, software, sql, sqs, testing, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1588,
          created: "2021-12-14T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Engagement Manager - Analytics",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 76,
            "20 to 50": 38,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary:
            "Required a Engagement Manager - Analytics with 8.0 years  of experience. And proficient in agile, ai, analysis, analytics, automation, ba/bs, building, cloud, crm, dashboards, data analysis, data analytics, data manipulation, datasets, excel, in-depth, insurance, joins, ma, management, mba, python/sql, reporting, sql, sql, statistical, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1832,
          created: "2021-12-14T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Senior Consultant",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 106,
            "20 to 50": 98,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary:
            "Required a Senior Consultant with 2.0 years  of experience. And proficient in agile, agile, ai, algorithm, analysis, analytics, automation, big, big data, building, cleansing, cloud, cloudera, coding, crm, datasets, design, designing, detection, hadoop, hadoop, hive, hortonworks, insurance, machine learning, management, ml, ml, ml modeling, modeling, modeling, planning, predictive, prescriptive modeling, programming, pyspark, pyspark, python, python, reporting, scripts, spark, spark, statistical, statistical, tableau, tableau, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
        {
          id: 1300,
          created: "2022-01-04T00:00:00",
          recruit_by: "Siddharthan, Vijayasarathy 168195",
          title: "Assistant Manager - Marketing Operations",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 95,
            "20 to 50": 76,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary:
            "Required a Assistant Manager - Marketing Operations with 5.0 years  of experience. And proficient in agile, ai, analysis, analytics, building, cloud, database, databases, design, direct marketing, excel, excel, insurance, marketing, marketing, microsoft, oracle, pivot, services, sql, testing, worked",
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
        },
      ],
      totalJobs: 12,
      kpis: {
        jobListings: {
          onTrack: 2,
          atRisk: 5,
          delayed: 10,
          totalJobListings: 12,
          averageResumesPerJob: 120.41666666666667,
        },
        jobApplication: {
          totalJobApplication: 349,
          shortListed: 20,
          onHold: 5,
          averageTimeToHire: "30-60",
          hiringConversionRate: 7,
        },
        hiringConfiguration: {
          businessUnits: "5",
          hiringManagers: "2",
          internalProcessTime: "05-10",
          internalProcessEfficieny: "23",
        },
      },

      //   jobs: [
      //     {
      //       id: "123456",
      //       exp_range: "2-3years",
      //       title: "Software Engineer",
      //       created: "2015-03-25T12:00:00Z",
      //       recruit_by: "2015-03-25T12:00:00Z",
      //       status: "in-progress",
      //       matched: 100,
      //       totalCount: 233,
      //       match_criteria: [
      //         {
      //           from: 90,
      //           to: 100,
      //           value: 10,
      //         },
      //         {
      //           from: 50,
      //           to: 90,
      //           value: 50,
      //         },
      //         {
      //           from: 20,
      //           to: 50,
      //           value: 20,
      //         },
      //         {
      //           from: 0,
      //           to: 20,
      //           value: 10,
      //         },
      //       ],
      //     },
      //     {
      //       id: "7890",
      //       exp_range: "4-5years",
      //       title: "Delivery Head",
      //       created: "2015-03-25T12:00:00Z",
      //       recruit_by: "2015-03-25T12:00:00Z",
      //       status: "delayed",
      //       matched: 100,
      //       totalCount: 233,
      //       match_criteria: [
      //         {
      //           from: 90,
      //           to: 100,
      //           value: 10,
      //         },
      //         {
      //           from: 80,
      //           to: 90,
      //           value: 50,
      //         },
      //         {
      //           from: 70,
      //           to: 80,
      //           value: 20,
      //         },
      //         {
      //           from: 0,
      //           to: 20,
      //           value: 10,
      //         },
      //       ],
      //     },
      //   ],
      //   totalJobs: 124,
      //   kpis: {
      //     jobListings: {
      //       totalJobListings: 10,
      //       onTrack: 2,
      //       atRisk: 4,
      //       delayed: 10,
      //       averageResumesPerJob: 100,
      //     },
      //     jobApplication: {
      //       totalJobApplication: 105,
      //       shortListed: 20,
      //       onHold: 5,
      //       averageTimeToHire: "30-60",
      //       hiringConversionRate: 7,
      //     },
      //     hiringConfiguration: {
      //       businessUnits: 5,
      //       hiringManagers: 2,
      //       internalProcessTime: "05-10",
      //       internalProcessEfficieny: 23,
      //     },
      //   },
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
