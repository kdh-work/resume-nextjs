import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '하나금융 TI 통합 모니터링 솔루션 공동 개발 프로젝트 2차',
      startedAt: '2025-01',
      where: '오케스트로',
      descriptions: [
        {
          content: '프론트엔드 개발 및 고도화',
        },
        {
          content: '고도화2',
          weight: 'MEDIUM',
          descriptions: [{ content: '설명1' }, { content: '설명2' }],
        },
      ],
    },
    {
      title: '하나금융 TI 통합 모니터링 솔루션 공동 개발 프로젝트 1차',
      startedAt: '2023-07',
      endedAt: '2024-12',
      where: '오케스트로',
      descriptions: [
        {
          content: '프론트엔드 개발',
        },
        {
          content: '고도화2',
          weight: 'MEDIUM',
          descriptions: [{ content: '설명1' }, { content: '설명2' }],
        },
      ],
    },
    {
      title: 'KB 국민은행 IQ+ 시스템 구축 프로젝트',
      startedAt: '2023-10',
      endedAt: '2024-01',
      where: 'KB 국민은행',
      descriptions: [
        {
          content: '고도화1',
        },
        {
          content: '고도화2',
          weight: 'MEDIUM',
          descriptions: [{ content: '설명1' }, { content: '설명2' }],
        },
      ],
    },
    {
      title: '자사 통합 모니터링 솔루션 POC',
      startedAt: '2023-05',
      endedAt: '2023-07',
      where: '오케스트로',
      descriptions: [
        {
          content: '고도화1',
        },
        {
          content: '고도화2',
          weight: 'MEDIUM',
          descriptions: [{ content: '설명1' }, { content: '설명2' }],
        },
      ],
    },
    {
      title: '삼성 SCP OpenStack 플랫폼 구축 프로젝트',
      startedAt: '2022-07',
      endedAt: '2023-04',
      where: '삼성 SDS',
      descriptions: [
        {
          content: '개발1',
        },
        {
          content: '개발2',
        },
      ],
    },
    {
      title: '건설공제 고객 중심 정보시스템 고도화 사업',
      startedAt: '2022-02',
      endedAt: '2022-06',
      where: '건설공제조합',
      descriptions: [
        {
          content: '개발1',
        },
        {
          content: '개발2',
        },
      ],
    },
  ],
};

export default project;
