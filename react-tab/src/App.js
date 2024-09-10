import './App.css';
import TabComponent from './components/Tab';
import Profile from './components/Profile';
import Experience from './components/Experience';

function App() {
  const personalTabData = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, Anytown, USA"
  }

  const professionalTabData = {
    jobDescription: "Software Engineer",
    skills: "JavaScript",
    experience: "5 years",
    hobbies: "Coding"
  }
  const tabsData = [
    { id:"tab1", title: 'Profile', component: Profile, data: personalTabData},
    { id:"tab2",title: 'Work Experience', component: Experience, data: professionalTabData },
  ];
  return (
    <div className="App">
     <TabComponent tabsData={tabsData} />
    </div>
  );
}

export default App;
