import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App(props) {

  const response=[
    {
      itemName:"Nirma",
      itemDate:"14",
      itemMonth:"june",
      itemYear:"1524"
    },
     {
      itemName:"Nirma1",
      itemDate:"12",
      itemMonth:"july",
      itemYear:"1452"
    },
     {
      itemName:"Nirma2",
      itemDate:"15",
      itemMonth:"September",
      itemYear:"2003"
    },
  ]

  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day="{response[0].itemDate}" month="{response[0].itemMonth}" year="{response[0].itemYear}"></ItemDate>
      <Item name="{response[0].itemName}"></Item>
      <ItemDate day="{response[1].itemDate}" month="{response[1].itemMonth}" year="{response[1].itemYear}"></ItemDate>
      <Item name={response[0].itemName}></Item>
      <ItemDate day="{response[2].itemDate}" month="{response[2].itemMonth}" year="{response[2].itemYear}"></ItemDate>
      
      <div className="App">
     Hello pappu
    </div>
    </div>
    
  );
}

export default App;
