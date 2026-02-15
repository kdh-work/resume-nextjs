import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'CMP 솔루션 개발',
      startedAt: '2026-01',
      where: '오케스트로',
      descriptions: [
        {
          content: 'CMP 솔루션 인벤토리 파트 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '3.0.5 마이그레이션',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '릴리즈 7, 8 - 신규 화면 개발',
            },
            {
              content: 'QA 결함 - 설계 이슈 확인 후 대안 제안하여 이슈 해결',
            },
            {
              content: '입력값에 대한 Validation 처리 이슈 해결',
            },
          ],
        },
      ],
    },
    {
      title: '하나금융 TI 통합 모니터링 플랫폼 솔루션 공동 개발 프로젝트 2차',
      startedAt: '2025-01',
      endedAt: '2026-01',
      where: '오케스트로',
      descriptions: [
        {
          content: '통합 모니터링 플랫폼 솔루션 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '통합 관리 리드 담당',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '장치 관리 - 장치 설정, 장치 그룹 설정',
            },
            {
              content: '플랫폼 관리 - 클라우드 플랫폼(OpenStack), 스토리지 플랫폼(NetApp ONTAP)',
            },
            {
              content: '기획 및 백엔드 송수신 데이터 협의',
            },
          ],
        },
        {
          content: '컴포넌트/데이터 공통화 및 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '공통 상태 컴포넌트 및 처리 기능 개발' },
            { content: '공통 속성의 데이터 통일화 및 코드 처리' },
            { content: '전체 유효성 메세지 통일화' },
          ],
        },
        {
          content: '기획 설계 참여 및 UI/UX 개선',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '하나금융 TI 통합 모니터링 플랫폼 솔루션 공동 개발 프로젝트 1차',
      startedAt: '2023-07',
      endedAt: '2024-12',
      where: '오케스트로',
      descriptions: [
        {
          content: '통합 모니터링 플랫폼 솔루션 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '모니터링 파트, 장치 및 클라우드 플랫폼 설정 파트 리드 담당',
          weight: 'MEDIUM',
        },
        {
          content: '공통 컴포넌트 및 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '기획 설계 참여 및 백엔드 송수신 데이터 설계',
          weight: 'MEDIUM',
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
          content: '빌드, 배포, 테스트 자동화 시스템 구축 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '영향도/소스 코드 점검 관리 파트, 테스트코드 작성 파트 담당',
          weight: 'MEDIUM',
        },
        {
          content: '공통 컴포넌트 개발',
          weight: 'MEDIUM',
        },
        {
          content: '권한 기획 이슈 및 해결 방안 제시',
          weight: 'MEDIUM',
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
          content: '모니터링 솔루션 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '타사 모니터링 솔루션 기능 조사 및 분석',
          weight: 'MEDIUM',
        },
        {
          content: '화면 기능 기획 및 아키텍처 설계',
          weight: 'MEDIUM',
        },
        {
          content: 'Pinia 도입',
          weight: 'MEDIUM',
        },
        {
          content: '공통 컴포넌트 및 기능 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Echart.js 검토 및 공통 위젯 컴포넌트 개발' }],
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
          content: '삼성 SCP OpenSTack 플랫폼의 Client 클라우드 모니터링 - Frontend Developer',
          weight: 'MEDIUM',
        },
        {
          content: '인벤토리 파트, 이벤트 팥, 로그 파트, 에이전트 파트 리드 담당',
          weight: 'MEDIUM',
        },
        {
          content: '대시보드 및 차트 상세 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '필드별 조건처리 input-validation',
          weight: 'MEDIUM',
        },
        {
          content: '스토리보드 작성 및 버전별 히스토리 문서화',
          weight: 'MEDIUM',
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
          content: '건설공제 정보시스템 개선을 위한 Websquare 마이그레이션 (v3 -> v5)',
          weight: 'MEDIUM',
        },
        {
          content: '고객 관리 파트 담당 개발',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
