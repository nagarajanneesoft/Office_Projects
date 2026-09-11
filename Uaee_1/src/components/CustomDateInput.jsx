import React from "react";
import { Calendar } from "react-bootstrap-icons";

const CustomDateInput = React.forwardRef(
  ({ value, onClick, placeholder }, ref) => (
    <div
      onClick={onClick}
      ref={ref}
      className="form-control d-flex align-items-center justify-content-between"
      style={{
        cursor: "pointer",
        backgroundColor: "#fff",
        padding: "6px 10px", // keep consistent padding
        margin: 0,
      }}
    >
      <span className={!value ? "text-muted" : ""}>
        {value || placeholder || ""}
      </span>
      <Calendar color="#555" />
    </div>
  )
);

export default CustomDateInput;
