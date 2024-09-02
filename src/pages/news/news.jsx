import React from 'react'

const news = () => {
  return (
    <div>
      <div className='flexq18'>
        <div className="leftq18">
          <img data-aos="fade-right" src="src/img/adobestock_1417261 1 (1).png" alt="" />
        </div>
        <div className="rightq18">
          <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>SOMON AIR выпускает новый флот</p> <br />
          <p id='tq20'>Новый флот авиакомпании включает современные самолеты последнего <br />
           поколения, оснащенные передовыми технологиями для повышения комфорта <br />
            и безопасности пассажиров. Эти самолеты предлагают улучшенные системы <br />
             фильтрации воздуха, более тихие двигатели и увеличенное пространство <br />
              для ног, что делает полеты более приятными.</p>
        </div>
      </div>
      <div className='flexq18'>
        <div className="rightq18">
          <p id='tq19' className='text-[#1E212C] dark:text-[#4a4a4a]'>Buisness-class</p> <br />
          <p id='tq20'>Бизнес-класс в самолетах предлагает пассажирам высокий <br />
           уровень комфорта и обслуживания. Сиденья обычно более <br />
            просторные и могут превращаться в кровати, а меню питания <br />
             включает изысканные блюда и напитки. Пассажиры также <br />
              получают приоритетное обслуживание на регистрации и <br />
               посадке, а также доступ к эксклюзивным лаунжам в <br />
                аэропортах.</p>
        </div>
        <div className="leftq18">
          <img data-aos="fade-left" src="src/img/adobestock_98400582 1.png" alt="" />
        </div>
      </div>
      <p id='tq21' className='text-[#1E212C] dark:text-[#4a4a4a]'>новые турестические места</p>
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
    </div>
  )
}

export default news















































































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const news = () => {

//     const [dataLanguage, setDataLanguage] = useState([])


//     async function Language() {
//       try {
//         let { data } = await axios.get("http://localhost:3000/news")
//         setDataLanguage(data)
//       } catch (error) {
//         console.log(error);
//       }
//     }
  
  
//     useEffect(() => {
//       Language()
//     }, [])

//   return (
//     <div>
//       news
//       <div className='flex7'>
//         {dataLanguage.map((el) => (
//           <div key={el.id}>
//             <p><img id='i8' src={el.img}/></p>
//             <p id='t18'>{el.name}</p>
//             <p id='t19'>{el.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default news;