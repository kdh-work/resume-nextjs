import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '동국대학교 (WISE)',
      subTitle: '컴퓨터공학전공',
      startedAt: '2018-03',
      endedAt: '2022-02',
    },
    {
      title: '화성고등학교',
      subTitle: '졸업',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
