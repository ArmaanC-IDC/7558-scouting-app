import React, { useState } from 'react';

//TODO: make the starting side buttons actually change the data

function PreMatchPage({updateData, data}) {
  const [scoutName, setScoutName] = useState('');
  const [matchNumber, setMatchNumber] = useState(0);
  const [teamNumber, setTeamNumber] = useState(0);
  const [startingPosition, setStartingPosition] = useState('red');

  let newData = JSON.parse(JSON.stringify(data))
  newData['scoutName'] = scoutName;
  newData['matchNumber'] = matchNumber;
  newData['teamNumber'] = teamNumber;
  newData['startingPosition'] = startingPosition;
  if (JSON.stringify(data) !== JSON.stringify(newData)){
    updateData(newData);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Pre-Match Scouting</h1>
        {/* Scout Name */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Scout Name:</label>
          <input
            type="text"
            value={scoutName}
            onChange={(e) => setScoutName(e.target.value)}
            placeholder="Enter Scout's Name"
            style={styles.input}
          />
        </div>

        {/* Match Number */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Match Number:</label>
          <input
            type="text"
            value={matchNumber}
            onChange={(e) => setMatchNumber(parseInt(e.target.value) || 0)}
            placeholder="Enter Match Number"
            style={styles.input}
          />
        </div>

        {/* Team Number */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Team Number:</label>
          <input
            type="text"
            value={teamNumber}
            onChange={(e) => setTeamNumber(parseInt(e.target.value) || 0)}
            placeholder="Enter Team Number"
            style={styles.input}
          />
        </div>

        {/* Start Side*/}
        <div style={styles.inputGroup}>
          <center>
            <button style={{...styles.button, backgroundColor: 'red'}}>RED</button>
            <button style={{...styles.button, backgroundColor: 'blue'}}>BLUE</button>
          </center>
        </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default PreMatchPage;
