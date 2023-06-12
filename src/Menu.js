import banner1 from './images/banner1.jpg'
import Card from './Card'
import { breadData, pastryData} from './itemData'

const Menu = () => {


    return (
      <main className="Menu">
        <div className='bannerContainer'>   
          <img className='banner1' src={banner1} alt="Banner" />
          <h1 className='bannerText'>
            <h2 className='bannerTitle'>Menu</h2>
            Treat yourself to a slice of happiness.
            <h2 className='subBanner'>
              <br></br> <br></br>
              Enjoy fresh pastries, fluffy breads, crafted coffees, cakes and more.</h2>
          </h1>
        </div>
        <div className='menuContainer'>
          <div className='pastries'>
            <h1>Pastries</h1>
            <div className='pastriesContainer'>
            {pastryData.map(item => (
            <Card key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className='bread'>
            <h1>Bread</h1>
            <div className='breadContainer'>
            {breadData.map(item => (
            <Card key={item.id} {...item} />
              ))}
            </div>
          </div>


        </div>
      </main>
    )
  }
  
  export default Menu