/*
   Objectives
   =========
*/

// Objective Owners

var objective_owners = {
    "1": "Chair",
    "2": "NEDs",
    "3": "Chief executive",
    "4": "Executive lead for health inequalities",
    "5": "People",
    "6": "Strategy",
    "7": "Finance",
    "8": "Operations/delivery",
    "9": "Data, digital and information",
    "10": "Clinical, quality and research",
  };

// Grading

var grading = {
    "1": "Emerging",
    "2": "Developing",
    "3": "Maturing/Thriving",
  };

// Theme

var theme = {
    "1": "Building public health capacity & capability",
    "2": "Data, insight, evidence and evaluation",
    "3": "Strategic leadership & accountability",
    "4": "System partnerships",
  };

// Objectives

var objectives = [
    {ref: "1.1", maturity: "2", theme: "3", objective: "Assure themselves that there is adequate strategic intent, relevant oversight (including clear governance approach and senior accountability) for addressing health inequalities",},
    {ref: "1.2", maturity: "1", theme: "3", objective: "Working alongside the chief executive, set specific health inequalities objective(s) for the chief executive",},
    {ref: "2.1", maturity: "2", theme: "3", objective: "NED membership and representation on relevant groups or committees within the trust governance structure with oversight for health inequalities work",},
    {ref: "2.2", maturity: "1", theme: "1", objective: "All NEDs to undertake baseline training on health inequalities, which is refreshed as needed and provided within the induction process for new NEDs",},
    {ref: "2.3", maturity: "3", theme: "1", objective: "All NEDs to seek opportunities for personal development on health inequalities",},
    {ref: "3.1", maturity: "2", theme: "3", objective: "Establish health inequality oversight within the trust governance structure",},
    {ref: "3.2", maturity: "1", theme: "3", objective: "Work with the Strategy Director and Executive Lead for health inequalities to include a commitment to reducing health inequalities in the trust’s organisational strategy",},
    {ref: "3.3", maturity: "3", theme: "1", objective: "Ensure staff at all levels of the organisation are aware of the vision and strategy for tackling health inequalities and understand their roles in delivering these",},
    {ref: "3.4", maturity: "1", theme: "3", objective: "Identify an executive Lead for health inequalities on the board",},
    {ref: "3.5", maturity: "2", theme: "1", objective: "Ensure the board receives an annual training on health inequalities, with priority for the board member appointed as Executive Lead for health inequalities. Training should be refreshed, as relevant, and provided in induction processes",},
    {ref: "3.6", maturity: "1", theme: "3", objective: "Set health inequalities objectives in annual objectives for all executive board members",},
    {ref: "3.7", maturity: "2", theme: "4", objective: "Ensure trust representation on appropriate Integrated Care System group(s) (and other system level groups) to contribute to system wide decision making on population health and tackling health inequalities",},
    {ref: "3.8", maturity: "3", theme: "1", objective: "Ensure that board members, senior leaders (Band 9 and Very Senior Managers) and those with line management responsibilities routinely demonstrate their understanding of, and commitment to, equality and health inequalities",},
    {ref: "3.9", maturity: "2", theme: "2", objective: "Set an expectation on board members to routinely report to the board on performance and outcomes data broken down by relevant characteristics (where available), such as ethnicity and deprivation",},
    {ref: "3.10", maturity: "3", theme: "3", objective: "Include equality and health inequalities related impacts and risks in board and committee papers (including minutes), alongside actions for how they will be mitigated and managed",},
    {ref: "3.11", maturity: "1", theme: "3", objective: "Engage the company secretary to ensure that the board agenda framework includes regular oversight on health inequalities",},
    {ref: "3.12", maturity: "2", theme: "2", objective: "Identify a trust lead for digital inclusion and provide supporting governance",},
    {ref: "4.1", maturity: "2", theme: "3", objective: "Provide strategic oversight of organisational health inequalities work and encourage other board members to embed an equity lens to their work programmes",},
    {ref: "4.2", maturity: "3", theme: "3", objective: "Ensure integrated working with HR and equality, diversity and inclusion (EDI) executive leads to achieve strategic alignment for workforce EDI and tackling inequality",},
    {ref: "4.3", maturity: "1", theme: "3", objective: "Publish an annual health inequalities report and/or update for the board",},
    {ref: "4.4", maturity: "2", theme: "3", objective: "Lead development of a trust level strategy or delivery plan for health inequalities, working with the Strategy Director, which sets out a workplan and measures of success",},
    {ref: "4.5", maturity: "1", theme: "3", objective: "Establish a working group(s), steering group(s) or committee(s) to oversee the organisation's work on health inequalities",},
    {ref: "4.6", maturity: "2", theme: "3", objective: "Provide oversight of external reporting on the trust’s health inequalities work",},
    {ref: "4.7", maturity: "1", theme: "1", objective: "Develop in-house public health capacity and capability to support the delivery health inequalities work",},
    {ref: "4.8", maturity: "3", theme: "4", objective: "Work collaboratively with senior leaders and health inequality leads in the ICS, other provider organisations/provider collaboratives and primary care networks (PCNs) to share learning and ensure scalability of health inequalities strategic work across systems",},
    {ref: "4.9", maturity: "2", theme: "2", objective: "Embed the use of tools such as the health equity assessment tool across your organisation when making decisions about service delivery",},
    {ref: "4.10", maturity: "3", theme: "1", objective: "Ensure there are systems in place to support frontline work on health inequalities, such as consolidating learning and sharing of best practice across the organisation and establishing learning networks or communities of interest for health inequalities",},
    {ref: "4.11", maturity: "3", theme: "3", objective: "Work collaboratively with executive board members leading on the organisation’s anchor institutions work, to ensure alignment with the health inequalities agenda",},
    {ref: "4.12", maturity: "3", theme: "4", objective: "Work with system partners to ensure the trust has pathways to engage with communities and local voluntary, community and social enterprise (VCSE) sector organisations",},
    {ref: "4.13", maturity: "1", theme: "3", objective: "Ensure the Equality Impact Assessment process takes into account existing health inequalities in the population and provides assurance that service developments will not exacerbate these, and where possible they will aim to reduce them. There should be specific consideration to those from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups in your trust",},
    {ref: "5.1", maturity: "2", theme: "1", objective: "Ensure all staff have training and development opportunities in health inequalities, with priority for induction programmes and leadership and development programmes. Training should be refreshed, as relevant",},
    {ref: "5.2", maturity: "2", theme: "1", objective: "Ensure all frontline staff have training and development opportunities in 'Making Every Contact Count'. Training should be refreshed, as relevant",},
    {ref: "5.3", maturity: "1", theme: "4", objective: "Establish programmes to improve access to employment for those from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups in your trust",},
    {ref: "5.4", maturity: "2", theme: "4", objective: "Maximise use of the apprenticeship levy to improve pathways into employment, either internally for existing staff or externally targeting groups from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups in your trust",},
    {ref: "5.5", maturity: "2", theme: "4", objective: "Establish mechanisms to support staff from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups",},
    {ref: "5.6", maturity: "3", theme: "1", objective: "Develop opportunities and systems to encourage and enable staff to develop public health expertise across a range of roles",},
    {ref: "5.7", maturity: "3", theme: "1", objective: "Consider training and development opportunities on inclusion health and trauma informed practice, with priority for staff interested in becoming inclusion health specialists. Training should be refreshed, as relevant",},
    {ref: "5.8", maturity: "1", theme: "3", objective: "Work in collaboration with the Executive Lead for health inequalities to understand and address health inequalities experienced by staff",},
    {ref: "5.9", maturity: "1", theme: "3", objective: "Consult with staff to provide appropriate support initiatives to address health inequalities in the workforce. This could include offering access to staff networks and peer support opportunities, employee wellbeing assistance, financial support services or food banks for staff",},
    {ref: "5.10", maturity: "2", theme: "3", objective: "Consult with staff to provide appropriate support initiatives to address inequalities in the workforce. This could include offering access to employee wellbeing assistance, financial support services or food banks for staff",},
    {ref: "6.1", maturity: "1", theme: "3", objective: "Work with the chief executive and Executive Lead for health inequalities to include a commitment to reducing health inequalities in the trust's organisational strategy, which reflects national and system requirements alongside local need",},
    {ref: "6.2", maturity: "3", theme: "3", objective: "Embed an equity lens across all organisational priorities, strategic documents and annual planning processes",},
    {ref: "6.3", maturity: "2", theme: "2", objective: "Ensure the trust's work programme for reducing health inequalities includes engagement and co-production with local communities. Co-production could include with staff, public and patient reference groups, engagement events, or similar mechanisms",},
    {ref: "6.4", maturity: "1", theme: "4", objective: "Develop a strategic focus on the trust's role as an anchor institution, considering employment opportunities, organisational supply chains, supporting local housing and access to green spaces",},
    {ref: "6.5", maturity: "2", theme: "3", objective: "Work in collaboration with the Executive Lead for health inequalities, People and estates teams, amongst others, to deliver anchor institutions work",},
    {ref: "7.1", maturity: "1", theme: "3", objective: "Embed health inequalities as part of financial decision making in the trust - including pathway review and design, business case approval and cost improvement programmes",},
    {ref: "7.2", maturity: "3", theme: "4", objective: "Work with commissioners and external organisations to identify funding opportunities for health inequalities initiatives",},
    {ref: "7.3", maturity: "2", theme: "3", objective: "Ensure opportunities are identified to invest in services that will prevent and mitigate healthcare inequalities and realise longer term benefits",},
    {ref: "7.4", maturity: "1", theme: "4", objective: "Purchase supplies and services from organisations that embed social value to make positive environmental, social and economic impacts",},
    {ref: "7.5", maturity: "2", theme: "4", objective: "Procure goods and services locally (within the catchment area of the trust) to boost local economies and reduce inequalities",},
    {ref: "8.1", maturity: "1", theme: "3", objective: "Identify divisional, below-board level, health inequalities lead(s) to drive the agenda at site and/or service level",},
    {ref: "8.2", maturity: "3", theme: "3", objective: "Ensure a trust wide focus on inclusive recovery and operational improvement through an equity lens",},
    {ref: "8.3", maturity: "3", theme: "1", objective: "Establish a culture of data reporting among staff on health inequalities outcomes, and on the impact of health inequality initiatives. Consider staff training to enable staff to feel confident in asking questions around ethnicity",},
    {ref: "8.4", maturity: "1", theme: "1", objective: "Consider staff training to enable staff to feel confident in asking questions around demographic characteristics, such as ethnicity. Training should be refreshed, as relevant",},
    {ref: "8.5", maturity: "2", theme: "2", objective: "Ensure that care pathways are reviewed to consider the extent to which they enable equitable access, experience, and outcomes. Transformation and quality improvement approaches should aim to reduce inequalities",},
    {ref: "8.6", maturity: "3", theme: "4", objective: "Enable services to embed co-production principles to inform work on health inequalities. Co-production could include with staff, public and patient reference groups, engagement events, or similar mechanisms",},
    {ref: "8.7", maturity: "2", theme: "2", objective: "Ensure that services prioritise equity of access, experience and outcomes for the most deprived 20% of the population, inclusion health groups, those with protected characteristics (and other relevant 'PLUS' groups) as per 'Core20PLUS5'",},
    {ref: "8.8", maturity: "2", theme: "2", objective: "Work with the communications lead to review trust communications with patients (such as leaflets and letters) in response to the health literacy and digital literacy levels of your patient population. Refresh and update communications accordingly",},
    {ref: "8.9", maturity: "2", theme: "3", objective: "Integrate equality impact assessment tools across clinical delivery",},
    {ref: "9.1", maturity: "1", theme: "2", objective: "Respond to the data indicators set out in the statement on information on health inequalities within annual reports, ideally setting out plans on how to improve outcomes in areas identified (NHS England, 2023a). ",},
    {ref: "9.2", maturity: "2", theme: "2", objective: "Datasets (including patient experience, patient safety, operational and clinical measures) to be broken down as a minimum by ethnicity, deprivation, age and sex. Where available, data on other protected characteristics and inclusion health groups could be considered",},
    {ref: "9.3", maturity: "1", theme: "2", objective: "Assess the baseline and set targets to improve data reporting by ethnicity, deprivation and protected characteristics.",},
    {ref: "9.4", maturity: "2", theme: "2", objective: "Set local metrics to monitor progress over time and ensure these are available in a timely manner to monitor services and support timely decision-making to ensure equity",},
    {ref: "9.5", maturity: "2", theme: "1", objective: "Build in-house capacity and capability for public health analytical work, including investment in digital, data and technology teams",},
    {ref: "9.6", maturity: "3", theme: "2", objective: "Consider how digital technology, such as electronic patient record systems, could be used to support health inequalities decision making",},
    {ref: "9.7", maturity: "1", theme: "2", objective: "Review relevant data sources to inform the strategic development of health inequalities measures, such as Joint Strategic Needs Assessments (JSNA), OHID's fingertips and trust catchment area tools",},
    {ref: "9.8", maturity: "1", theme: "4", objective: "Engage with regional/ICS population health analytics teams, and local authority public health teams to make use of existing population health data and support whole system approaches to tackling health inequalities. Where possible consider data sharing agreements and interoperability with local systems",},
    {ref: "9.9", maturity: "3", theme: "2", objective: "Collect qualitative data through engagement with population groups to incorporate patient’s views into health inequalities work (such as those from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups)",},
    {ref: "10.1", maturity: "1", theme: "3", objective: "Support the delivery of quality improvement work or change programmes related to health inequalities",},
    {ref: "10.2", maturity: "2", theme: "2", objective: "Apply a health inequalities framework across quality improvement and research work, to ensure that systems and programmes do not exacerbate or perpetuate inequalities",},
    {ref: "10.3", maturity: "2", theme: "2", objective: "Maximise research assets and expertise to develop programmes of work which have the potential to reduce health inequalities",},
    {ref: "10.4", maturity: "2", theme: "2", objective: "Include reference to health inequalities within all pillars of clinical governance (eg patient safety, audit), including learning for individual cases and overarching themes relating to health inequalities",},
    {ref: "10.5", maturity: "3", theme: "2", objective: "Work with research partners and in partnership with other NHS organisations to ensure participation in relevant research related to health inequalities, to develop an evidence-base on the effectiveness of provider led interventions to tackle inequalities",},
    {ref: "10.6", maturity: "3", theme: "1", objective: "Build in-house capacity and capability for health inequalities research work",},
    {ref: "10.7", maturity: "1", theme: "2", objective: "Review trust data on the five clinical priorities from 'Core20PLUS5' to inform the development of specific work programmes in these areas",},
    {ref: "10.8", maturity: "1", theme: "2", objective: "Use available data and insights to identify the most deprived 20% of the population and agree 'PLUS' groups within the 'Core20PLUS5' framework on which the trust will focus",},
    {ref: "10.9", maturity: "3", theme: "2", objective: "Consider active case finding approaches to reduce health inequalities, such as hypertension case finding and early cancer diagnosis",},
    {ref: "10.10", maturity: "1", theme: "2", objective: "Evaluate the impact of trust initiatives to address health inequalities",},
    {ref: "10.11", maturity: "3", theme: "4", objective: "Engage with groups that may not be traditionally involved in research or quality improvement, such as those from deprived areas, underrepresented ethnic minority groups, those with protected characteristics and/or inclusion health groups",},
  ];


// Objective Mapping

var linkedObjectives = {
    "1.1": ["2.2", "2.3", "3.5", "3.8"],
    "1.2": ["3.3", "4.10", "5.1", "5.2", "5.7", "8.4"],
    "1.3": ["10.1", "10.2"],
    "1.4": ["4.7", "5.6", "9.5", "10.6"],
    "2.1": ["8.3", "9.2", "9.3"],
    "2.2": ["3.9", "3.10", "3.11", "4.3", "9.1", "9.4"],
    "2.3": ["9.6", "9.7", "9.8", "10.4"],
    "2.4": ["10.3", "10.5", "10.10"],
    "2.5": ["9.9", "10.11"],
    "2.6": ["8.2", "10.9"],
    "2.7": ["3.12", "8.8"],
    "3.1": ["1.1", "3.2", "4.4", "6.1", "6.2"],
    "3.2": ["3.4"],
    "3.3": ["1.2", "3.6"],
    "3.4": ["4.1", "4.2", "4.6", "8.1"],
    "3.5": ["2.1", "3.1", "4.5"],
    "3.6": ["4.9", "4.13", "8.9"],
    "3.7": ["7.1", "7.2", "7.3"],
    "3.8": ["5.8", "5.9", "5.10"],
    "3.9": ["8.7", "10.7", "10.8"],
    "4.1": ["3.7", "4.8"],
    "4.2": ["4.11", "6.4", "6.5", "7.4", "7.5"],
    "4.3": ["5.3", "5.4", "5.5"],
    "4.4": ["6.3", "8.5", "8.6"],
    "4.5": ["4.12"],
  };

var minimum_objectives = {
  1: ["3.5", "4.7"],
  2: ["3.9", "9.3"],
  3: ["3.4", "6.1"],
  4: ["9.8"],
};

var removeIfYes = {
    "1":
    {
      "1": ["2.2", "3.5"],
      "2": ["5.1"],
      "3": ["10.1"],
      "4": ["4.7"],
    },
    "2":
    {
      "1": [],
      "2": ["3.9"],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": ["8.8"],
    },
    "3":
    {
      "1": ["3.2", "6.1"],
      "2": ["3.4"],
      "3": ["1.2"],
      "4": ["4.1"],
      "5": ["3.1", "4.5"],
      "6": [],
      "7": [],
      "8": ["5.8", "5.9"],
      "9": ["10.8"],
    },
    "4":
    {
      "1": ["3.7"],
      "2": ["6.4"],
      "3": ["5.3"],
      "4": [],
      "5": [],
    },
  }

export default {
  objective_owners,
  grading,
  theme,
  objectives,
  linkedObjectives,
  minimum_objectives,
  removeIfYes,
};