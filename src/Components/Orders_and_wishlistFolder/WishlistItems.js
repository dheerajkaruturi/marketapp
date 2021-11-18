import Card from "../Main/Card/Card";
import PurchaseShare from "./PurchaseShare";
import "./WishlistItem.css";

const WishlistItems = (props) => {
  return (
    <section className="p-3">
      <h1>Recent Orders Summary</h1>
      <div className="row mb-2">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card className="wishlist-items">
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">L & T</div>
              <div>₹ 300.8</div>
              <div>₹ 304.8</div>
              <div className="text-success fw-bold">₹ 30.8 ↑</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card>
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">Med</div>
              <div>₹ 3004.8</div>
              <div>₹ 3004.8</div>
              <div className="text-success fw-bold">₹ 30.8 ↑</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card className="wishlist-items">
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">FFC</div>
              <div>₹ 3004.8</div>
              <div>₹ 3004.8</div>
              <div className="text-success fw-bold">₹ 30.8 ↑</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card>
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">KLM</div>
              <div>₹ 124.8</div>
              <div>₹ 124.8</div>
              <div className="text-success fw-bold">₹ 20.8 ↑</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card className="wishlist-items">
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">BBc</div>
              <div>₹ 34.8</div>
              <div>₹ 34.8</div>
              <div className="text-danger fw-bold">₹ 10.8 ↓</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
          <Card>
            <div className="wishlist_Cards p-2">
              <div className="fw-bold">CAM</div>
              <div>₹ 304.8</div>
              <div>₹ 304.8</div>
              <div className="text-danger fw-bold">₹ 30.8 ↓</div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
            </div>
          </Card>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
          <h1>Your Wishlist</h1>
          <Card>
            <div className="p-3">
              <table class="table mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Last Trading Point</th>
                    <th scope="col">Present Value</th>
                    <th scope="col">Change</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>BHEL</td>
                    <td>23.5 ₹</td>
                    <td className="text-success fw-bold">26.55 ₹</td>
                    <td className="text-success fw-bold">+3.05 ₹</td>
                    <td>
                      <span className="badge bg-success">Buy</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">Notify</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">Remove</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>John Jacob</td>
                    <td>500.20 ₹</td>
                    <td className="text-danger fw-bold">420.90 ₹</td>
                    <td className="text-danger fw-bold">-80.70 ₹</td>
                    <td>
                      <span className="badge bg-success">Buy</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">Notify</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">Remove</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>AAPL</td>
                    <td>2000.36 ₹</td>
                    <td className="text-success fw-bold">2420.90 ₹</td>
                    <td className="text-success fw-bold">+420.54 ₹</td>
                    <td>
                      <span className="badge bg-success">Buy</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">Notify</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">Remove</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Google</td>
                    <td>1000.36 ₹</td>
                    <td className="text-success fw-bold">1420.90 ₹</td>
                    <td className="text-success fw-bold">+420.54 ₹</td>
                    <td>
                      <span className="badge bg-success">Buy</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">Notify</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">Remove</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Microsoft</td>
                    <td>2000.36 ₹</td>
                    <td className="text-success fw-bold">2220.90 ₹</td>
                    <td className="text-success fw-bold">+220.54 ₹</td>
                    <td>
                      <span className="badge bg-success">Buy</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">Notify</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">Remove</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <hr />
      <PurchaseShare></PurchaseShare>
    </section>
  );
};

export default WishlistItems;
