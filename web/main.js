function loading() {
  // Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(setWaypoint, 650);
}
function setWaypoint() {
  // Hide loader
  document.getElementById('loading').style.display = 'none';
  // Get the data from the input tag named 'data' in index.html
  var data1 = document.getElementById('w1-lat').value;
  var data2 = document.getElementById('w1-lon').value;
  var data3 = document.getElementById('w2-lat').value;
  var data4 = document.getElementById('w2-lon').value;
  var data5 = document.getElementById('w3-lat').value;
  var data6 = document.getElementById('w3-lon').value;
  if ((data1 === '') | (data2 === '')) {
    const errorDiv = document.createElement('div');
    const errorParent = document.querySelector('.container');
    const errorHeading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode('Please check your values'));
    errorParent.insertBefore(errorDiv, errorHeading);
    // Calls clearError function to remove alert message after 3 seconds
    setTimeout(clearError, 3000);
  } else {
    // Python to actually generate the waypoints
    eel.set_waypoint(
      data1,
      data2,
      data3,
      data4,
      data5,
      data6
    )(function (ret) {
      const msgDiv = document.createElement('div');
      const parent = document.querySelector('.container');
      const heading = document.querySelector('.heading');
      msgDiv.className = 'alert alert-success';
      msgDiv.appendChild(
        document.createTextNode(
          'Your waypoints have been set successfully Check map to see the markers'
        )
      );
      parent.insertBefore(msgDiv, heading);
      // Calls clearError function to remove alert message after 3 seconds
      setTimeout(clearSuccess, 4000);
    });
  }
  function clearError() {
    document.querySelector('.alert-danger').remove();
  }
  function clearSuccess() {
    document.querySelector('.alert-success').remove();
  }
}
