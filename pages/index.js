import data from '../dataset/data.json';

function Menu(){     
  return (         
  <div>   
    <h1>Selamat Datang di Portal Covid-19</h1>             
    <p>Ini adalah portal informasi tentang virus Covid-19</p>             
    <hr /> 
    {data.map((data, index) => 
      <div key={index} >
      <img src={data.img} height="200" width="350"/>
      <br/>
      <a href={data.link}>{data.judul}</a>
      </div>  
    )}
  </div>     
      ); 
    } 
 
export default Menu; 