import Step from '../Step/Step';
import './Questionare.css';
import PersonalDetail from '../PersonalDetail/PersonalDetail';
import CollegeDetail from '../CollegeDetail/CollegeDetail';
import ApplicantCollege from '../ApplicantCollege/ApplicantCollege';
import MoreApplicantInfo from '../MoreApplicantInfo/MoreApplicantInfo';
import ApplicantQues from '../ApplicantQues/ApplicantQues';

const SampleComponent = () => {
  return (
    <div>
      <input placeholder="input here" />
      <button>Click here</button>
    </div>
  );
};

export default function Quentionare() {
  const steps = [
    {
      title: 'Personal Detail',
      component: <PersonalDetail />,
    },
    {
      title: 'College Detail',
      component: <CollegeDetail />,
    },
    {
      title: 'Application',
      component: <ApplicantCollege />,
    },
    {
      title: 'Application',
      component: <MoreApplicantInfo />,
    },
    {
        title: 'Application',
        component: <ApplicantQues/>,
    },
  ];

  return (
    <div className='questionare'>
      <Step current={1} steps={steps} showButtons finishedColor="green" />
    </div>
  );
}
