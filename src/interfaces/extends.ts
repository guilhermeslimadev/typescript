export const bootstrap = (): void => {
  type Font = 'bold' | 'italic';
  type Background = 'lightgray' | 'darkgray';
  type Layout = 'one-column' | 'two-column';

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public background: Background,
      public layout: Layout,
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);
      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume(
    'Guilherme',
    'guilherme@gmail.com',
    [
      { name: 'TypeScript', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'Node.js', level: 'intermediate' },
    ],
    'bold',
    'lightgray',
    'one-column',
  );

  myResume.addSkill({ name: 'Python', level: 'beginner' });

  console.log(myResume);
};
