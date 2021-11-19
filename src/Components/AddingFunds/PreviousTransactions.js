import "./addfunds.css";
import React from "react";
import Card from "../Main/Card/Card";

const PreviousTransactions = () => {
  return (
    <div className="p-3">
      <div className="row">
        <Card className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 ">
          <div className="p-3">
            <h1 className="fw-bold">Your Recent Transactions</h1>
            <table class="table mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Credited Money</th>
                  <th scope="col">Payment Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>11-11-2021</td>
                  <td>23.5 ₹</td>
                  <td>UPI</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>11-11-2021</td>
                  <td>23.5 ₹</td>
                  <td>UPI</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>11-11-2021</td>
                  <td>23.5 ₹</td>
                  <td>UPI</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>11-11-2021</td>
                  <td>23.5 ₹</td>
                  <td>UPI</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>11-11-2021</td>
                  <td>23.5 ₹</td>
                  <td>UPI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PreviousTransactions;
