import { useEffect, useState } from "react";



function App() {

  const dataUrL = "https://northwind.vercel.app/api/suppliers";

  const [supliers, setSupliers] = useState([]);

  const getAllSupliers = () => {

    fetch(dataUrL).then(res => res.json()).then(data => setSupliers(data)).catch(err => console.log(err))

  }

  useEffect(() => {

    getAllSupliers();

  }, [])


  return (
    <>
      <table>


        <thead>
          <tr>
            <th>
              companyName
            </th>
            <th>
              contactName
            </th>
            <th>
              contactTitle
            </th>
            <th>
              address.country
            </th>

          </tr>
        </thead>

        <tbody>

          {
            supliers.map((sup) => (
              <tr key={sup.id}>

                <td>{sup.companyName}</td>
                <td>{sup.contactName}</td>
                <td>{sup.contactTitle}</td>
                <td>{sup.address.country}</td>

              </tr>
            ))
          }


        </tbody>


      </table>

    </>
  );
}

export default App;