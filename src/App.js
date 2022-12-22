import './App.css';

function App({data,data2}) {

  return <>   
  <h1>{data2[2].name} Liberary</h1>
  <div className='flex'>
    <img src={data[0].img} alt="" />
    <img src={data[1].img} alt="" />
    <img src={data[2].img} alt="" />
    <img src={data[3].img} alt="" />
  </div>
  </>
}

export default App;
