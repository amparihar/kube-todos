import React, { Fragment, useRef, useEffect } from "react";

import { useFormState } from "../../common";

const GroupForm = ({ group, onSave, ...props }) => {
  const focusRef = useRef(null);
  const { formState, setState: setFormState } = useFormState(group);
  useEffect(() => {
    focusRef.current.focus();
  }, [focusRef]);
  const handleOnChange = (e) => {
    setFormState(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            ref={focusRef}
            type="text"
            name="name"
            value={formState.name}
            onChange={handleOnChange}
            className="form-control"
            placeholder="Enter Group Name"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {group.id ? "Update Group" : "Add Group"}
        </button>
      </form>
    </Fragment>
  );
};

export default GroupForm;
