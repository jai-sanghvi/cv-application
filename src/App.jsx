import './App.css'
import Input from './components/Input'
import Form from './components/Form'
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName:'',
    email:'',
    phone:'',
    education:[{
      id:crypto.randomUUID(),
      institute:'Some University',
      course:'',
      eduStartDate:'',
      eduEndDate:''
    }],
    experience:[{
      id:crypto.randomUUID(),
      companyName:'Apple Inc.',
      positionTitle:'',
      description:'',
      startDate:'',
      endDate:'',
    }],
  });

  function changeHandler(e, section, index) {
    let {name, value} = e.target;
    name = name.split('-').reduce((str, curr) => str + curr[0].toUpperCase() + curr.slice(1));
    if (section === 'education') {
      const newEducation = formData.education;
      newEducation[index][name] = value;
      setFormData({...formData, education: newEducation});
    } else if (section === 'experience') {
      const newExperience = formData.experience;
      newExperience[index][name] = value;
      setFormData({...formData, education: newExperience});
    } else {
      setFormData({...formData, [name]: value});
    }
  }

  function addInputGroup(section) {
    if (section === 'education') {
      setFormData({...formData, education:[...formData.education, {
        id:crypto.randomUUID(),
        institute:'Some University',
        course:'',
        eduStartDate:'',
        eduEndDate:''
      }]})
    }  else if (section === 'experience') {
      setFormData({...formData, experience:[...formData.experience, {
        id:crypto.randomUUID(),
        companyName:'Apple Inc.',
        positionTitle:'',
        description:'',
        startDate:'',
        endDate:'',
      }]})
    }
  }

  function deleteInputGroup(section, index) {
    const updatedFormData = {...formData};
    updatedFormData[section === 'education' ? 'education' : 'experience'].splice(index, 1);
    setFormData(updatedFormData);
  }

  return (
    <>
      <Form title='Personal Details'>
        <Input label='Full Name' placeholder='John Doe' onChange={changeHandler} name="full-name" value={formData.fullName} />
        <Input type='email' label='Email' placeholder='hi@johndoe.com' onChange={changeHandler} name="email" value={formData.email} />
        <Input type="tel" label='Phone' placeholder="+91 12345 67890" onChange={changeHandler} name="phone" value={formData.phone} />
      </Form>
      <Form title="Education">
        {formData.education.map((education, index) => {
          return (
            <details key={education.id} name='edu-container' open>
              <summary>{education.institute}</summary>
              <Input label='Institute' placeholder='School / College name' onChange={(e) => changeHandler(e, "education", index)} name='institute' value={education.institute} />
              <Input label='Course' placeholder='Bachelor of Technology' onChange={(e) => changeHandler(e, "education", index)} name='course' value={education.course} />
              <Input label='Start Date' placeholder='January 2025' onChange={(e) => changeHandler(e, "education", index)} name='edu-start-date' value={education.eduStartDate} />
              <Input label='End Date' placeholder='January 2027' onChange={(e) => changeHandler(e, "education", index)} name='edu-end-date' value={education.eduEndDate} />
              <button type="button" onClick={() => deleteInputGroup("education", index)} className="delete-button">Delete</button>
            </details>
          )
        })}
        <button type="button" onClick={() => addInputGroup('education')} className="add-button">Add Education</button>
      </Form>
      <Form title="Experience">
        {formData.experience.map((experience, index) => {
          return (
            <details key={experience.id} name='exp-container' open>
              <summary>{experience.companyName}</summary>
              <Input label='Company Name' placeholder='Apple Inc.' onChange={(e) => changeHandler(e, "experience", index)} name='company-name' value={experience.companyName} />
              <Input label='Position Title' placeholder='Software Developer' onChange={(e) => changeHandler(e, "experience", index)} name='position-title' value={experience.positionTitle} />
              <Input label='Start Date' placeholder='January 2025' onChange={(e) => changeHandler(e, "experience", index)} name='start-date' value={experience.startDate} />
              <Input label='End Date' placeholder='January 2027' onChange={(e) => changeHandler(e, "experience", index)} name='end-date' value={experience.endDate} />
              <Input type='textarea' label='Description' placeholder='Add Job Responsibilities' onChange={(e) => changeHandler(e, "experience", index)} name='description' value={experience.description} />
              <button type="button" onClick={() => deleteInputGroup("experience", index)} className="delete-button">Delete</button>
            </details>
          )
        })}
        <button type="button" onClick={() => addInputGroup('experience')} className="add-button">Add Experience</button>
      </Form>
      <div id='cv'></div>
    </>
  )
}

export default App
