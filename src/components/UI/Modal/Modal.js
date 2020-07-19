import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const modal = props => {
  let buttons = (
    <div>
      <button 
        key={0}
        type='submit'
        form='input-form'>
          OK
      </button>
      <button key={1} onClick={props.canceled}>
        Cancel
      </button>
    </div>
  );
  if (props.type === "alert") {
    buttons = <button onClick={props.canceled}>OK</button>;
  }

  return (
    <div>
      <Backdrop show={true} clicked={props.canceled} layer={300} />
      <div className={classes.Modal}>
        <div className={classes.Title}>
          <p>{props.title}</p>
        </div>
        <div className={classes.Message}>
          <p>{props.message}</p>
        </div>
        <form 
          id='input-form'
          onSubmit={(e) => {
            e.preventDefault();
            props.confirmed();
          }}>
          {props.type === 'prompt' ? 
            props.form
            : null}
          <div className={classes.Buttons}>{buttons}</div>
        </form>
      </div>
    </div>
  );
};

export default modal;
