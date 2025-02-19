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
          content: '장치/플랫폼 관리 파트 담당',
          weight: 'MEDIUM',
        },
        {
          content: '2차 신규 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '플랫폼 관리 - 스토리지 플랫폼(NetApp ONTAP)' }],
        },
        {
          content: '1차 개발 고도화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '상태 데이터 타입 통일' },
            { content: '장치 관리 고도화 - 장치 유형별 등록/수정 조건화' },
            { content: '플랫폼 관리 - 클라우드 플랫폼(OpenStack) 등록/수정 기능 기획&개발' },
          ],
        },
        {
          content: '공통 컴포넌트 및 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '공통 상태 아이콘 컴포넌트 개발' },
            { content: '공통 상태 코드 처리 기능 개발' },
          ],
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
          content: '통합 클라우드 성능 모니터링 솔루션 Frontend 개발',
          weight: 'MEDIUM',
        },
        {
          content: '모니터링 파트 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '모니터링 장치 상세 정보 컴포넌트 개발' },
            { content: '모니터링 장치 상세 메트릭 탭 및 메트릭 차트 크게보기 팝업 개발' },
            { content: '모니터링 장치 상세 네트워크 탭 개발' },
            { content: '모니터링 장치 상세 프로세스 탭 개발' },
            { content: '모니터링 장치 상세 이벤트 탭 개발' },
            { content: '모니터링 장치 상세 로그 탭 개발' },
          ],
        },
        {
          content: '모니터링 설정: 클라우드 플랫폼, 장치 관리(장치, 장치 그룹) 파트 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '클라우드 플랫폼 등록/수정 step(고정 5단계) 개발' },
            { content: '장치 등록/수정 step(2~7 단계) 개발' },
            { content: 'Pinia 이용한 step 별 데이터 가공 처리' },
            { content: '선 step 데이터 변경에 대한 후 step 데이터 연결 처리' },
            { content: 'OID 선택 모달 개발 및 종류별 선택 비활성화 처리' },
          ],
        },
        {
          content: '공통 컴포넌트 및 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '성공/실패 Toast 메세지 컴포넌트 개발' },
            { content: 'Right-Navigation(클릭 시 해당 탭 이동) 컴포넌트 개발' },
            { content: '가용성 상태 컴포넌트 개발' },
            { content: '담당자 선택 모달 개발' },
            { content: 'SNMP 상세 보기 모달 개발' },
            { content: 'OpenStack 도메인별 프로젝트 선택 모달 개발' },
            { content: '공통 단위 환산 기능 개발' },
            { content: '공통 연락처(이메일, 전화번호) 처리 기능 개발' },
          ],
        },
        {
          content: '기획 검토 및 확인',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '클라우드 플랫폼 OpenStack 실사용 기능과 다른 기획 이슈 전달 및 해결방안 제안',
            },
            { content: 'SNMP 설정 사용성 이슈 제기 및 해결방안 제안' },
            { content: 'SNMP OID 상세 정보의 대용량 조회 처리 이슈 전달 및 해결방안 제안' },
            { content: '담당 화면 기획 History 및 공통 기획 통일 문서 작성' },
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
          content: '빌드, 배포, 테스트 자동화 시스템 구축 Frontend 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '영향도/소스 코드 점검 관리 파트 담당' },
            { content: '테스트코드 작성 파트 담당' },
            { content: '다른 파트 화면 개발 지원' },
            { content: '동일 화면에서 권한에 따른 조건화 기능 개발' },
            { content: '기존 공통 컴포넌트 이슈 해결 및 추가 기능 개발' },
            { content: '권한 (워크플로우) 이슈 전달 및 개선안 제안' },
          ],
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
            { content: '인프라 그룹 상세 화면 개발' },
            { content: '관리 사용자 목록 화면 개발' },
            { content: '에이전트 관리 메인 화면 및 수동/자동 관리 팝업 개발' },
          ],
        },
        {
          content: '초기 화면 기획 및 아키텍쳐 설계',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실시간 모니터링 대상의 상세 정보 및 기능별 조회 탭 기획 및 화면 설계' },
            { content: '에이전트 관리 및 에이전트 설정 화면 설계' },
            { content: '이벤트 조회 화면의 TimeSeries 차트 기획 및 API 수신 데이터 구조 제안' },
            { content: '커스텀 로그 설정 팝업 개발' },
          ],
        },
        {
          content: 'PrimeVue 및 Echart.js 공통 컴포넌트 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Button 컴포넌트 개발' },
            { content: 'Tab 컴포넌트 개발' },
            { content: 'Echart.js 위젯 컴포넌트 개발' },
            { content: '공통 스타일 CSS 통일화' },
          ],
        },
        { content: 'Pinia 도입', weight: 'MEDIUM' },
        { content: 'Input-validation 기능 추가', weight: 'MEDIUM' },
        { content: '통합 단위 환산 메소드 개발', weight: 'MEDIUM' },
        { content: '타사 모니터링 솔루션 기능 조사 및 분석', weight: 'MEDIUM' },
        { content: 'PrimeVue에서 Ant Design Vue로 전환', weight: 'MEDIUM' },
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
