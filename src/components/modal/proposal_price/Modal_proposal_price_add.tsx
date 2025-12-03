import React from "react";

interface MyModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal_proposal_price_add: React.FC<MyModalProps> = ({ show, onClose }) => {
  return (
    <>
      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add Proposal Price</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <form>
                <div className="">
                  <h6 className="fw-bolder ">Vehicle Information</h6>
                </div>
                <div className="row g-3">

                  <div className="col-md-4">
                    <label className="form-label">Vehicle Type</label>
                    <input type="text" className="form-control" placeholder="Enter vehicle type" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Purchase Price</label>
                    <input type="number" className="form-control" placeholder="Enter price" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Lifespan (years)</label>
                    <input type="number" className="form-control" placeholder="Enter lifespan" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Fixed Annual Interest Rate (%)</label>
                    <input type="number" className="form-control" placeholder="Enter rate" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Residual Value (per year)</label>
                    <input type="number" className="form-control" placeholder="Enter value" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Repayment Term (years)</label>
                    <input type="number" className="form-control" placeholder="Enter term" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Heavy Load Fuel Efficiency (km/L)</label>
                    <input type="number" className="form-control" placeholder="Enter efficiency" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Light Load Fuel Efficiency (km/L)</label>
                    <input type="number" className="form-control" placeholder="Enter efficiency" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Working Days per Year</label>
                    <input type="number" className="form-control" placeholder="Enter days" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Unit Price (Tire)</label>
                    <input type="number" className="form-control" placeholder="Enter unit price" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Tire Count per Truck</label>
                    <input type="number" className="form-control" placeholder="Enter count" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Tire Service Life</label>
                    <input type="number" className="form-control" placeholder="Enter service life" />
                  </div>

                </div>

                <hr />

                <div className="row">

                  <div className="">
                    <h6 className="fw-bolder">Operation</h6>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Average Speed (km/h)</label>
                    <input type="number" className="form-control" placeholder="Enter average speed" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Working Hours (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter working hours" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Rest Hours (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter rest hours" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Start Location Time (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter start location time" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">End Location Time (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter end location time" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Container Return Time (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter container return time" />
                  </div>

                </div>

                <hr />
                <div className="">
                  <h6 className="fw-bolder">Administrative Costs</h6>
                </div>
<div className="row">
  
                  <div className="col-md-4">
                    <label className="form-label">เงินเดือนพนักงานขับรถ (บาท/เดือน)</label>
                    <input type="number" className="form-control" placeholder="Enter container return time" />
                  </div>
                  
                  <div className="col-md-4">
                    <label className="form-label">Container Return Time (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter container return time" />
                  </div>
                  
                  <div className="col-md-4">
                    <label className="form-label">Container Return Time (hours/day)</label>
                    <input type="number" className="form-control" placeholder="Enter container return time" />
                  </div>
</div>
              </form>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              <button className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop */}
      {show && (
        <div className="modal-backdrop fade show" onClick={onClose}></div>
      )}
    </>
  );
};

export default Modal_proposal_price_add;
