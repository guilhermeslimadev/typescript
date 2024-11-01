export const bootstrap = (): void => {
  type Font = 'roboto' | 'open sans' | 'poppins';
  type ColorScheme = 'light' | 'dark';
  type Layout = 'one-column' | 'two-column';

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorScheme: ColorScheme,
      public layout: Layout,
      public dateOfBirth: Date,
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
    'roboto',
    'dark',
    'two-column',
    new Date('2000-01-02'),
  );

  myResume.addSkill({ name: 'JavaScript', level: 'advanced' });
  myResume.addSkill({ name: 'TypeScript', level: 'advanced' });
  console.log(myResume);
};
