import React, { useState } from "react";
import "./Order.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Ordercom = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.Orderdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(props.Orderdata.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="main-order">
      <h3>Recent Orders</h3>
      <div className="firstdiv">
        <table id="table1">
          <thead>
            <tr>
              <th className="order">
                <span>S.No</span>
              </th>
              <th className="product">Teacher</th>
              <th>class Time</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <tr key={i}>
                {/* Replace the below structure with your logic */}
                <td className="order">
                  <span>{record.tablespan}</span>
                </td>
                <td className="product">
                  <div className="img">
                    <img src={record.tableimg} alt="profileImage" />
                    <div className="proinfo">
                      <h3>{record.tablemade}</h3>
                    </div>
                  </div>
                </td>
                <td> {record.tablejohn}</td>
                <td> {record.tabledate}</td>

                {record.tableprocessing ? (
                  <td className="processing">{record.tableprocessing}</td>
                ) : null}
                {record.tabledelivered ? (
                  <td className="delivered">{record.tabledelivered}</td>
                ) : null}
                {record.tablecancelled ? (
                  <td className="cancelled">{record.tablecancelled}</td>
                ) : null}
                {/* End of your logic */}
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={prePage}>
                <AiFillCaretLeft />
              </a>
            </li>
            {number.map((n, i) => {
              if (n === currentPage) {
                return (
                  <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                    <span className="page-link arrorw focus">{n}</span>
                  </li>
                );
              } else if (
                n === 1 ||
                n === npage ||
                (n >= currentPage - 1 && n <= currentPage + 1)
              ) {
                return (
                  <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                    <a
                      href="#"
                      className="page-link arrorw focus"
                      onClick={() => changeCPage(n)}
                    >
                      {n}
                    </a>
                  </li>
                );
              } else if (n === currentPage - 2 || n === currentPage + 2) {
                return (
                  <li className="page-item ellipsis" key={i}>
                    <span>...</span>
                  </li>
                );
              }
              return null;
            })}
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={nextPage}>
                <AiFillCaretRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ordercom;
