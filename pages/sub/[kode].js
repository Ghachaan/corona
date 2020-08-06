import dummyData from '../../dataset/data.json'; 
 
const Artikel = (props) => {     
    return (         
    <div className="container">      
    <h1>Selamat Datang di Portal Covid-19</h1>             
    <p>Ini adalah portal informasi tentang virus Covid-19</p>    
    <hr />             
    <h1 className="title">{props.judul}</h1>  
    <img src={props.img} height="250"/>           
    <p>
        {props.isi}
    </p>
    </div>     
    ); }

export async function getServerSideProps(context){     
    let kode = context.params.kode;     
    let data = dummyData.find(x => x.id == kode); 
 
    // ambil judul & isi dari data hasil pencarian     
    let { judul, img, isi } = data; 
 
    return {         
        props : {             // kirim judul & isi sebagai properti ke komponen utama 
            judul, img, isi         
        }     
    } 
} 

export default Artikel;
 