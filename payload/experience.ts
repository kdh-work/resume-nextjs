import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '오케스트로',
      positions: [
        {
          title: 'Vista팀 Frontend Developer',
          startedAt: '2022-07',
          descriptions: [
            '클라우드 솔루션 개발 및 SI 사업 수행',
            '협업 위한 공통 컴포넌트 개발',
            '코드 퀄리티 상승과 이슈 보완 위한 동료 코드 리뷰',
            '기획 및 디자인 변경 사항 History 문서화',
            '통합적인 데이터 관리를 위한 API 송수신 데이터 공통화 계획',
            '사용자 UI/UX 위한 기획 개선 및 구현',
            '스토리보드 작성',
          ],
          skillKeywords: [
            'Vue.js',
            'JavaScript',
            'TypeScript',
            'Pinia',
            'Tanstack-Query',
            'Echart.js',
            'Ant Design',
            'PrimeVue',
          ],
        },
      ],
    },
    {
      title: '대보정보통신',
      positions: [
        {
          title: '전략기술팀 SI Developer',
          startedAt: '2021-12',
          endedAt: '2022-06',
          descriptions: [
            '공공 SI 및 SM 사업 수행',
            'WebSquare5 마이그레이션 및 신규 기능 개발',
            '기존 로직 이슈 개선',
            '프로젝트 사업 제안서 작성',
          ],
          skillKeywords: ['Java', 'SVN', 'WebSquare5', 'RDBMS'],
        },
      ],
    },
  ],
};

export default experience;
