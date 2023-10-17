import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { DndProvider } from 'react-dnd'
import CustomerList from './component/CustomerList'
import Planner from './component/Planner'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [customer, setCustomer] = useState([])
  const [planner, setPlanner] = useState({})
  const [plannerDate, setPlannerDate] = useState(new Date());

  useEffect(() => {
    // Getting a list of created customers
    axios.get("http://localhost:8081/api/v1/transport-logistics/customers").then(response => {
      setCustomer(response.data)
    })
    //Configurations for only current date
    const currentDate = new Date().toISOString().split('T')[0]
    console.log(currentDate);
    axios.get(`http://localhost:8081/api/v1/transport-logistics/planners?date=${currentDate}`).then(response => {
      console.log("respopnse -----",response);
      setPlanner(response.data)
    })
    
    // Configuration for getting the date after 7 days and passing the data to the api
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const formattedEndDate = endDate.toISOString().split('T')[0];

    axios.get(`/apihttp://localhost:8081/api/v1/transport-logistics/planners-range?startDate=${plannerDate.toISOString().split('T')[0]}&endDate=${formattedEndDate}`).then(response => {
      setPlanner(response.data);
    });
  }, [plannerDate]);

    

  const handleDrop = (customerId, slot) => {
    const updatedPlanner = { ...planner, [slot.toLowerCase()]: customer.find(customer => customer.id === customerId).customerName  };
    console.log("doings ---", updatedPlanner);
    axios.post("http://localhost:8081/api/v1/transport-logistics/create-planner", updatedPlanner).then(response => {
      setPlanner(response.data)
    })
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <CustomerList customers={customer} />
        <Planner onDrop={handleDrop} planner={planner} />
      </div>
    </DndProvider>
  )
}

export default App
