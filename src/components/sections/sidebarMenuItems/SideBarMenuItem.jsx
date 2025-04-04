import './SideBarMenuItem.css'

const SideBarMenuItem = ({title, icon: Icon, onClick}) => {

  

  return (
    <div className='sidebar-items' onClick={onClick}>
      <Icon color='white' size={24} />
      <h3>{title}</h3>
    </div>
  )
}

export default SideBarMenuItem;
