import React, { useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const ModalProposalPrice: React.FC<ModalProps> = ({ show, onClose }) => {
  const [step, setStep] = useState(0);

  // เก็บค่าทั้งหมดของฟอร์ม
  const [formData, setFormData] = useState({
    vehicleType: "",
    purchasePrice: "",
    lifespan: "",
    averageSpeed: "",
    workingHours: "",
    restHours: "",
    driverSalary: "",
    vehicleInsurance: "",

    costs_id: "",
    costs_type_vehicle: "",
    price_vehicle: "",
    service_life: "",
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
                  <button className={`nav-link ${step === 2 ? "active" : ""}`} onClick={() => setStep(2)}>Admin Costs</button>
                </li>
              </ul>

              {/* Step Content */}
              {step === 0 && (
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Vehicle Type</label>
                    <input
                      name="vehicleType"
                      type="text"
                      className="form-control"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      placeholder="Enter vehicle type"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Purchase Price</label>
                    <input
                      name="purchasePrice"
                      type="number"
                      className="form-control"
                      value={formData.purchasePrice}
                      onChange={handleChange}
                      placeholder="Enter price"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Lifespan (years)</label>
                    <input
                      name="lifespan"
                      type="number"
                      className="form-control"
                      value={formData.lifespan}
                      onChange={handleChange}
                      placeholder="Enter lifespan"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Average Speed (km/h)</label>
                    <input
                      name="averageSpeed"
                      type="number"
                      className="form-control"
                      value={formData.averageSpeed}
                      onChange={handleChange}
                      placeholder="Enter average speed"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Working Hours (hours/day)</label>
                    <input
                      name="workingHours"
                      type="number"
                      className="form-control"
                      value={formData.workingHours}
                      onChange={handleChange}
                      placeholder="Enter working hours"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Rest Hours (hours/day)</label>
                    <input
                      name="restHours"
                      type="number"
                      className="form-control"
                      value={formData.restHours}
                      onChange={handleChange}
                      placeholder="Enter rest hours"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Driver Salary (THB/month)</label>
                    <input
                      name="driverSalary"
                      type="number"
                      className="form-control"
                      value={formData.driverSalary}
                      onChange={handleChange}
                      placeholder="Enter driver salary"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Vehicle Insurance (THB/year)</label>
                    <input
                      name="vehicleInsurance"
                      type="number"
                      className="form-control"
                      value={formData.vehicleInsurance}
                      onChange={handleChange}
                      placeholder="Enter vehicle insurance"
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="modal-footer">
              {step > 0 && <button className="btn btn-secondary" onClick={prevStep}>Previous</button>}
              {step < 2 && <button className="btn btn-primary" onClick={nextStep}>Next</button>}
              {step === 2 && <button className="btn btn-success">Save</button>}
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
