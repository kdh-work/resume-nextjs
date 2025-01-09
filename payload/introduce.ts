import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Vue, JavaScript, TypeScript를 활용한 웹 서비스 프론트엔드 개발자입니다.',
    '클라우드 모니터링 소프트웨어 개발 프로젝트를 통해 클라우드 환경에서 필요한 모니터링 개념을 이해하고, 프로젝트의 방향성을 파악하며 더 나은 방안을 제시하기 위해 추가 학습과 실무 경험으로 이를 보완해왔습니다. 사용자 관점에서는 더 접근하기 쉬운 화면과 기능을 제공하기 위해 직관적이고 효율적인 UI/UX 구현에 초점을 맞추고, 개발자 관점에서는 재사용 가능한 공통 컴포넌트 구현에 중점을 두고 있습니다. 최근에는 보안적으로 안전한 코드 구현에 대해 고민하고 학습하고 있습니다.',
    '프론트엔드외 다양한 기술 분야에도 호기심이 많아, 기술 이해도를 높이기 위해 꾸준히 학습하고 있습니다. 프로젝트 분석과 문제 해결은 사용하는 기술에 대한 깊은 이해에서 시작된다고 믿으며, 이를 위해 OpenStack 기술 개념을 학습했으며 실제 데이터에 대해 더 자세하게 접근하고 싶어 SQL 학습을 병행하고 있습니다.',
    '또한, 사용자 중심의 UI/UX를 제공하기 위해 기획, 디자인, 백엔드 등 다양한 영역의 팀원들과 협업하며 효과적인 커뮤니케이션의 중요성을 체감했습니다. 이를 바탕으로 각 분야의 접근성에 적합한 소통 방식을 탐구하고, 이를 통해 팀워크를 강화하는 데 힘쓰고 있습니다.',
  ],
  sign: 'Kwon',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
