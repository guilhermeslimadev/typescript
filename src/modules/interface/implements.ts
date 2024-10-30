export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  }

  interface Resume {
    dateOfBirth?: Date;
    sumary?: string;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume(
    'Jorge Sant Ana',
    'jorge@argus-academy.com',
    [],
  );

  myResume.addSkill({ name: 'JavaScript', level: 'advanced' });
  myResume.addSkill({ name: 'TypeScript', level: 'advanced' });
  console.log(myResume);

  /*
  const MyResume: Resume = {
    fullName: 'Jorge Sant Ana',
    email: 'jorge@argus-academy.com',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
    ],
  };

  console.log(MyResume);
  */
};
