export type Skill = { jobSkillsId: number; jobSkillsTitle: string };
export type Skills = Skill[];

export type Role = {
  id?: number;
  jobRoleId: number;
  jobRoleTitle: string;
  jobRoleSkill: number;
};

export type Roles = Role[];

export type Post = {
  id: number;
  job_posting_id: number;
  company_name: string;
  location: string;
  job_posting_yoe: number;
  job_role_title: string;
  job_skills_title: string;
};
