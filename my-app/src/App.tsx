import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
type Employee = {
  id: number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  dob: string;
  salary: number;
  address: string;
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }, []);
  return (
    <div style={{
      display: 'grid',gridTemplateColumns:'auto auto auto',padding:'20px'
    }}>
      {data.map((item:Employee) => (
       <Card
          style={{
            width: '18rem', margin: '10px'
          }}
        >
          <img
            alt="Sample"
            src={item.imageUrl}
          />
          <CardBody>
            <CardTitle tag="h5">
              {item.firstName} {item.lastName}
            </CardTitle>

            <CardText>
              <p>{item.email}</p>
              <p>{item.contactNumber}</p>
              <p>{item.age}</p>
              <p>{item.dob}</p>
              <p>{item.salary}</p>

            </CardText>
          </CardBody>
        </Card>
      ))}

    </div>
  );
}

export default App;
