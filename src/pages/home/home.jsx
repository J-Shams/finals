import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import axios from 'axios';
import '../../../src/App.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector }  from "react-redux";
import { setValueTo, setValueWhere } from '../../store/reducers/todoSlice/todoSlice';


{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap');
</style> */}

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>



function Home() {

  AOS.init();

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/flightdetails', {
          state: {
            from: 'Where to value', // Replace with actual input value
            to: 'Destination value', // Replace with actual input value
            departDate: startDate,
            returnDate: startDates
          }
        });
      };

    const { t, i18n } = useTranslation()

    const [ dataLanguage, setDataLanguage] = useState([])
      const {valueWhere, valueTo} = useSelector((store) => store.todo)


      const handleChangeValueWhere = (e) => {
        dispatch(setValueWhere(e.target.innerHTML))
        console.log(valueWhere);
        
      }
      const handleChangeValueTo = (e) => {
        dispatch(setValueTo(e.target.innerHTML))
        console.log(valueTo); 
      }

      const dispatch = useDispatch()      

  async function Language() {
    try {
      let { data } = await axios.get("http://localhost:3000/todo")
      setDataLanguage(data)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    Language()
  }, [])

  const [isModalOpen, setModalOpen] = useState(false);
  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });

  const handleIncrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  const handleDecrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0
    }));
  };

  const [startDate, setStartDate] = useState(null);
  const [startDates, setStartDates] = useState(null);

  const City = [
    { label: 'Almaty, Kazastan'},
    { label: 'Tashkent, Uzbekistan' },
    { label: 'Dushanbe, Tajikistan' },
    { label: 'Baku, Azerbajan' },
    { label: 'Moscow, Russia' }
  ];

    return <div> 
    <div>   
    <div className="globe-container bg-[#57a1d3] dark:bg-[#0a0a11]">
    <div className="globe bg-[#57a1d3] dark:bg-[#0a0a11]">
        <div className="globe-sphere"></div>
        <div className="globe-outer-shadow"></div>
        <div className="globe-worldmap">
            <div className="globe-worldmap-back"></div>
            <div className="globe-worldmap-front"></div>
        </div>
        <div className="globe-inner-shadow"></div>
    </div>
</div>
    <div className="flex3 bg-[#3282b8] dark:bg-[#15151d]">
      <div className="fle3 bg-[#4e9dd2] dark:bg-[#050507]">
        <button className='className= bg-[#57a1d3] dark:bg-[#11111a] text-[white] dark:text-[#7d7d7d]' id='b1'>{t('Buy tickets')}</button>
        <button className='bg-[#f4f4f4] dark:bg-[#191926] text-[#2b2b2b] dark:text-[#7d7d7d]' id='b2'>{t('Flight schedule')}</button>
        <button className='className= bg-[#f4f4f4] dark:bg-[#191926] text-[2b2b2b] dark:text-[#7d7d7d]' id='b2'>{t('Order Management')}</button>
      </div>
      <div className="fles3 bg-[#e8e8ff] dark:bg-[#0a0a11]">
        <div className="flexs3"> <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={valueWhere}
          options={City}
          onChange={handleChangeValueWhere}
          sx={{ width: 250, backgroundColor: "white", borderRadius: "4px"}}
          renderInput={(params) => <TextField {...params} label= {t('From where')} />}
        /></div>
        <div id='b3' className="flexs3 bg-[#57a1d3] dark:bg-[#191926]  text-[white] dark:text-[#7d7d7d]"><button>⇆</button></div>
        <div className="flexs3"> <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={City}
          sx={{ width: 250, backgroundColor: "white", borderRadius: "4px"}}
          value={valueTo}
          onChange={handleChangeValueTo}
          
          renderInput={(params) => <TextField {...params} label={t('Where to')} />}
        /></div>
        <div className="flexs3"> <DatePicker
          id='calen'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          disabledKeyboardNavigation
          placeholderText= {t('When')}
        /></div>
        <div className="flexs3"> <DatePicker
          id='calen'
          selected={startDates}
          onChange={(date) => setStartDates(date)}
          disabledKeyboardNavigation
          placeholderText= {t('Inversely')}
        /></div>
        <div className="flexs3">
        <button className='className= bg-[#57a1d3] dark:bg-[#11111a] text-[white] dark:text-[#7d7d7d]' id='search' onClick={handleSearch}>{t('Search')}</button>
          {/* <button id='b6' onClick={() => setModalOpen(true)}> <span id='t5'>Выбрать</span> пассажиров</button> */}
          {isModalOpen && (
            <div className="modal bg-[#f4f7fa] dark:bg-[#24242d]">
              <div className="counter">
                <p> <span id='t6'>Взрослые</span> <br /> <span id='t7'>(Старше 12 лет)</span></p>
                <button id='minus' onClick={() => handleDecrement('adults')}>–</button>
                <span>{counts.adults}</span>
                <button id='plus' onClick={() => handleIncrement('adults')}>+</button>
              </div>
              <div className="counter">
                <p> <span id='t6'>Дети</span> <br /> <span id='t7'>(От 2 до 12 лет)</span></p>
                <button id='minus' onClick={() => handleDecrement('children')}>–</button>
                <span>{counts.children}</span>
                <button id='plus' onClick={() => handleIncrement('children')}>+</button>
              </div>
              <div className="counter">
                <p> <span id='t6'>Младенцы</span> <span id='t7'>(До 2 лет)</span></p>
                <button id='minus' onClick={() => handleDecrement('infants')}>–</button>
                <span>{counts.infants}</span>
                <button id='plus' onClick={() => handleIncrement('infants')}>+</button>
              </div>
              <button id='b7' onClick={() => setModalOpen(false)}>Закрыть</button>
            </div>
          )}
        </div>
      </div>
    </div> <br /> <br /> <br /> <br />
    <p id='tq21' className='text-[#1E212C] dark:text-[#4a4a4a]'>наши флоты</p>
    <div className="flexq16">
      <div data-aos="zoom-out-up" className="fleq16 bg-[#ffffff] dark:bg-[#191926] text-[#1E212C] dark:text-[#7d7d7d]"><img id='iq16' src="src/img/Mask Group.png" alt="" />
      <p id='tq16'>Piaggio P.180 Avanti</p>
      </div>
      <div data-aos="zoom-out-up" className="fleq16 bg-[#ffffff] dark:bg-[#191926] text-[#1E212C] dark:text-[#7d7d7d]"><img id='iq16' src="src/img/Mask Group (1).png" alt="" />
      <p id='tq16'>Pilatus PC-12</p>
      </div>
      <div data-aos="zoom-out-up" className="fleq16 bg-[#ffffff] dark:bg-[#191926] text-[#1E212C] dark:text-[#7d7d7d]"><img id='iq16' src="src/img/pilatus-pc12_22715 1.png" alt="" />
      <p id='tq16'>piper pa27 aztec</p>
      </div>
      <div data-aos="zoom-out-up" className="fleq16 bg-[#ffffff] dark:bg-[#191926] text-[#1E212C] dark:text-[#7d7d7d]"><img id='iq16' src="src/img/9eb49cf1382c292e67054a996db20f71 1.png" alt="" />
      <p id='tq16'>Beech BE100 King Air</p>
      </div>
    </div>
    {/* <p id='t9' className="text-[#1E212C] dark:text-[#e8f6f4]">{t('news')}</p> */}
    {/* <div className="flex15 ">
      <div className="top15">
        <div className="fle15 bg-[#969bdb] dark:bg-[#191926] text-[white] dark:text-[#7d7d7d]" data-aos="fade-down-right">{t('Safety')}</div>
        <div className="fle15 bg-[#a4aae8] dark:bg-[#191926] text-[white] dark:text-[#7d7d7d]" data-aos="fade-down-left">{t('Good Service')}</div>
      </div>
      <div className="center15" data-aos="zoom-in">
        <div className="fle51">
          <p id='tt15' className='bg-[#969bdb] dark:bg-[#191926] text-[white] dark:text-[#7d7d7d]'>{t('That from Will you get us?')}</p></div>
      </div>
      <div className="bottom15">
        <div className="fle15 bg-[#a7ade5] dark:bg-[#191926]  text-[white] dark:text-[#7d7d7d]" data-aos="fade-up-right">{t('Free meals')}</div>
        <div className="fle15 bg-[#969bdb] dark:bg-[#191926]  text-[white] dark:text-[#7d7d7d]" data-aos="fade-up-left">{t('Comfort')}</div>
      </div>
    </div> */}
    <div className="flexq17 bg-[#3282b8] dark:bg-[#161620]">
      <div className="leftq17">
        <div data-aos="zoom-in" className="fleq17 bg-[#f4f7fa] dark:bg-[#0d0d14]"><img id='iq17' src="src/img/seat (1) 1.png"/> <br />
        <p id='tq17' className='text-[#1E212C] dark:text-[#4a4a4a]'>{t('Luxury And Comfort')}</p>
        <p id='tq18'>It is a long established fact that <br />
         a reader will be distracted by <br />
          the readable</p>
        </div>
        <div data-aos="zoom-in" className="fleq17 bg-[#f4f7fa] dark:bg-[#0d0d14]"><img id='iq17' src="src/img/schedule 1.png"/> <br />
        <p id='tq17' className='text-[#1E212C] dark:text-[#4a4a4a]'>Personal schedule & booking</p>
        <p id='tq18'>It is a long established fact that <br />
         a reader will be distracted by <br />
          the readable</p>
        </div>
      </div>
      <div data-aos="fade-up" className="centerq17"><img id='iq18' src="src/img/plane.png"/>
      </div>
      <div className="rightq17">
        <div data-aos="zoom-in" className="fleq17 bg-[#f4f7fa] dark:bg-[#0d0d14]"><img id='iq17' src="src/img/web-browser 1.png"/> <br />
        <p id='tq17' className='text-[#1E212C] dark:text-[#4a4a4a]'>SAFETY AND SECURITY</p>
        <p id='tq18'>It is a long established fact that <br />
         a reader will be distracted by <br />
          the readable</p>
        </div>
        <div data-aos="zoom-in" className="fleq17 bg-[#f4f7fa] dark:bg-[#0d0d14]"><img id='iq17' src="src/img/captain 1.png"/> <br />
        <p id='tq17' className='text-[#1E212C] dark:text-[#4a4a4a]'>EXPERIENCED CREW</p>
        <p id='tq18'>It is a long established fact that <br />
         a reader will be distracted by <br />
          the readable</p>
        </div>
      </div>
    </div>
    <p id='tq21' className='text-[#1E212C] dark:text-[#4a4a4a]'>Почему стоит путешествовать с Shams Air</p>
    <div className="flexq21">
      <div data-aos="zoom-in" className="fleq21"><img src="src/img/free-icon-decision-making-3748501.png" alt="" />
      <p>большой <br />выбор</p>
      </div>
      <div data-aos="zoom-in" className="fleq21"><img src="src/img/free-icon-free-food-12401207.png" alt="" />
      <p>бесплатное <br /> питание</p>
      </div>
      <div data-aos="zoom-in" className="fleq21"><img src="src/img/free-icon-relax-3063835 (1).png" alt="" />
      <p>комфорт и <br /> удобство</p>
      </div>
      <div data-aos="zoom-in" className="fleq21"><img src="src/img/free-icon-shield-1320572.png" alt="" />
      <p>гарантированная<br /> безопастность</p>
      </div>
      <div data-aos="zoom-in" className="fleq21"><img src="src/img/free-icon-hands-7434658.png" alt="" />
      <p>поддрежка и <br />понимания</p>
      </div>
    </div>
    <p id='tq21'>Find Hotels in Favorite Destinations</p> <br />
    <>
      <Swiper
      id='swips'
      data-aos="zoom-in"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img id='iq22' src="src/img/kyrgyzstan.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/armenia.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/azerbaijan.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/india.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/kazakhstan.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/pakistan.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/uzbekistan.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/georgia.webp"/></SwiperSlide>
        <SwiperSlide><img id='iq22' src="src/img/united-arab-emirates.webp"/></SwiperSlide>
      </Swiper>
    </>
    {/* <p id='t99'>Вы можете посетить:</p> <br />
    <div className="flex20">
      <div className="fle20"><img src="src/img/image_processing20201221-27697-1ec8hln.jpg" alt="" /></div>
      <div className="fle20"><img src="src/img/image_processing20201221-27697-1ec8hln.jpg" alt="" /></div>
      <div className="fle20"><img src="src/img/image_processing20201221-27697-1ec8hln.jpg" alt="" /></div>
    </div> */}
    <>
<Swiper
id='swiper'
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={false}
  modules={[Autoplay,Pagination, Navigation]} 
  className="mySwiper"
>
  <div>
    {dataLanguage.map((el) => (
      <SwiperSlide key={el.id}>
        <div className='flex4'>
          <p id='t10' className="text-[#1E212C] dark:text-[#e8f6f4]">{el.name}</p> <br />
          <p id='t11' className="text-[#1E212C] dark:text-[#e8f6f4]">{el.city}</p>
        </div>
      </SwiperSlide>
    ))}
  </div>
</Swiper>
<Link to={'/news'}><button id='all-news' className='bg-[#57a1d3] dark:bg-[#191926]  text-[white] dark:text-[#7d7d7d]'>ALL NEWS</button></Link>
</>
  </div>
  <p id='tq21' className='text-[#1E212C] dark:text-[#4a4a4a]'>можете посетить</p>
  <div className="flexq19">
        <div className="leftq19">
          <div data-aos="zoom-in-right" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image.png" alt="" />
          <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Paris</p>
          <p id='tq18'>Париж — столица Франции, известная своей богатой <br />
           историей, архитектурой и культурой.</p>
          </div>
          <div data-aos="zoom-in-right" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image3.png" alt="" />
          <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Tokyo</p>
          <p id='tq18'>Токио — столица Японии и один из самых крупных <br />
           мегаполисов мира.</p>
          </div>
        </div>
        <div className="centerq19">
        <div data-aos="zoom-out" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image1.png" alt="" />
        <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Bali</p>
        <p id='tq18'>Бали — индонезийский остров, известный своими <br />
         пляжами, рисовыми террасами и богатой культурой.</p>
        </div>
        <div data-aos="zoom-out-up" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image4.png" alt="" />
        <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>New York</p>
        <p id='tq18'>Нью-Йорк — крупнейший город США,знаменитыми <br />
         достопримечательностями.</p>
        </div>
        </div>
        <div className="rightq19">
        <div data-aos="zoom-in-left" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image2.png" alt="" />
        <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Sydney</p>
        <p id='tq18'>Сидней — крупнейший город Австралии, известный <br />
         своей знаменитой Оперой и Harbour Bridge.</p>
        </div>
        <div data-aos="zoom-in-left" className="fleq19 bg-[#f4f7fa] dark:bg-[#181824]"><img id='iq19' src="src/img/Placeholder Image5.png" alt="" />
        <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Barcelona</p>
        <p id='tq18'>Барселона — столица Каталонии в Испании, известная <br />
         своей уникальной архитектурой, включая работы.</p>
        </div>
        </div>
      </div>
      <p id='tq21'>Shams Air Airline Partners</p> <br />

      <div className="flexq22">
        <div data-aos="fade-left" className="fleq22"><img src="src/img/5J.webp"/></div>
        <div data-aos="fade-left" className="fleq22"><img src="src/img/QR.webp"/></div>
        <div data-aos="fade-left" className="fleq22"><img src="src/img/SL.webp"/></div>
        <div data-aos="zoom-in" className="fleq22"><img src="src/img/TK.webp"/></div>
        <div data-aos="fade-right" className="fleq22"><img src="src/img/TR.webp"/></div>
        <div data-aos="fade-right" className="fleq22"><img src="src/img/TW.webp"/></div>
        <div data-aos="fade-right" className="fleq22"><img src="src/img/UO.webp"/></div>

      </div>
  </div>;
}

export default Home;


