import React, { useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const ModalProposalPrice: React.FC<ModalProps> = ({ show, onClose }) => {
  const [step, setStep] = useState(0);

  // เก็บค่าทั้งหมดของฟอร์ม
  const [formData, setFormData] = useState({
    costs_id: "",
    costs_type_vehicle: "",
    price_vehicle: "",
    lifespan: "",
    interest_rate: "",
    Installments: "",
    residual_value: "",
    purchase_month: "",
    light_duty_vehicle: "",
    heavy_duty_vehicle: "",
    tyre_price: "",
    tyre_count: "",
    tire_mileage_limit: "",
    average_speed: "",
    woking_hours: "",
    rest_time: "",
    origin_stop_time: "",
    destination_stop_time: "",
    container_rest_time: "",
    driver_salary: "",
    vehicle_premium_amount: "",
    cargo_premium_amount: "",
    registration_fee: "",
    tax_fee: "",
    car_loan_payment: "",
    gps_installation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  if (!show) return null;

  const handleSubmit = () => {
    try {
      console.log(formData);
    } catch (error) {
      console.log("error 404");
    }
  }

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add Proposal Price</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Step Navigation */}
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button className={`nav-link ${step === 0 ? "active" : ""}`} onClick={() => setStep(0)}>Vehicle Info</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${step === 1 ? "active" : ""}`} onClick={() => setStep(1)}>Operation</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${step === 2 ? "active" : ""}`} onClick={() => setStep(2)}>Administrative Costs</button>
                </li>
              </ul>

              {/* Step Content */}
              {step === 0 && (
                <div className="row g-3">
                  {/* Vehicle Information */}
                  <div className="row g-3 mb-4">

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Vehicle Type</label>
                      <input
                        name="costs_type_vehicle"
                        type="text"
                        className="form-control"
                        placeholder="Enter vehicle type"
                        value={formData.costs_type_vehicle}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Purchase Price (THB)</label>
                      <input
                        name="price_vehicle"
                        type="number"
                        className="form-control"
                        placeholder="Enter price"
                        value={formData.price_vehicle}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Lifespan (years)</label>
                      <input
                        name="lifespan"
                        type="number"
                        className="form-control"
                        placeholder="Enter lifespan"
                        value={formData.lifespan}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Fixed Annual Interest Rate (%)</label>
                      <input
                        name="interest_rate"
                        type="number"
                        className="form-control"
                        placeholder="Enter rate"
                        value={formData.interest_rate}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Residual Value Vehicle ( % per year)</label>
                      <input
                        name="residual_value"
                        type="number"
                        className="form-control"
                        placeholder="Enter value"
                        value={formData.residual_value}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Repayment Term  (month)</label>
                      <input
                        name="Installments"
                        type="number"
                        className="form-control"
                        placeholder="Enter term"
                        value={formData.Installments}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Heavy Load Fuel Efficiency (km/L)</label>
                      <input
                        name="light_duty_vehicle"
                        type="number"
                        className="form-control"
                        placeholder="Enter efficiency"
                        value={formData.light_duty_vehicle}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Light Load Fuel Efficiency (km/L)</label>
                      <input
                        name="heavy_duty_vehicle"
                        type="number"
                        className="form-control"
                        placeholder="Enter efficiency"
                        value={formData.heavy_duty_vehicle}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Working Days per month</label>
                      <input
                        name="purchase_month"
                        type="number"
                        className="form-control"
                        placeholder="Enter days"
                        value={formData.purchase_month}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Tire Unit Price (THB)</label>
                      <input
                        name="tyre_price"
                        type="number"
                        className="form-control"
                        placeholder="Enter unit price"
                        value={formData.tyre_price}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Tire Count per Truck</label>
                      <input
                        name="tyre_count"
                        type="number"
                        className="form-control"
                        placeholder="Enter count"
                        value={formData.tyre_count}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Tire Service Life (years)</label>
                      <input
                        name="tire_mileage_limit"
                        type="number"
                        className="form-control"
                        value={formData.tire_mileage_limit}
                        onChange={handleChange}
                      />
                    </div>
                  </div>




                </div>
              )}

              {/* Operation */}
              {step === 1 && (
                <div className="row g-3">

                  <div className="row g-3 mb-4">

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Average Speed (km/h)</label>
                      <input
                        name="average_speed"
                        type="number"
                        className="form-control"
                        placeholder="Enter average speed"
                        value={formData.average_speed}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Working Hours (hours/day)</label>
                      <input
                        name="woking_hours"
                        type="number"
                        className="form-control"
                        placeholder="Enter working hours"
                        value={formData.woking_hours}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Rest Hours (hours/day)</label>
                      <input
                        name="rest_time"
                        type="number"
                        className="form-control"
                        placeholder="Enter rest hours"
                        value={formData.rest_time}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Start Location Time (hours/day)</label>
                      <input
                        name="origin_stop_time"
                        type="number"
                        className="form-control"
                        placeholder="Enter start location time"
                        value={formData.origin_stop_time}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">End Location Time (hours/day)</label>
                      <input
                        name="destination_stop_time"
                        type="number"
                        className="form-control"
                        placeholder="Enter end location time"
                        value={formData.destination_stop_time}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Container Return Time (hours/day)</label>
                      <input
                        name="container_rest_time"
                        type="number"
                        className="form-control"
                        placeholder="Enter container return time"
                        value={formData.container_rest_time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>


                </div>
              )}

              {/* Administrative Costs */}
              {step === 2 && (
                <div className="row g-3">

                  <div className="row g-3">

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Driver Salary (THB/month)</label>
                      <input
                        name="driver_salary"
                        type="number"
                        className="form-control"
                        placeholder="Enter driver salary per month"
                        value={formData.driver_salary}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Vehicle Insurance (THB/year)</label>
                      <input
                        name="vehicle_premium_amount"
                        type="number"
                        className="form-control"
                        placeholder="Enter vehicle insurance per year"
                        value={formData.vehicle_premium_amount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Cargo Insurance (THB/year)</label>
                      <input
                        name="cargo_premium_amount"
                        type="number"
                        className="form-control"
                        placeholder="Enter cargo insurance per year"
                        value={formData.cargo_premium_amount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Vehicle Registration (THB/year)</label>
                      <input
                        name="registration_fee"
                        type="number"
                        className="form-control"
                        placeholder="Enter vehicle registration per year"
                        value={formData.registration_fee}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Compulsory Insurance (THB/year)</label>
                      <input
                        name="tax_fee"
                        type="number"
                        className="form-control"
                        placeholder="Enter compulsory insurance per year"
                        value={formData.tax_fee}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Car Loan Payment (THB/month)</label>
                      <input
                        name="car_loan_payment"
                        type="number"
                        className="form-control"
                        placeholder="Enter car loan payment per month"
                        value={formData.car_loan_payment}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">GPS Installation (THB/month)</label>
                      <input
                        name="gps_installation"
                        type="number"
                        className="form-control"
                        placeholder="Enter GPS installation cost per month"
                        value={formData.gps_installation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Footer */}
            <div className="modal-footer">
              {step > 0 && <button className="btn btn-secondary" onClick={prevStep}>Previous</button>}
              {step < 2 && <button className="btn btn-primary" onClick={nextStep}>Next</button>}
              {step === 2 && <button className="btn btn-success" onClick={handleSubmit}>Save</button>}
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
};

export default ModalProposalPrice;
