import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { DndProvider } from "react-dnd";
import CustomerList from "./component/customer/CustomerList";
import Planner from "./component/planner/Planner";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./component/card/Card";
import CreateCustomerForm from "./component/customer/CreateCustomerForm";

function App() {
  const [customer, setCustomer] = useState([]);
  const [planner, setPlanner] = useState({});
  const [plannerDate, setPlannerDate] = useState(new Date());

  useEffect(() => {
    // Getting a list of created customers
    axios
      .get("http://localhost:8081/api/v1/transport-logistics/customers")
      .then((response) => {
        setCustomer(response.data);
      });
    //Configurations for only current date
    const currentDate = new Date().toISOString().split("T")[0];
    axios
      .get(
        `http://localhost:8081/api/v1/transport-logistics/planners?date=${currentDate}`
      )
      .then((response) => {
        setPlanner(response.data);
      });

    // Configuration for getting the date after 7 days and passing the data to the api
    // const endDate = new Date();
    // endDate.setDate(endDate.getDate() + 7);
    // const formattedEndDate = endDate.toISOString().split("T")[0];
    // axios
    //   .get(
    //     `/apihttp://localhost:8081/api/v1/transport-logistics/planners-range?startDate=${
    //       plannerDate.toISOString().split("T")[0]
    //     }&endDate=${formattedEndDate}`
    //   )
    //   .then((response) => {
    //     setPlanner(response.data);
    //   });
  }, []);

  const handleDrop = (customerId, slot) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const updatedPlanner = {
      ...planner,
      date: currentDate,
      [slot.toLowerCase()]: customer.find(
        (customer) => customer.id === customerId
      ).customerName,
    };
    console.log(updatedPlanner);
    axios
      .post(
        "http://localhost:8081/api/v1/transport-logistics/create-planner",
        updatedPlanner
      )
      .then((response) => {
        setPlanner(response.data);
      });
  };
  return (
    <main id="main" className="main">
      <div className="header">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="special">Transport Logistics</h1>
        </div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="row ">
          <div className="col">
            <Card>
              <CustomerList customers={customer} />
            </Card>
          </div>
          <div className="col">
            <Card>
              <Planner onDrop={handleDrop} planner={planner} />
            </Card>
          </div>
        </div>
      </DndProvider>

      <div>
        <CreateCustomerForm />
      </div>
    </main>
  );
}

export default App;
