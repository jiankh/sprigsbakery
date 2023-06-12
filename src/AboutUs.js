import block2 from './images/block2.jpg'
import block3 from './images/blockextra.jpg'

const AboutUs = () => {
  return (
    <div className="aboutMain">
      <div className='aboutBanner'>
        About Us
        <hr></hr>
      </div>
      
      <div className="aboutContainer">
        <div className='block'>
          <h1>Our Story </h1>
          <p>
            The owner Parry Padtter founder of Sprigs Bakery was a gifted person since a young age. Raised as an orphan in a quaint English town, under the care of his distant and unsupportive uncle and aunt, his passion for baking began to flourish. At a young age, he embarked on a journey of self-discovery, and unravel a hidden heritage, revealing a lineage intertwined with extraodinary talent and conflicts. With each step, he navigate a world filled with magic, encountering allies and adversaries alike, all while uncovering the truth about their origins and the destiny that awaits them. After he defeated Lord Bakesomemort, he settled down and became "The boy who baked".

          </p>
        </div>
        <div className='block'><img className='block2' src={block2} /></div>
        <div className='block3'> <img className='block3' src={block3} /> </div>
        <div className='block'> 
          <p>At Sprigs Baker, baking is our passion. From the moment you enter our cozy bakery, you'll be greeted by the irresistible scent of fresh treats. With every bite, we strive to deliver exceptional quality and unforgettable flavors. Our dedicated team of bakers and pastry chefs use only the finest ingredients to create a delectable assortment of pastries, bread, and custom cakes. Join us on a delightful culinary journey and experience the magic of homemade goodness. Welcome to Sprigs Bakery, where happiness is baked fresh daily.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs