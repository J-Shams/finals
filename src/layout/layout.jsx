import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Switcher from '../components/switcher/switcher';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next'
import { destroyToken } from '../utils/getToken';

const Layout = () => {

  const { t, i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const navigate=useNavigate()
  return (
    <div>
      <div className="flex1 bg-[rgba(173, 138, 255, 0.733)] dark:bg-[#191926] text-[white] dark:text-[#7d7d7d]">
        <div className="left1">
          <div className="fle1">
            <Link to={'/home'}><p id="t2">SHAMS AIR</p></Link>
          </div>
        </div>
        <nav className="right1">
          <div className="fle1"><Link to="/">{t('Main')}</Link></div>
          <div className="fle1"><Link to="/product">{t('Product')}</Link></div>
          <div className="fle1"><Link to="/news">{t('News')}</Link></div>
          <div className="fle1"><Link to="/about">{t('About Us')}</Link></div>
        </nav>
        <div className="center1">
          <div className="fle1" style={{ marginTop: "21px" }}><Switcher /></div>
          <div className="fle1">
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <span id="trans"><svg fill="#ffffff" height="20px" width="64px" version="1.1" id="ic4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M462.863,95.24H270.286L241.455,7.197C240.049,2.904,236.042,0,231.524,0H49.137C22.043,0,0,22.043,0,49.138v318.478 c0,27.095,22.043,49.138,49.137,49.138h192.115l29.311,88.095c1.42,4.269,5.415,7.15,9.914,7.15h182.384 C489.957,512,512,489.957,512,462.862V144.38C512,117.285,489.957,95.24,462.863,95.24z M49.137,395.857 c-15.571,0-28.239-12.669-28.239-28.241V49.138c0-15.571,12.668-28.24,28.239-28.24h174.814l122.783,374.96H49.137z M350.458,286.536c4.473,6.841,9.853,14.435,16.206,22.461c-5.947,6.704-12.52,13.493-19.759,20.226l-28.768-87.852h8.273 C330.03,250.316,337.528,266.766,350.458,286.536z M349.192,241.371h62.165c-5.469,11.908-15.308,30.468-31.079,51.099 c-4.545-5.928-8.505-11.556-11.901-16.717C359.349,262.031,353.14,249.977,349.192,241.371z M263.278,416.755h75.328 l-54.084,63.85L263.278,416.755z M462.863,491.102H303.018l65.929-77.834c1.657-1.849,2.673-4.284,2.673-6.961 c0-1.378-0.266-2.695-0.751-3.9l-16.85-51.458c9.785-8.559,18.525-17.252,26.302-25.839 c17.544,19.367,40.485,39.927,69.799,57.876c1.703,1.043,3.586,1.539,5.446,1.539c3.516,0,6.951-1.775,8.921-4.994 c3.013-4.921,1.466-11.354-3.456-14.367c-28.471-17.434-50.493-37.492-67.082-56.152c23.199-29.342,35.285-55.429,40.202-67.64 h30.828c5.77,0,10.449-4.678,10.449-10.449c0-5.771-4.679-10.449-10.449-10.449h-74.907V202.71 c0-5.771-4.679-10.449-10.449-10.449c-5.77,0-10.449,4.678-10.449,10.449v17.763h-57.882l-34.165-104.335h185.734 c15.571,0,28.239,12.669,28.239,28.24v318.483h0.001C491.102,478.433,478.434,491.102,462.863,491.102z"/> </g> </g> <g> <g> <path d="M213.613,199.016h-59.202c-5.771,0-10.449,4.678-10.449,10.449c0,5.771,4.678,10.449,10.449,10.449h47.777 c-4.91,25.944-27.75,45.628-55.1,45.628c-30.921,0-56.077-25.156-56.077-56.077c0-30.921,25.156-56.077,56.077-56.077 c13.315,0,26.223,4.747,36.343,13.368c4.391,3.742,10.988,3.215,14.73-1.178c3.742-4.394,3.214-10.988-1.179-14.73 c-13.897-11.839-31.617-18.358-49.894-18.358c-42.444,0-76.974,34.531-76.974,76.974c-0.001,42.443,34.529,76.973,76.973,76.973 c42.444,0,76.974-34.531,76.974-76.975C224.062,203.695,219.384,199.016,213.613,199.016z"/> </g> </g> <g> <g> <path d="M201.622,351.434h-4.678c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h4.678 c5.77,0,10.449-4.678,10.449-10.449C212.071,356.112,207.392,351.434,201.622,351.434z"/> </g> </g> <g> <g> <path d="M163.141,351.434H61.649c-5.77,0-10.449,4.678-10.449,10.449c0,5.771,4.679,10.449,10.449,10.449h101.492 c5.77,0,10.449-4.678,10.449-10.449C173.59,356.112,168.911,351.434,163.141,351.434z"/> </g> </g> </g>

</svg></span>
            </Button>
            <Menu
    id="fade-menu"
    MenuListProps={{
        'aria-labelledby': 'fade-button',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
>
    <MenuItem onClick={() => { handleClose(); i18n.changeLanguage('en'); }}>
        <img style={{ width: "20px", marginTop: "-3px", paddingRight: "5px" }} src="/src/img/en-icon.png" /> EN
    </MenuItem>
    <MenuItem onClick={() => { handleClose(); i18n.changeLanguage('ru'); }}>
        <img style={{ width: "20px", marginTop: "-3px", paddingRight: "5px" }} src="/src/img/russ-icon.png" /> RU
    </MenuItem>
    <MenuItem onClick={() => { handleClose(); i18n.changeLanguage('tj'); }}>
        <img style={{ width: "20px", marginTop: "-3px", paddingRight: "5px" }} src="src/img/tj-icon.png" /> TJ
    </MenuItem>
    {/* <MenuItem onClick={() => { handleClose(); i18n.changeLanguage('tj'); }}>
        <img style={{ width: "20px", marginTop: "-3px", paddingRight: "5px" }} src="/src/img/tj-icon.png" /> TJ
    </MenuItem> */}
</Menu>
          </div>
          <div className="fle1">
            <p>
              <button onClick={()=>{destroyToken(),navigate("/login")}} >
              <svg fill="#ffffff" height="64px" width="20px" version="1.1" id="i4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 26" xml:space="preserve" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g id="logout"> <g> <path d="M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z"/> </g> </g> </g>

</svg></button >
            </p>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
        <footer>
          <div className="footer bg-[#4a8bb6] dark:bg-[#0a0a11] text-[#ffffff] dark:text-[#7d7d7d]">
            <div className="fot">Customer Service: <br />
FAQs: "Find answers to frequently asked questions."  <br />
Support: "Access our customer support resources." <br />
Flight Status: "Check the status of your flight." <br />
Baggage Information: "Learn about baggage allowances and policies."</div>
            <div className="fot"> <p>
            AiPlane - the leading provider of innovative aviation solutions. <br />
             We strive to offercutting-edge technology and services to enhance the flying <br />
              experience for our customers.
          </p></div>
            <div className="fot">
          <h2>Contact Us</h2>
          <p>Email: contact@aiplane.com <br />Phone: +1 800 123 4567</p>
        </div>
            <div className="fot "> <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/about">About Us</a></li>
          </ul></div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;