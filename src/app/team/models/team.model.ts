export interface Team {
  team: Array<Member>;
}

export interface Member {
  role: string;
  githubName: string;
  avatar?: string;
  name: string;
  description: string;
  linsk: {
    telegram?: string;
    vk?: string;
    linkedIn?: string;
    blog?: string;
  };
}
