export type Skill = { jobSkillsId: number; jobSkillsTitle: string };
export type Skills = Skill[];

export type Role = {
  id?: number;
  jobRoleId: number;
  jobRoleTitle: string;
  jobRoleSkill: number;
};

export type Roles = Role[];
