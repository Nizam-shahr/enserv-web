import React from 'react'

function SideBar() {

    const SidebarItem = [
        {
            name:'Services',
            path:'/services',
            icon:'/images/services.png',
        },
        {
            name:'Documents',
            path:'/documents',
            icon:'/images/d.png',
        },
        {
            name:'Departments',
            path:'/departments',
            icon:'/images/departments.png',
        },
        {
            name:'Atomations',
            path:'/automations',
            icon:'/images/automations.png',
        },
        {
            name:'Users',
            path:'/users',
            icon:'/images/user.png',
        },
        {
            name:'Settings',
            path:'/settings',
            icon:'/images/setting.png',
        },
    ]

  return (
    <div className='sidebar-container'>
      <div className='home-container'>
            <h4 className=' text-xs font-semibold'>Home</h4>
            <div className='home'>
                <img src="/images/dashboard.png" alt="" />
                <a className='text-xs' href="/">Dashboard</a>
                </div>
            
      </div>
      <div className='border-line'></div>
      <div className='pages-container'>
                <div className='pages'>
                    <h4 className='text-xs'>Pages</h4>
                    <div className='sidebarItemsConatainer'>
                        {SidebarItem.map((item)=> (
                            <div className='sideBarItems'>
                                <div className='sidebarItem'> 
                                <img className='icon' src={item.icon} alt="" />
                              <a href={item.path}>{item.name}</a>
                              </div>
                              <div>   <span><img className='sidebar-icon' src="/images/chevron.png" alt="" /></span></div>
                            </div>
                            

                        ))}
                    </div>
                </div>
      </div>
    </div>
  )
}

export default SideBar
