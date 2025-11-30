import React from 'react';

function GroceryItem(props) {
  function Click() {
    alert(props.name + ' has been added');
  }

  return (
    <button onClick={Click}>
      {props.name}
    </button>
  );
}

export default GroceryItem;