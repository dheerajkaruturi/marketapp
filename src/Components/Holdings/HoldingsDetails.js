import { Fragment } from "react";
import "./HoldingsDetails.css";
import Card from "../Main/Card/Card";

const HoldingsDetails = (props) => {
  return (
    <Fragment>
      <section>
        <div className="row p-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <Card>
              <div className="nifty-card_details p-3">
                <div>
                  <h3>Sensex</h3>
                  <span className="text-success">+140.0 ↑</span>
                </div>
                <div>
                  <span className="badge bg-success">LTP : 14,000.56</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <Card>
              <div className="nifty-card_details p-3">
                <div>
                  <h3>Nifty50</h3>
                  <span className="text-danger">-140.0 ↓</span>
                </div>
                <div>
                  <span className="badge bg-danger">LTP : 14,000.56</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <hr />
        <div className="row p-3">
          <h1>Holdings</h1>
          <div className="mt-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <Card>
              <div className="bg-custom_success holding-card_details p-1">
                <ul>
                  <li>
                    <div>AAPL</div>
                    <div>5 qty</div>
                    <div>₹ 500</div>
                    <div>₹ 700.21 ↑</div>
                    <div>₹ 200.21+</div>
                    <div>11-11-2021</div>
                    <div>
                      <button className="badge bg-success">Sell</button>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="mt-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <Card>
              <div className="bg-custom_success holding-card_details p-1">
                <ul>
                  <li>
                    <div>MLC</div>
                    <div>5 qty</div>
                    <div>₹ 500</div>
                    <div>₹ 700.21 ↑</div>
                    <div>₹ 200.21+</div>
                    <div>11-11-2021</div>
                    <div>
                      <button className="badge bg-success">Sell</button>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="mt-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <Card>
              <div className="bg-custom_success holding-card_details p-1">
                <ul>
                  <li>
                    <div>BBC</div>
                    <div>5 qty</div>
                    <div>₹ 500</div>
                    <div>₹ 700.21 ↑</div>
                    <div>₹ 200.21+</div>
                    <div>11-11-2021</div>
                    <div>
                      <button className="badge bg-success">Sell</button>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="mt-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <Card>
              <div className="bg-custom_danger holding-card_details p-1">
                <ul>
                  <li>
                    <div>AIT</div>
                    <div>5 qty</div>
                    <div>₹ 500</div>
                    <div>₹ 300.21 ↓</div>
                    <div>₹ 200.21-</div>
                    <div>11-11-2021</div>
                    <div>
                      <button className="badge bg-warning">Sell</button>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
        <div className="row p-3">
          <h2>Top Gainers in Market</h2>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Last Trading Point</th>
                  <th scope="col">Present Value</th>
                  <th scope="col">Change</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>BHEL</td>
                  <td>23.5 ₹</td>
                  <td className="text-success fw-bold">↑ 26.55 ₹</td>
                  <td className="text-success fw-bold">+3.05 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John Jacob</td>
                  <td>500.20 ₹</td>
                  <td className="text-success fw-bold">↑ 2420.90 ₹</td>
                  <td className="text-success fw-bold">+420.54 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>AAPL</td>
                  <td>2000.36 ₹</td>
                  <td className="text-success fw-bold">↑ 2420.90 ₹</td>
                  <td className="text-success fw-bold">+420.54 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Google</td>
                  <td>1000.36 ₹</td>
                  <td className="text-success fw-bold">↑ 1420.90 ₹</td>
                  <td className="text-success fw-bold">+420.54 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Microsoft</td>
                  <td>2000.36 ₹</td>
                  <td className="text-success fw-bold">↑ 2220.90 ₹</td>
                  <td className="text-success fw-bold">+220.54 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row p-3">
          <h2>Top Losers in Market</h2>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Last Trading Point</th>
                  <th scope="col">Present Value</th>
                  <th scope="col">Change</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>BHEL</td>
                  <td>23.5 ₹</td>
                  <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                  <td className="text-danger fw-bold">-80.70 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John Jacob</td>
                  <td>500.20 ₹</td>
                  <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                  <td className="text-danger fw-bold">-80.70 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>AAPL</td>
                  <td>2000.36 ₹</td>
                  <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                  <td className="text-danger fw-bold">-80.70 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Google</td>
                  <td>1000.36 ₹</td>
                  <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                  <td className="text-danger fw-bold">-80.70 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Microsoft</td>
                  <td>2000.36 ₹</td>
                  <td className="text-danger fw-bold">↓ 420.90 ₹</td>
                  <td className="text-danger fw-bold">-80.70 ₹</td>
                  <td>
                    <button className="badge bg-success">Buy</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HoldingsDetails;
