import React, { useState } from 'react';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className='navbar'>
      <button className='menu-btn' onClick={handleToggleSidebar}>Menu</button>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        {/* Your navbar elements go here */}
      </div>
    </div>
  );
}

export default Navbar;
