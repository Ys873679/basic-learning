import './ExploreContainer.css';



const ExploreContainer: React.FC = () => {
  return (
    <>
    
    <div className='navbar'>
      <div className='nav-logo border'>
        <div className='logo'></div>
      </div>
      <div className='nav-address border'>
        <p className='add-first'>deliver to</p>
        <div className='add-icon'>
           <i className="fa-solid fa-location-dot"></i>
           <p className='add-second'>india</p>
        </div>
        <div className='nav-search'>
          <select className='nav-select'>
            <option>ALL</option>
          </select>
          <input placeholder='amazon search' className='search'></input>
          <div className='search-icon'>
             <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      <div className='signin border'>
        <p className='add-signin'>hello,signin</p>
        <p className='add-account'> account & list</p>
      </div>
      <div className='add-cart'>
        
      </div>
      </div>
    </div>
    
    
        
    
    </>
  );
};

export default ExploreContainer;
