import "./addfunds.css";
import { useState } from "react";
import Card from "../Main/Card/Card";
import CardWithDetailsinsideData from "../Main/Layout/CardWithDetails_insideData";
import PreviousTransactions from "./PreviousTransactions";

const AddFunds = () => {
    const [showTrans, setShowtrans] = useState(false);

  const displayTransactions = function () {
    setShowtrans(true);
  };
  const onClick_addMoney = (e) => {
    e.preventDefault();
    alert("money is added to your wallet successfully");
  };
  return (
    <section className="p-3">
      <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <CardWithDetailsinsideData
            type="Wallet Balance"
            value="₹ 2.32k"
            icon="🪙"
          ></CardWithDetailsinsideData>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <CardWithDetailsinsideData
            type="Total Investment (till date)"
            value="₹ 20.32k"
            icon="💰"
          ></CardWithDetailsinsideData>
        </div>
      </div>
      <Card>
        <form>
          <div className="row p-3">
            <h3>
              <u>Add Money to Wallet</u> :
            </h3>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="form-group">
                <label>
                  User Name<sup className="text-danger fw-bold">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="enter name"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="form-group">
                <label>
                  User Code<sup className="text-danger fw-bold">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="security code"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="form-group">
                <label>
                  Amount<sup className="text-danger fw-bold">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="in rupees"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="form-group">
                <label>
                  Select your Bank<sup className="text-danger fw-bold">*</sup>
                </label>
                <select className="form-select">
                  <option>-select-</option>
                  <option>Some random bank</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <div className="form-group">
                <label>
                  Type of Payment<sup className="text-danger fw-bold">*</sup>
                </label>
                <select className="form-select">
                  <option>-select-</option>
                  <option>Internet Banking</option>
                  <option>UPI</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xxl-8">
              <div className="form-group">
                <label>Comment/Reason</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="reason"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 mt-3">
              <button
                className="btn btn-outline-success"
                onClick={onClick_addMoney}
              >
                Add to Wallet
              </button>
            </div>
          </div>
        </form>
      </Card>
      <p className="showTransactions text-success" onClick={displayTransactions}>
        click to see previous transactions ↓
      </p>
      <br />
      {showTrans && (<div className='mt-3'><PreviousTransactions/></div>)}
    </section>
  );
};

export default AddFunds;
