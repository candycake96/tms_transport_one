import { useState } from "react";
import { FaMarker } from "react-icons/fa";
import Modal_proposal_price_add from "../../components/modal/proposal_price/Modal_proposal_price_add";

const Proposal_price_setting = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="container">
        <div>
          <p className="fw-bolder fs-5 text-primary">Proposal Price Setting</p>
        </div>

        <div className="card shadow-sm">
          <div className="card-header d-flex align-items-center">
            <span className="fw-bolder">Cost Settings</span>

            <button
              className="btn btn-primary btn-sm ms-auto"
              onClick={() => setIsOpenModal(true)}
            >
              + เพิ่มข้อมูล
            </button>
          </div>

          <div className="card-body">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Vehicle Type</th>
                  <th>Purchase Price</th>
                  <th>Vehicle Service Life</th>
                  <th>Show/Edit</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>หัว+หาง</td>
                  <td>1,222,222.00</td>
                  <td>20 years</td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      <FaMarker size={14} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal_proposal_price_add
        show={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default Proposal_price_setting;
