import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TeamMemberComponent } from './team-member.component';
import { Member } from '../../models/member.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const member: Member = {
  role: 'Самый крутой покемон',
  githubName: 'pika',
  // tslint:disable-next-line: max-line-length
  avatar: `https://vignette.wikia.nocookie.net/anime-characters-fight/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/340?cb=20181021155144&path-prefix=ru`,
  name: 'Pikachu',
  description: `Пикачу эволюционирует из другого покемона, Пичу,
    а сам Пикачу впоследствии может эволюционировать в Райчу`,
  links: {
    telegram: 't.me',
    vk: 'vk.com',
    linkedIn: 'linkedin.com'
  }
};

storiesOf('Team', module).addDecorator(moduleMetadata({
  declarations: [TeamMemberComponent],
  imports: [FontAwesomeModule]
})).add('Member', () => {
  return {
    template: `<div style="max-width: 375px; text-align: center;">
    <app-team-member [member]=member></app-team-member></div>`,
    props: {
      member
    }
  };
});
