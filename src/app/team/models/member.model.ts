export interface Member {
  role: string;
  githubName: string;
  avatar?: string;
  name: string;
  description: string;
  links: {
    telegram?: string;
    vk?: string;
    linkedIn?: string;
    blog?: string;
  };
}
