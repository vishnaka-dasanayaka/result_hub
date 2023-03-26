import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function DeletePopup(props) {
  const [input, setInput] = useState({
    indexNumber: "",
  });

  const [results, setResults] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const indexNumber = input.indexNumber;

    axios
      .get("http://localhost:3002/read?indexNo=" + indexNumber)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }

  const deleteResult = (id) => {
    axios
        .delete(`/delete/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        alert("Succesfully deleted !!");
        window.location.reload();
  };

  return props.deleteTrigger ? (
    <div className="popup">
      <div className="popup-inner">
        <br />
        <div className="form">
          <div className="header">DELETE RESULT</div>
          <div className="mainInputs">
            <h4 className="topic">Index Number : </h4>
            <input
              className="input"
              onChange={handleChange}
              name="indexNumber"
              value={input.indexNumber}
              autoComplete="off"
              type="text"
            />
          </div>
          <br />
          <div className="addButtonBox">
            <button onClick={handleClick} className="addButton">
              VIEW
            </button>
          </div>

          <h4 className="topic">Results</h4>

          {results &&
          <table className="resultTable">
            <tr>
              <td className="tableDetail">Combined Mathematics</td>
              <td className="tableDetail">
              <label className="newLabel" htmlFor="">{results.mathResult}</label>
              </td>
            </tr>

            <tr>
              <td className="tableDetail">Chemistry</td>
              <td className="tableDetail">
              <label className="newLabel" htmlFor="">{results.chemResult}</label>
              </td>
            </tr>

            <tr>
              <td className="tableDetail">Physics</td>
              <td className="tableDetail">
              <label className="newLabel" htmlFor="">{results.phyResult}</label>
              </td>
            </tr>

            <tr>
              <td className="tableDetail">General English</td>
              <td className="tableDetail">
              <label className="newLabel" htmlFor="">{results.engResult}</label>
              </td>
            </tr>

            <tr>
              <td className="tableDetail">Common Test</td>
              <td className="tableDetail">
              <label className="newLabel" htmlFor="">{results.testResult}</label>
              </td>
            </tr>
          </table>}
          <br />
          <div className="addButtonBox">
            <button onClick={() => deleteResult(results._id)} className="addButton">DELETE</button>
          </div>
        </div>
        <button
          className="close-btn"
          onClick={() => {
            props.setDeleteTrigger(false);
          }}
        >
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default DeletePopup;
