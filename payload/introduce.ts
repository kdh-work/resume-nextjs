import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Vue, JavaScript, TypeScript를 활용한 웹 서비스 프론트엔드 개발자입니다.',
    '클라우드 모니터링 소프트웨어 개발 프로젝트를 통해 클라우드 환경에서 필요한 모니터링 개념을 이해하고, 프로젝트의 방향성을 파악하며 더 나은 방안을 제시하기 위해 실무 경험과 추가 학습을 병행해왔습니다. 사용자 관점에서는 직관적이고 효율적인 UI/UX를 구현해 더 접근하기 쉬운 화면과 기능을 제공하고, 개발자 관점에서는 재사용 가능한 공통 컴포넌트 설계와 대용량 데이터 렌더링 최적화에 집중하고 있습니다.',
    '저는 프로젝트 분석과 문제 해결이 사용하는 기술에 대한 깊은 이해에서 시작된다고 믿습니다. 이를 위해 실제 프로젝트에서 기획 의도와 기능의 필요성을 빠르게 파악하려 노력했고, OpenStack 기술과 클라우드 환경의 구조적 특성을 반복 학습하며 개발 이해도를 높였습니다.',
    '또한 사용자 중심의 UI/UX를 제공하기 위해 기획, 디자인, 백엔드 등 다양한 분야의 팀원들과 협업하며 효과적인 커뮤니케이션의 중요성을 체감했습니다. 이를 바탕으로 각 직군에 적합한 소통 방식을 탐구하고, 팀워크를 강화하는 방법으로 활용해 왔습니다.',
  ],
  sign: 'Kwon',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
