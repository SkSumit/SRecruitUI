import { Post } from '../types';

export const mapSkillsToOnePost = (posts: Post[]) => {
  const result = posts.reduce((acc: any, curr: Post) => {
    const idx = acc.findIndex(
      (i: any) => i.job_posting_id === curr.job_posting_id
    );
    const res = {};
    if (idx >= 0) {
      acc[
        idx
      ].job_skills_title = `${acc[idx].job_skills_title}, ${curr.job_skills_title}`;
    } else {
      return [...acc, curr];
    }

    return [...acc];
  }, []);

  return result;
};
