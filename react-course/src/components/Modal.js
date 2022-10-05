import Button from '@mui/material/Button'


function Modal(props) {

  function cancelHandler() {
    props.onCancel()
  }

  function confirmHandler(){
    props.onConfirm()
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <Button variant="contained" className="btn btn--alt" onClick={cancelHandler}>Cancel</Button>
      <Button variant="contained" className="btn" onClick={confirmHandler}>Confirm</Button>
    </div>
  );
}

export default Modal;
