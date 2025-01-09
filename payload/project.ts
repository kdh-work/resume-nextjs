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
          content: '주 업무',
          weight: 'MEDIUM',
          descriptions: [{ content: '통합 모니터링 솔루션 SW Frontend 개발' }],
        },
        {
          content: '담당 업무',
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
          content: '주 업무',
          weight: 'MEDIUM',
          descriptions: [{ content: '통합 모니터링 솔루션 SW Frontend 개발' }],
        },
        {
          content: '담당 업무',
          weight: 'MEDIUM',
          descriptions: [
            { content: '모니터링 화면의 서버 장치 개발 및 모니터링 장치 공통 사항 기획 협의' },
            { content: '모니터링 설정의 장치 설정 탭 화면 개발' },
            { content: '모니터링 설정의 장치 그룹 설정 탭 화면 개발' },
            { content: '모니터링 설정의 클라우드 플랫폼 화면 개발' },
            { content: '공통 컴포넌트 및 모달 개발' },
            { content: '동료 코드 리뷰 및 테스트 시나리오 작성' },
            { content: '타사 모니터링 솔루션 기능 조사 및 분선' },
          ],
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
          content: '모니터링 솔루션 Frontend 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실시간 모니터링 조회 화면 개발' },
            { content: '실시간 모니터링 대상 상세 화면의 장치 상세 정보 및 기능별 탭 개발' },
            { content: '메트릭 탭의 주요 메트릭 차트 개발 및 크게 보기 팝업 오픈 기능 개발' },
            { content: '' },
          ],
        },
        {
          content: '초기 화면 기획 및 아키텍쳐 설계',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실시간 모니터링 대상의 상세 정보 및 기능별 조회 탭 기획 및 화면 설계' },
            { content: '에이전트 관리 및 에이전트 설정 화면 설계' },
            { content: '이벤트 조회 화면의 TimeSeries 차트 기획 및 API 수신 데이터 구조 제안' },
          ],
        },
        {
          content: 'PrimeVue 및 Echart.js 공통 컴포넌트 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Button 컴포넌트 개발' },
            { content: 'Tab 컴포넌트 개발' },
            { content: 'Echart.js 위젯 컴포넌트 개발' },
          ],
        },
        { content: 'PrimeVue에서 Ant Design Vue로 전환' },
      ],
    },
    {
      title: '삼성 SCP OpenStack 플랫폼 구축 프로젝트',
      startedAt: '2022-07',
      endedAt: '2023-04',
      where: '삼성 SDS',
      descriptions: [
        {
          content: 'Client 클라우드 모니터링 Frontend 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실시간 모니터링 화면 장치별 조회 메트릭 처리' },
            { content: '상세 메트릭 차트 PNG/CSV 다운로드 이슈 해결' },
            { content: '로그 설정 모달 상태 변경 기능 기획 제안 및 개발' },
            {
              content:
                '로그 상세 메인 모달에서 장치 선택 위한 서브 모달의 장치 종류 별 화면 및 기능 처리',
            },
            { content: '이벤트 조회 화면의 심각도 설정 변경 시 히스토리 조회 이슈 처리' },
            { content: '이벤트 설정 담당자별 알림 수단 변경사항 적용' },
            { content: '담당자 추가 모달에서 단건 추가와 전체 추가 시 중복 사용자 등록 이슈 해결' },
            { content: '대시보드용 위젯 생성을 위한 장치 선택 팝업 장치종류별 화면 처리' },
            { content: '차트 최대 단위로 자동 계산 처리 기능 개발' },
            { content: 'Input 종류별 validation 처리' },
          ],
        },
        {
          content: '스토리보드 작성 및 버전별 히스토리 문서화',
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
          descriptions: [
            {
              content: '고객 관리 파트 화면 담당 개발',
            },
            {
              content: '신규 버전 기능 추가 개발',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
