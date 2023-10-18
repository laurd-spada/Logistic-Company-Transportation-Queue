import axios from "axios";
import { useState } from "react";
import { toastSuccess } from "../toastNotification/ToastNotification";

const CreateCustomerForm = () => {
  const initialCustomerData = {
    customerId: "",
    customerName: "",
    pickUpLocation: "",
    dropOffLocation: "",
  };
  const [customerData, setCustomerData] = useState(initialCustomerData);

  const handdleSubmit = () => {
    event.preventDefault();
    console.log(customerData);
    axios.post("http://localhost:8081/api/v1/transport-logistics/customer", customerData)
    toastSuccess({ message: `Customer ${customerData.customerName} Created` })
  };
  const resetValues = () => {
    setCustomerData(initialCustomerData);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create Customer Form</h5>
        <form onSubmit={handdleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputText" className="col-sm-2 col-form-label">
              Customer Id
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Customers Id"
                value={customerData.customerId}
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    customerId: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputText" className="col-sm-2 col-form-label">
              Customer Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Customers Name"
                value={customerData.customerName}
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    customerName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Pickup Location</label>
            <div className="col-sm-10">
              <select
                className="form-select"
                value={customerData.pickUpLocation}
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    pickUpLocation: e.target.value,
                  })
                }
                aria-label="Default select example"
              >
                <option value="" disabled>
                  Select Pick-up Location
                </option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa-ibom">Akwa-ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Adamawa">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>

              </select>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Drop-Off Location</label>
            <div className="col-sm-10">
              <select
                className="form-select"
                value={customerData.dropOffLocation}
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    dropOffLocation: e.target.value,
                  })
                }
                aria-label="Default select example"
              >
                <option value="" disabled>
                  Select Drop-off Location
                </option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa-ibom">Akwa-ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Adamawa">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>
          </div>
          <div>
          <button type="submit" className="button"> Submit Form</button>
          <button onClick={resetValues} type="reset" className="button"> Reset Form</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomerForm;
