import React from 'react'
import { Bookmark } from 'lucide-react'
import Card  from  './components/Card'

const App = () => {


const jobs = [
  {
    brandLogo: "https://www.logomaker.com/wp-content/uploads/2025/08/Google-Logo-History-Evolution-of-Googles-Iconic-G-Logo-4-1024x582.webp",
    company: "Google",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    posted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/z/meta-logo-facebook-rebrand-concept-icon-blue-color-social-media-new-name-text-kyiv-ukraine-october-233509975.jpg",
    company: "Meta",
    posted: "10 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_sabM9l8jBnJURUAjZJf2qlUPlkwGDV7KQ&s",
    company: "Apple",
    posted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    company: "Netflix",
    posted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://msftstories.thesourcemediaassets.com/2022/05/Microsoft-logo_rgb_c-gray-540x280.png",
    company: "Microsoft",
    posted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg",
    company: "Tesla",
    posted: "6 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2407/PNG/512/uber_icon_146079.png",
    company: "Uber",
    posted: "8 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8-300x300.jpg",
    company: "Airbnb",
    posted: "12 days ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:480,cw:2881,ch:2161,q:80,w:2560/DtGtLda47VdS8pE2iJLbBZ.jpg",
    company: "Adobe",
    posted: "10 weeks ago",
    post: "UI Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  }
];



  return (
    <div className='parent'>
     {jobs.map(function(element){
       return <Card company={element.company} pay={element.pay}  location={element.location}  brandLogo={element.brandLogo}     post={element.post} tag1={element.tag1} tag2={element.tag2}/>
     })}
      
    </div>
  )
}

export default App
