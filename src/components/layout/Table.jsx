function Table() {
  return (
    <div className='container mx-auto'>
      <div className='overflow-x-auto'>
        <table className='table table-auto w-full text-base'>
          {/* <!-- head --> */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Brand</th>
              <th>Color</th>
              <th>Thickness</th>
              <th className='justify-self-center'>Finish</th>
              <th>Length</th>
              <th>Width</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className=''>
              <td>Cambria</td>
              <td>Summerhill</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>88"</td>
              <td>31"</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr className='hover'>
              <td>Granite</td>
              <td>Blue Bahia</td>
              <td>2cm</td>
              <td className='justify-self-center'>Polished</td>
              <td>122"</td>
              <td>70"</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr className=''>
              <td>Silestone</td>
              <td>Calacatta Gold</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>73"</td>
              <td>29"</td>
            </tr>
            {/* <!-- row 4 --> */}
            <tr className=''>
              <td>LG Viatera</td>
              <td>Karis</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>100"</td>
              <td>32"</td>
            </tr>
            {/* <!-- row 5 --> */}
            <tr className=''>
              <td>Cambria</td>
              <td>Kelvingrove</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>120"</td>
              <td>56"</td>
            </tr>
            {/* <!-- row 6 --> */}
            <tr className=''>
              <td>Caesarstone</td>
              <td>Statuario Nuvo</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>70"</td>
              <td>21"</td>
            </tr>
            <tr className=''>
              <td>Della Terra</td>
              <td>New Venatino Beige</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>126"</td>
              <td>63"</td>
            </tr>
            <tr className=''>
              <td>Vadara</td>
              <td>Absolute Blanc</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>128"</td>
              <td>63"</td>
            </tr>
            <tr className=''>
              <td>Caesarstone</td>
              <td>Statuario Nuvo</td>
              <td>2cm</td>
              <td>Polished</td>
              <td>70"</td>
              <td>21"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
