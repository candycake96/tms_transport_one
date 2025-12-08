import { useEffect, useState } from "react";
import { FaMarker } from "react-icons/fa";
import axios from "axios";
import Modal_proposal_price_add from "../../components/modal/proposal_price/Modal_proposal_price_add";

// ✅ สร้าง Interface ให้ตรงกับข้อมูลใน DB
export interface VehicleCost {
  costs_id: number;
  costs_type_vehicle: string;
  price_vehicle: number;
  lifespan: number;
  interest_rate: number;
  Installments: number;
  residual_value: number;
  purchase_month: number;
  light_duty_vehicle: number;
  heavy_duty_vehicle: number;
  tyre_price: number;
  tyre_count: number;
  tire_mileage_limit: number;
  average_speed: number;

  // ❗ working_hours สามารถเป็น null ตามข้อมูลจริง
  working_hours: number | null;

  rest_time: number;
  origin_stop_time: number;
  destination_stop_time: number;
  container_rest_time: number;
  driver_salary: number;
  vehicle_premium_amount: number;
  cargo_premium_amount: number;
  registration_fee: number;
  tax_fee: number;
  car_loan_payment: number;
  gps_installation: number;
}

interface VehicleCostResponse {
  success: boolean;
  data: VehicleCost[];
}


const Proposal_price_setting = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  // ⛔ ไม่ใช้ any แล้ว
  const [data, setData] = useState<VehicleCost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // โหลดข้อมูลจาก API (แบบ TS)
 const fetchData = async () => {
  try {
    setLoading(true);

    const response = await axios.get<VehicleCostResponse>(
      "http://localhost:3000/proposal-price"
    );

    // ป้องกัน undefined
    if (response.data.success) {
      setData(response.data.data);
    } else {
      setError("โหลดข้อมูลไม่สำเร็จ");
    }

    setLoading(false);
  } catch (err) {
    setError("ไม่สามารถโหลดข้อมูลได้");
    setLoading(false);
  }
};


  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setIsOpenModal(false);
    fetchData(); // refresh หลังบันทึก
  };

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
              + Add
            </button>
          </div>

          <div className="card-body">

            {/* Loading */}
            {loading && <p>กำลังโหลดข้อมูล...</p>}

            {/* Error */}
            {error && <p className="text-danger">{error}</p>}

            {/* Table */}
            {!loading && data.length > 0 && (
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
                  {data.map((item) => (
                    <tr key={item.costs_id}>
                      <td>{item.costs_type_vehicle}</td>
                      <td>{item.price_vehicle.toLocaleString()}</td>
                      <td>{item.lifespan} years</td>
                      <td>
                        <button className="btn btn-primary btn-sm">
                          <FaMarker size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {!loading && data.length === 0 && <p>ยังไม่มีข้อมูล</p>}
          </div>
        </div>
      </div>

      <Modal_proposal_price_add
        show={isOpenModal}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Proposal_price_setting;
