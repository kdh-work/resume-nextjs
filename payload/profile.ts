import { faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/dh_kwon.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '권다혜',
    small: '(Dahye Kwon)',
  },
  contact: [
    {
      title: 'kdhtoon@gmail.com',
      link: 'mailto:kdhtoon@gamil.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'linkedin_da-hye-kwon',
      link: 'https://www.linkedin.com/in/da-hye-kwon-9b54b924a',
      icon: faLinkedin,
    },
    {
      title: 'Portfolio',
      link: 'https://kdh-work.github.io/project-log-book/',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.', // 'Notion 링크는 이메일로 요청해주세요',
    icon: faBell,
  },
};

export default profile;
