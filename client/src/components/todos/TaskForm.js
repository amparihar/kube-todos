import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

import { useFormState } from "../../common";

const WrappedTaskForm = ({ task, ...props }) => {
  const focusRef = useRef(null);
  const { formState, setState: setFormState } = useFormState(task);
  useEffect(() => {
    focusRef.current.focus();
  }, [focusRef]);
  const handleBack = () => props.history.push("/todos");
  const handleOnChange = (e) => {
    setFormState(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.save(formState);
    handleBack();
  };
  return (
    <>
      <div className="card p-2" style={{ width: "40rem" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              ref={focusRef}
              type="text"
              name="name"
              value={formState.name}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Enter Task Name"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="mr-2">Completed</label>
            <input
              type="checkbox"
              name="isComplete"
              checked={formState.isComplete}
              onChange={handleOnChange}
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">
            {task.id ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
      <div className="pt-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default withRouter(WrappedTaskForm);
