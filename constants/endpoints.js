import fs from "fs";

// const File1 = fs.readFileSync(__dirname + "/endpoints.js", "utf8");
// const File2 = fs.readFileSync(__dirname + "/endpoints.js", "utf8");
const PDF = fs.readFileSync(__dirname + "/endpoints.js", "utf8");

export const endpoints = [
  {
    id: 2,
    endpoint: "/profiles/upload",
    url: "http://localhost:8080/profiles/upload",
    method: "POST",
    // payload: {
    //   files: [File1, File2],
    //   keywords: ["react", "angular", "javascript"],
    //   text: PDF,
    // },
    response: [
      {
        Job_id: 444,
      },
      {
        Job_id: 456,
      },
      {
        Job_id: 789,
      },
    ],
    // response: [
    //     {
    //       RefId: 123456,
    //     },
    //     {
    //       RefId: 456,
    //     },
    //     {
    //       RefId: 789,
    //     },
    //   ],
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
          exp_range: "2-3years",
          created: "2021-02-26T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Consultant II | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 114,
            "20 to 50": 44,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: [""],
          summary: [
            "Required a Consultant II | Analytics | Retail, Media & Hi-Tech with 4.0 years  of experience. And proficient in agile, analysis, analytical, analytics, crm, data and, databases, it, management, science, statistical, statistics, visualization",
          ],
          createdBy: {
            name: "Karan Singh",
            designation: "Recruiter",
          },
          matchText: "Total 158 resume matches found of 2920 resumes",
        },
        {
          id: 442,
          exp_range: "2-3years",
          created: "2021-02-26T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Data Engineer | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 0,
            "20 to 50": 0,
            "0 to 20": 0,
          },
          keywords: [""],
          status: "atRisk",
          summary: [
            "Required a Data Engineer | Analytics | Retail, Media & Hi-Tech with 5.0 years  of experience. And proficient in agile, airflow, analysis, analytical, analytical, analytics, azure, big, big data, cloud, cloud, cluster, crm, data models, db2, db2, design, designing, framework, gcp), hadoop, hadoop, hbase, kafka, kubernetes, machine learning, management, modeling, nlp, nlp, nosql, oracle, pig, pytorch, rdbms, reporting, science, spark, spark, sql, sql,, statistical, statistics, teradata",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 158 resume matches found of 2920 resumes",
        },
        {
          id: 443,
          exp_range: "2-3years",
          created: "2021-02-26T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Data Visualization | Analytics | Retail, Media & Hi-Tech",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 0,
            "20 to 50": 0,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary: [
            "Required a Data Visualization | Analytics | Retail, Media & Hi-Tech with 4.0 years  of experience. And proficient in (extract transform, agile, analysis, analytical, analytics, bi, bi, business intelligence, crm, dashboards, data models, data visualizations, design, designing, etl, etl, hadoop, management, math, oracle, power, power bi,, python, qlikview, r, r,, reporting, sas, software, sql, sql, statistical, statistics, tableau, tableau, teradata, testing, testing, transform, visualization, visualizations",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 0 resume matches found of 2920 resumes",
        },
        {
          id: 234,
          exp_range: "2-3years",
          created: "2021-04-07T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
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
          summary: [
            "Required a Engagement Manager | Analytics | Banking & Financial Services with 6.0 years  of experience. And proficient in agile, ai, analysis, analysts, analytical, analytics, ba/bs, big, big data,, crm, design, management, services, statistical",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 157 resume matches found of 2920 resumes",
          source: "manual",
        },
        {
          id: 236,
          exp_range: "2-3years",
          created: "2021-07-01T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
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
          summary: [
            "Required a Data Capabilities Project Manager | Analytics | Banking & Financial Services with 7.0 years  of experience. And proficient in accuracy, agile, agile, ai, analysis, analytics, asana, ba/bs, bi, bi, big, big data, building, business intelligence, cloud, cloud, crm, dashboards, data engineering, database, design, designing, etl, etl, implementation, insurance, jira, jira,, management, mis, pm, reporting, statistical, teams, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 117 resume matches found of 2920 resumes",
          source: "manual",
        },
        {
          id: 1397,
          exp_range: "2-3years",
          created: "2021-08-23T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
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
          summary: [
            "Required a Lead Assistant Manager (SAS/SQL/ETL developer) - Decision Analytics with 5.0 years  of experience. And proficient in analysis, analytics, automation, building, coding, crm, dataset, datasets, design, excel, excel, joins, management, power, python, sas, sas, scrum, software, sql, statistical, testing",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 172 resume matches found of 2920 resumes",
          source: "manual",
        },
        {
          id: 1679,
          exp_range: "2-3years",
          created: "2021-11-01T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Machine Learning Engineer",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 134,
            "20 to 50": 25,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: "",
          summary: [
            "Required a Machine Learning Engineer with 4.0 years  of experience. And proficient in access, agile, agile, ai, airflow, algorithms, analysis, analytical, analytics, aws, aws cloud,, ba/bs, big, big data,, building, ci/cd, ci/cd, cloud, coding, crm, data science, detection, dynamodb, ec2, hadoop, hive, insurance, kafka, kinesis, lambda, machine learning, management, ml, ml, pipeline, programming, python, python, s3, sagemaker, spark, spark, statistical, statistics, testing, testing, unit testing, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 159 resume matches found of 2920 resumes",
        },
        {
          id: 1766,
          exp_range: "2-3years",
          created: "2021-10-18T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Senior Consultant",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 17,
            "20 to 50": 8,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary: [
            "Required a Senior Consultant with 20.0 years  of experience. And proficient in a/b, agile, ai, analysis, analytical, analytics, automation, building, cloud, coding, crm, design, insurance, it, management, marketing, marketing, math, programming, python, qa/qc, services, sql, statistical, statistics, tableau, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 25 resume matches found of 2920 resumes",
        },
        {
          id: 1835,
          exp_range: "2-3years",
          created: "2021-11-03T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Manager - Data Engineering",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 91,
            "20 to 50": 67,
            "0 to 20": 0,
          },
          keywords: "",
          status: "atRisk",
          summary: [
            "Required a Manager - Data Engineering with 6.0 years  of experience. And proficient in agile, ai, analytical, analytics, automation, aws, big, big data, bigquery, building, business intelligence, ci/cd, cloud, cloud, data engineering, data integration, databases, emr, etl, glue, insurance, intelligence, it, lambda, management, modeling, planning, powerbi, powerbi, python, python, quantitative, rds, redshift, science, snowflake, sns, software, sql, sqs, testing, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 158 resume matches found of 2920 resumes",
        },
        {
          id: 1588,
          exp_range: "2-3years",
          created: "2021-12-14T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Engagement Manager - Analytics",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 76,
            "20 to 50": 38,
            "0 to 20": 0,
          },
          keywords: [""],
          status: "atRisk",
          summary: [
            "Required a Engagement Manager - Analytics with 8.0 years  of experience. And proficient in agile, ai, analysis, analytics, automation, ba/bs, building, cloud, crm, dashboards, data analysis, data analytics, data manipulation, datasets, excel, in-depth, insurance, joins, ma, management, mba, python/sql, reporting, sql, sql, statistical, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 114 resume matches found of 2920 resumes",
        },
        {
          id: 1832,
          exp_range: "2-3years",
          created: "2021-12-14T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Senior Consultant",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 106,
            "20 to 50": 98,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: [""],
          summary: [
            "Required a Senior Consultant with 2.0 years  of experience. And proficient in agile, agile, ai, algorithm, analysis, analytics, automation, big, big data, building, cleansing, cloud, cloudera, coding, crm, datasets, design, designing, detection, hadoop, hadoop, hive, hortonworks, insurance, machine learning, management, ml, ml, ml modeling, modeling, modeling, planning, predictive, prescriptive modeling, programming, pyspark, pyspark, python, python, reporting, scripts, spark, spark, statistical, statistical, tableau, tableau, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 204 resume matches found of 2920 resumes",
        },
        {
          id: 1300,
          exp_range: "2-3years",
          created: "2022-01-04T00:00:00",
          recruit_by: "2021-02-26T00:00:00",
          title: "Assistant Manager - Marketing Operations",
          match_criteria: {
            "90 to 100": 0,
            "50 to 90": 95,
            "20 to 50": 76,
            "0 to 20": 0,
          },
          status: "atRisk",
          keywords: [""],
          summary: [
            "Required a Assistant Manager - Marketing Operations with 5.0 years  of experience. And proficient in agile, ai, analysis, analytics, building, cloud, database, databases, design, direct marketing, excel, excel, insurance, marketing, marketing, microsoft, oracle, pivot, services, sql, testing, worked",
          ],
          createdBy: {
            name: "Siddharthan, Vijayasarathy 168195",
            designation: "Recruiter",
          },
          matchText: "Total 171 resume matches found of 2920 resumes",
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
    id: 5,
    endpoint: "/profiles/candidateresume/:parameters",
    url: "http://localhost:8080/profiles/candidateresume/106975",
    method: "GET",
    response: {
      data: {
        "page4.html":
          '<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<style type="text/css">\n.txt { white-space:nowrap; }\n.f0 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n@font-face { font-family: ff1; src: url("1.ttf"); }\n.f1 { font-family:ff1,sans-serif; font-weight:normal; font-style:normal; }\n.f2 { font-family:monospace; font-weight:normal; font-style:normal; }\n@font-face { font-family: ff3; src: url("3.ttf"); }\n.f3 { font-family:ff3,sans-serif; font-weight:normal; font-style:normal; }\n.f4 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n.f5 { font-family:sans-serif; font-weight:bold; font-style:normal; }\n@font-face { font-family: ff2; src: url("2.ttf"); }\n.f6 { font-family:ff2,sans-serif; font-weight:bold; font-style:normal; }\n</style>\n</head>\n<body>\n<img style="position:absolute; left:0px; top:0px;" width="612" height="792" src="page4.png"">\n<div class="txt" style="position:absolute; left:31px; top:39px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Prepared 5 years’ business plan for the Hope and Sewa Academy in Africa</span></div>\n<div class="txt" style="position:absolute; left:31px; top:52px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Prepared internal business and fund raising plan</span></div>\n<div class="txt" style="position:absolute; left:31px; top:66px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Build donor database using joomla, civicrm and eTapestry</span></div>\n<div class="txt" style="position:absolute; left:31px; top:80px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Ryan International Group of Institutions</span></div>\n<div class="txt" style="position:absolute; left:311px; top:80px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">India</span></div>\n<div class="txt" style="position:absolute; left:31px; top:93px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Program Manager, Mentor</span></div>\n<div class="txt" style="position:absolute; left:311px; top:93px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Apr 2004 </span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Apr 2010</span></div>\n<div class="txt" style="position:absolute; left:31px; top:118px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:132px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Coordinator for “Doors To Diplomacy” project (US dept. of State)</span></div>\n<div class="txt" style="position:absolute; left:31px; top:145px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">International School Awards Coordinator (British Council, UK)</span></div>\n<div class="txt" style="position:absolute; left:31px; top:159px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Educator at various school levels including Montessori, middle school levels</span></div>\n<div class="txt" style="position:absolute; left:31px; top:177px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Awards and Achievements</span></div>\n<div class="txt" style="position:absolute; left:31px; top:194px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Member Editorial Board </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">VUE (Voices in Urban Education)</span></div>\n<div class="txt" style="position:absolute; left:31px; top:208px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Member of NYSED SSIP Data Workgroup Team</span></div>\n<div class="txt" style="position:absolute; left:31px; top:221px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">As ISA Coordinator (International School Awards, British Council, UK) bagged the International School of the Year</span></div>\n<div class="txt" style="position:absolute; left:49px; top:234px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Award for 3 consecutive years (2009-12)</span></div>\n<div class="txt" style="position:absolute; left:31px; top:247px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Intern with United Nations </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Dept. of Economics and Social Affairs, Bureau of Development Policy and New York</span></div>\n<div class="txt" style="position:absolute; left:49px; top:260px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">City Government’s learning and development division</span></div>\n<div class="txt" style="position:absolute; left:31px; top:273px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Graduate Student Fellow - NYU Stern School of Business, New York</span></div>\n<div class="txt" style="position:absolute; left:31px; top:292px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Published Work</span></div>\n<div class="txt" style="position:absolute; left:31px; top:309px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Understanding Disproportionality Series Part 1: What Disproportionality Is and Why it Matters</span></div>\n<div class="txt" style="position:absolute; left:31px; top:322px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Understanding Disproportionality Series Part 2: Measuring Disproportionality</span></div>\n<div class="txt" style="position:absolute; left:31px; top:336px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Understanding Disproportionality Part 3: TAC-</span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">D’s Root Cause Analysis Approach</span></div>\n<div class="txt" style="position:absolute; left:31px; top:349px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Understanding Disproportionality Part 4: TAC-</span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">D’s Culturall</span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">y Responsive Education (CRE) Framework, Equity</span></div>\n<div class="txt" style="position:absolute; left:49px; top:362px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Teams</span></div>\n<div class="txt" style="position:absolute; left:31px; top:375px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">“When Rubber Hits the Road” A book on Technical Assistance and Culturally Responsive Sustaining Education</span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">- In</span></div>\n<div class="txt" style="position:absolute; left:49px; top:390px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Progress (Teachers College </span><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Columbia University)</span></div>\n<div class="txt" style="position:absolute; left:31px; top:408px;"><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Education</span></div>\n<div class="txt" style="position:absolute; left:36px; top:425px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Master of Public Administration- Policy and Finance</span></div>\n<div class="txt" style="position:absolute; left:36px; top:438px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Bachelors in Education</span></div>\n<div class="txt" style="position:absolute; left:36px; top:452px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Bachelors in Commerce</span></div>\n<div class="txt" style="position:absolute; left:36px; top:465px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Leadership Certification</span></div>\n<div class="txt" style="position:absolute; left:323px; top:425px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York University, New York, NY</span></div>\n<div class="txt" style="position:absolute; left:324px; top:438px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Panjab University, Chandigarh</span></div>\n<div class="txt" style="position:absolute; left:325px; top:452px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Panjab University, Chandigarh</span></div>\n<div class="txt" style="position:absolute; left:326px; top:465px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Harvard University</span></div>\n</body>\n</html>\n',
        "page2.html":
          '<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<style type="text/css">\n.txt { white-space:nowrap; }\n.f0 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n.f1 { font-family:sans-serif; font-weight:bold; font-style:normal; }\n.f2 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n@font-face { font-family: ff1; src: url("1.ttf"); }\n.f3 { font-family:ff1,sans-serif; font-weight:normal; font-style:normal; }\n.f4 { font-family:monospace; font-weight:normal; font-style:normal; }\n@font-face { font-family: ff2; src: url("2.ttf"); }\n.f5 { font-family:ff2,sans-serif; font-weight:bold; font-style:normal; }\n@font-face { font-family: ff3; src: url("3.ttf"); }\n.f6 { font-family:ff3,sans-serif; font-weight:normal; font-style:normal; }\n</style>\n</head>\n<body>\n<img style="position:absolute; left:0px; top:0px;" width="612" height="792" src="page2.png"">\n<div class="txt" style="position:absolute; left:31px; top:43px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York University</span></div>\n<div class="txt" style="position:absolute; left:31px; top:56px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Senior Research Associate</span></div>\n<div class="txt" style="position:absolute; left:305px; top:43px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:305px; top:56px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">October 2016-Present</span></div>\n<div class="txt" style="position:absolute; left:31px; top:74px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Summary: </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Lead researcher for the NYS State designated technical support center, responsible for providing technical</span></div>\n<div class="txt" style="position:absolute; left:31px; top:86px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">assistance to districts across NYS. Responsible for conducting District level audits for School districts across US for the</span></div>\n<div class="txt" style="position:absolute; left:31px; top:99px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Innovations in Equity and Systemic Change team. Developed and designed processes and tools to enhance the analysis of</span></div>\n<div class="txt" style="position:absolute; left:31px; top:112px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">the student performance and disciplinary outcomes. Key responsibilities include survey design and dissemination for</span></div>\n<div class="txt" style="position:absolute; left:31px; top:124px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">larger audiences, data management, cleaning analysis and reporting for large datasets including student-level</span></div>\n<div class="txt" style="position:absolute; left:31px; top:137px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">disaggregated datasets. Led data analytics, data collection, and analysis and metrics optimization effort. Instituted new</span></div>\n<div class="txt" style="position:absolute; left:31px; top:150px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">policies, procedures, and programs for data management.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:175px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Achievements: </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Conducted root cause analysis for over 30 school districts across US. Piloted the development of</span></div>\n<div class="txt" style="position:absolute; left:31px; top:188px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">academic and financial analysis tools for school districts. Managed multiple cross functional projects, estimated, and</span></div>\n<div class="txt" style="position:absolute; left:31px; top:200px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">negotiated delivery commitments on behalf of the NYU to the third party stakeholders. Contract with Columbia</span></div>\n<div class="txt" style="position:absolute; left:31px; top:213px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">University to write a book on educational equity.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:238px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:251px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Defined project scope, requirement, and developed Project Plan for multiple projects.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:266px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Led Requirement management efforts including large client implementation, identified stakeholders; initiated and</span></div>\n<div class="txt" style="position:absolute; left:49px; top:280px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">facilitated meetings and discussions with stakeholders.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:294px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Managed and lead the district level outcome data analysis for various school districts across US.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:308px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Individuals handled very large data-sets related to academic achievement, disciplinary outcomes, financial-resources</span></div>\n<div class="txt" style="position:absolute; left:49px; top:322px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">distribution using multiple statistical analysis tools.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:336px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Lead the monitoring work around implementation fidelity.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:351px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Conducted audits for multiple years for various large-sized school districts.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:365px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Managed Product Development including creating, redesigning of workbooks, reports and manuals and other toolkits</span></div>\n<div class="txt" style="position:absolute; left:49px; top:379px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">and guidelines for districts in order to support successful intersectional analysis.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:393px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Served as specialist for IDEA regulatory indicators and assisted various stakeholders in related research, policy and</span></div>\n<div class="txt" style="position:absolute; left:49px; top:407px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">practice formulation.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:422px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Provided Technical Assistance to various districts through PDs, maintain effective communication with district</span></div>\n<div class="txt" style="position:absolute; left:49px; top:435px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">personnel.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:450px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Produced project requirements documentation, including written documents, process diagrams, report mock-ups,</span></div>\n<div class="txt" style="position:absolute; left:49px; top:462px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">wire frames and other documentation as required, using standard templates.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:476px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Led and analyzed business requirements, processes, and technical debt through, interviews, workshops, and</span></div>\n<div class="txt" style="position:absolute; left:49px; top:488px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">workflow analysis. Collaborated with district-level technical stakeholders to identify specific requirements.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:502px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Conduct requirements walk-through with stakeholders to ensure complete understanding/agreement and obtain sign-</span></div>\n<div class="txt" style="position:absolute; left:49px; top:515px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">off.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:528px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Documented and published flowchart for existing processes and new/enhanced processes to help stakeholders fully</span></div>\n<div class="txt" style="position:absolute; left:49px; top:543px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">understand a project and its impact.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:557px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York University</span></div>\n<div class="txt" style="position:absolute; left:305px; top:557px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:31px; top:570px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Assistance Fiscal Operations</span></div>\n<div class="txt" style="position:absolute; left:305px; top:570px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Sept 2015 </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">June 2016</span></div>\n<div class="txt" style="position:absolute; left:31px; top:582px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Summary: </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Manage projector </span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">an internal budgetary control system, Constructed the pilot training program for building</span></div>\n<div class="txt" style="position:absolute; left:31px; top:595px;"><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">NYU Wagner’s Fis</span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">cal Teams for various divisions, and Supported </span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">the budgetary process for school’s central finance</span></div>\n<div class="txt" style="position:absolute; left:31px; top:608px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">team.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:621px;"><span class="f1" style="font-size:11px;vertical-align:baseline;color:rgba(0,0,0,1);">Achievement: </span><span class="f2" style="font-size:11px;vertical-align:baseline;color:rgba(0,0,0,1);">Developed Financial training programs for all the divisions at NYU Wagner</span></div>\n<div class="txt" style="position:absolute; left:31px; top:647px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:672px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Infrastructure Improvement </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Program aimed to capture, consolidate, and analyze current state of financial training</span></div>\n<div class="txt" style="position:absolute; left:31px; top:685px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">needs, and define the future state addressing the gaps while adhering to the strategic plan of NYU Wagner.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:698px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Performed Requirement gathering session, developed requirement documentation, performed requirement</span></div>\n<div class="txt" style="position:absolute; left:49px; top:711px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">management using requirement traceability matrix etc.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:724px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Collaborated with cross-functional teams and departments to define requirements.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:738px;"><span class="f3" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Assessed and provided recommendations for changes or upgradation in existing financial practices within various</span></div>\n</body>\n</html>\n',
        "page3.html":
          '<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n<style type="text/css">\n.txt { white-space:nowrap; }\n.f0 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n.f1 { font-family:sans-serif; font-weight:normal; font-style:normal; }\n@font-face { font-family: ff1; src: url("1.ttf"); }\n.f2 { font-family:ff1,sans-serif; font-weight:normal; font-style:normal; }\n.f3 { font-family:monospace; font-weight:normal; font-style:normal; }\n.f4 { font-family:sans-serif; font-weight:bold; font-style:normal; }\n@font-face { font-family: ff2; src: url("2.ttf"); }\n.f5 { font-family:ff2,sans-serif; font-weight:bold; font-style:normal; }\n@font-face { font-family: ff3; src: url("3.ttf"); }\n.f6 { font-family:ff3,sans-serif; font-weight:normal; font-style:normal; }\n</style>\n</head>\n<body>\n<img style="position:absolute; left:0px; top:0px;" width="612" height="792" src="page3.png"">\n<div class="txt" style="position:absolute; left:49px; top:38px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">units at Wagner.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:51px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Developed project plans, managed issue and risk logs and mitigation strategies, budgets, and status meetings,</span></div>\n<div class="txt" style="position:absolute; left:49px; top:64px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">managing project resources.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:78px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Interacted with individual unit heads and gathered requirements as per the needs.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:96px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">McSilver Institute for Poverty Policy and Research</span></div>\n<div class="txt" style="position:absolute; left:31px; top:109px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Assistant</span></div>\n<div class="txt" style="position:absolute; left:305px; top:96px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:305px; top:109px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Nov-2014 </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Aug 2015</span></div>\n<div class="txt" style="position:absolute; left:31px; top:128px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Summary: </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Assist on multiple projects and initiatives through series of analysis using both Quantitative and Qualitative</span></div>\n<div class="txt" style="position:absolute; left:31px; top:140px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">research tools including STATA, SPSS and Excel.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:166px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Achievements: </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Successfully identified the defects in the data sampling processes provided recommendation/resolution to</span></div>\n<div class="txt" style="position:absolute; left:31px; top:178px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">correct the reports to support the right decision making.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:204px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:217px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Analyzed requirements, developed workflow charts and diagrams for multiple projects</span></div>\n<div class="txt" style="position:absolute; left:31px; top:230px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Support qualitative data collect processes through conducting of survey, focus groups, and interviews and</span></div>\n<div class="txt" style="position:absolute; left:49px; top:243px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">quantitative data from the already existing datasets.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:256px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Maintained system protocols by writing and updating specification documents.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:270px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Developed Functional Design Document (FDD)/Specification Document for various reports.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:287px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Fitch Ratings</span></div>\n<div class="txt" style="position:absolute; left:31px; top:299px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Assistant</span></div>\n<div class="txt" style="position:absolute; left:305px; top:287px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:305px; top:299px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Sep 2014</span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">May 2015</span></div>\n<div class="txt" style="position:absolute; left:31px; top:316px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Summary: </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Created </span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">a scalable metric for Fitch’s Public Finance Division in order to effectively analyze municipalities’</span></div>\n<div class="txt" style="position:absolute; left:31px; top:328px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">fiscal and debt issuing capacities across US. Ra</span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">n a comparative analysis of 50 largest US cities around households’</span></div>\n<div class="txt" style="position:absolute; left:31px; top:341px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">municipal costs.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:366px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:380px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Created a scalable metric which can support in effectively capturing the cost of municipalities across US cities.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:393px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Created large dataset highlighting various costs of largest municipalities, strategically captured all the complexities.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:407px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Collected and analyzed information from various data sources.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:420px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Determined operational objectives by studying needs, requirements of the project, gathering information; evaluating</span></div>\n<div class="txt" style="position:absolute; left:49px; top:433px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">output formats.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:446px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Supported the development and delivery team through the system implementation for marketing lead generation.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:460px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Conducted periodic review meetin</span><span class="f6" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">gs with the senior leadership team at Fitch’s Public Finance division.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:472px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">National Executive Service Corps</span></div>\n<div class="txt" style="position:absolute; left:305px; top:472px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:31px; top:485px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Consultant</span></div>\n<div class="txt" style="position:absolute; left:305px; top:485px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Jan 2015 </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">May 2015</span></div>\n<div class="txt" style="position:absolute; left:31px; top:503px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:517px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Construct strategic steps to improve existing structural design and model to enhance long term organizational</span></div>\n<div class="txt" style="position:absolute; left:49px; top:529px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">sustainability</span></div>\n<div class="txt" style="position:absolute; left:31px; top:543px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Designed a manual which included the structural and strategic outline for partnerships between the consultants and</span></div>\n<div class="txt" style="position:absolute; left:49px; top:556px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">interns for non-profit clients</span></div>\n<div class="txt" style="position:absolute; left:31px; top:569px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Initiated the partnership process between NESC and consulting clubs at Harvard, MIT</span></div>\n<div class="txt" style="position:absolute; left:31px; top:587px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York City - DCAS</span></div>\n<div class="txt" style="position:absolute; left:305px; top:587px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:31px; top:600px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Training Intern</span></div>\n<div class="txt" style="position:absolute; left:305px; top:600px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">June 2014 </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Sep 2014</span></div>\n<div class="txt" style="position:absolute; left:31px; top:613px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:626px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Analyzed requirements, developed workflow charts and diagrams, and assessed legacy system capabilities to develop</span></div>\n<div class="txt" style="position:absolute; left:49px; top:639px;"><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">system specifications documents.</span></div>\n<div class="txt" style="position:absolute; left:31px; top:652px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Help prepare training materials for all citywide agencies employees</span></div>\n<div class="txt" style="position:absolute; left:31px; top:665px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Created a database of potential training programs for upcoming training years</span></div>\n<div class="txt" style="position:absolute; left:31px; top:679px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Created a manual for the training participants involving all New York City government employees</span></div>\n<div class="txt" style="position:absolute; left:31px; top:694px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Kids for Tomorrow</span></div>\n<div class="txt" style="position:absolute; left:304px; top:694px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">New York, NY</span></div>\n<div class="txt" style="position:absolute; left:31px; top:706px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Finance Intern</span></div>\n<div class="txt" style="position:absolute; left:304px; top:706px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">June 2013 </span><span class="f5" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">– </span><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Aug 2013</span></div>\n<div class="txt" style="position:absolute; left:31px; top:732px;"><span class="f4" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Project Highlights:</span></div>\n<div class="txt" style="position:absolute; left:31px; top:745px;"><span class="f2" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">· </span><span class="f1" style="font-size:10px;vertical-align:baseline;color:rgba(0,0,0,1);">Facilitate the assessment of internal risks and investigation of existing financial set-up</span></div>\n</body>\n</html>\n',
      },
    },
  },
  {
    id: 4,
    endpoint: "/profiles/resumes",
    url: "http://localhost:8080/profiles/resumes?job_id=444&page=1&size=10",
    // “profiles/resumes/?job_id=789&page=1&size=10”
    method: "GET",
    response: {
      data: {
        resumes: [
          //   {
          //     rank: "1",
          //     name: "siva",
          //     location: "hyderabad",
          //     experience: "0.58",
          //     jobsApplied: 323,
          //     score: "0.69",
          //     keywords: ["react", "angular"],
          //     status: "active",
          //   },
          //   {
          //     rank: "2",
          //     name: "Venkat",
          //     location: "Banglore",
          //     experience: "2.5",
          //     jobsApplied: 3,
          //     score: "0.43",
          //     keywords: ["Python", "Scala"],
          //     status: "Unavailable",
          //   },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1234",
          },
          {
            rank: "2",
            score: "0.43",
            keywords: ["analytical", "automation", "big data"],
            name: "Mangat Sharmila",
            status: "Available",
            location: "New York",
            jobsApplied: 2,
            experience: "3.4",
            candidateID: "1235",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
          },
          {
            rank: "1",
            score: "0.63",
            keywords: ["analytical", "automation", "big data"],
            name: "GHANTASALA, Pavan Kumar",
            status: "Available",
            location: "Los Angeles",
            jobsApplied: 1,
            experience: "0.59",
            candidateID: "1236",
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
    endpoint: "/profiles/candidatesummary",
    url: "http://localhost:8080/profiles/candidatesummary?JobId=1&CandidateId=1",
    // /profiles/candidatesummary/?JobId=234&amp;CandidateId=85479
    method: "GET",
    response: {
      // data: {
      //   summary: "Some summary text",
      //   matchPercentage: 53,
      //   keywords: [
      //     {
      //       keyword: "Javascript",
      //       frequency: 4,
      //       matchPercentage: 40,
      //     },
      //   ],
      //   jobsApplied: [
      //     {
      //       id: 1123432,
      //       role: "Senior Front end developer",
      //     },
      //     {
      //       id: 1123433,
      //       role: "Front end developer",
      //     },
      //   ],
      // },
      data: {
        summary:
          "Name: Ghritalhre, Himanshu\nStatus: New\nOrganizations: Bachelors In Electronics And Telecommunications, Masters In Data Science\nEducation: Anthem, NC, Sealed Air, Index Analytics,PharmaForce International, Macro Software Solutions\nExperience: 6.7\nRoletype: Technical\nSkills:(support vector, agile, ai, ai, algorithm, algorithms, amazon, amazon (aws), analysis, analytical, analytics,aws, aws, big data, classification, cnn, cnn, convolutional neural network, dashboards, data modeling,data visualization, data visualizations, database, deep, deep learning, design, designing, developer,development, df, eda, emr, excel, excel, exploratory analysis, extract, extraction, forecast, ggplot2,ggplot2, git, git, gradient, grafana, implementation, linear, linux, linux, logistic regression, lstm, lstm,lstm model, machine learning, machine learning algorithms, macro, matplotlib, matplotlib, ml, modeling, mongodb, mongodb, mysql, mysql, mysql connector, mysql db, natural language processing, neural, neural networks, nlp, nlp, nosql, nosql databases, numpy, numpy packages, opencv, pandas, pandas, plotly, plots, power, power bi, predictive, predictive analysis, predictive data modeling, pycharm, pyspark, pyspark, python, python, python script, r, r, r-studio data, random, random forest, regression, regression, reporting, rnn, s3, s3, sas, schema, science, scikit, scipy, sdlc, seaborn, seaborn, segmentation, selenium, software, software development life cycle, spark, spark processing,, sql, sql, statistical, statistical analysis, studio, supervised, svm, svm, tableau, tableau, tensorflow, testing, text, trees, unsupervised, unsupervised machine learning, visual studio, visualization, visualizations, vmsvirtual machines, waterfall, windows, xgb classifier",
        matchPercentage: 53,
        keywords: [
          {
            keyword: "Javascript",
            frequency: 1423,
            score: 0.4,
          },
          {
            keyword: "React",
            frequency: 144,
            score: 0.3,
          },
          {
            keyword: "Angular",
            frequency: 1235,
            score: 0.6,
          },
        ],
        jobsApplied: [
          {
            id: 1123432,
            role: "Senior Front end developer",
            date: "2015-03-25T12:00:00Z",
            status: "active",
          },
          {
            id: 1123433,
            role: "Front end developer",
            date: "2015-03-25T12:00:00Z",
            status: "active",
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
        match_criteria: {
          "90 to 100": 0,
          "50 to 90": 114,
          "20 to 50": 44,
          "0 to 20": 0,
        },
      },
    },
  },
  {
    id: 10,
    // endpoint: "/profile/:parameters/metrics",
    // url: "http://localhost:8080/profile/12345/metrics",
    endpoint: "/profile/metrics/",
    url: "http://localhost:8080/profile/metrics/?JobId=234",
    method: "GET",
    response: {
      metrics: {
        // evaluation: 23,
        Selected: 23,
        Available: 48,
        Declined: 52,
        "On Hold": 23232,
        Applied: 30,
      },
      total: 1500,
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
    endpoint: "/profiles/feedback/:parameters1/:parameters2",
    // profiles/feedback/?candidateId=1234&jobId=456
    url: "http://localhost:8080/profiles/feedback/?candidateId=1234&jobId=456",
    // `${URLs.feedback}/?candidateId=${candID}&jobId=${dropDownJobID}`
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
