import React from "react";
import "./Watchlist.css";
import Card from "../Card/Card";

const WatchList = () => {
  return (
    <div className="row watchList">
      <Card className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 ">
        <div className="p-3 glanceCart-details">
          <h1 className="fw-bold">Your Watchlist</h1>
          <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Stock</th>
                <th scope="col">Last Trading Point</th>
                <th scope="col">Present Value</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>BHEL</td>
                <td>23.5 ₹</td>
                <td className="text-success fw-bold">↑ 26.55 ₹</td>
                <td className="text-success fw-bold">+3.05 ₹</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>John Jacob</td>
                <td>500.20 ₹</td>
                <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                <td className="text-danger fw-bold">-80.70 ₹</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>AAPL</td>
                <td>2000.36 ₹</td>
                <td className="text-success fw-bold">↑ 2420.90 ₹</td>
                <td className="text-success fw-bold">+420.54 ₹</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Google</td>
                <td>1000.36 ₹</td>
                <td className="text-success fw-bold">↑ 1420.90 ₹</td>
                <td className="text-success fw-bold">+420.54 ₹</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Microsoft</td>
                <td>2000.36 ₹</td>
                <td className="text-success fw-bold">↑ 2220.90 ₹</td>
                <td className="text-success fw-bold">+220.54 ₹</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default WatchList;
