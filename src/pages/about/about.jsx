import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const about = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
         <div className="tabs">
         <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='bg-[#eaeaea3f] dark:bg-[#1c1b23] ' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color: "#4a8bb6"}} label="О компании " {...a11yProps(0)} />
          <Tab style={{color: "#4a8bb6"}}  label="Наш флот" {...a11yProps(1)} />
          <Tab style={{color: "#4a8bb6"}}  label="Руководящий состав" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="aviation-page">
      <header className="header">
        <h1 className='text-[#1f1f1f] dark:text-[#e8f6f4]'>О компании</h1>
      </header>
      
      <section className="company-description bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#2e2e2e] dark:text-[#e8f6f4]">
        <p>
          Наша компания специализируется на разработке, производстве и обслуживании 
          современных авиационных технологий. Мы стремимся предоставлять нашим клиентам 
          самые передовые решения в области авиастроения, обеспечивая высокий уровень 
          безопасности и комфорта как для пассажиров, так и для экипажа. 
        </p>
        <p>
          С момента своего основания, мы неизменно остаёмся лидером в авиастроительной отрасли, 
          внедряя инновационные технологии и следуя самым строгим стандартам качества. 
          Наша миссия - сделать небо безопаснее и доступнее для всех.
        </p>
        <p>
          Мы гордимся нашими достижениями, которые включают в себя разработку 
          новейших моделей самолётов, улучшение топливной эффективности и снижение 
          уровня шума. Наши инженеры и специалисты работают в тесном сотрудничестве 
          с ведущими научно-исследовательскими институтами по всему миру, чтобы 
          предлагать на рынке только лучшие решения.
        </p>
      </section>
      <div className="flexq20">
        <div className="leftq20">
          <p id='tq19'>Финансовый директор</p>
          <p id='tq18'>Финансовый директор (CFO) — это ключевой управленец, отвечающий <br />
           за финансовую стратегию компании. Он занимается планированием бюджета, <br />
            анализом финансовых показателей и управлением рисками, что помогает <br />
             обеспечить стабильность и рост бизнеса. CFO также координирует <br />
              работу финансового отдела и взаимодействует с инвесторами и <br />
               кредиторами.</p>
        </div>
        <div className="rightq20">
          <img id='iq20' src="https://th.bing.com/th/id/R.6732e777c7e48c14aece430dac1845ec?rik=daWzntT1wYESfQ&riu=http%3a%2f%2fstatic.tildacdn.com%2ftild6532-3665-4464-a534-316165393862%2fW-11.jpg&ehk=RAMafxBgdRz3JgwKA%2brhPto4LCUw6gbo7CCPnr3Wkyk%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
      </div>
      <div className="flexq20">
      <div className="rightq20">
          <img id='iq20' src="https://media.licdn.com/dms/image/C4E03AQEsdGWBNoqrVA/profile-displayphoto-shrink_800_800/0/1610310026550?e=2147483647&v=beta&t=UHTf5ETUqe04PjHaqfygzsHGfDe2jH07FwOBOSAuVTo" alt="" />
        </div>
        <div className="leftq20">
          <p id='tq19'>Генеральный директор</p>
          <p id='tq18'>Генеральный директор (CEO) — это высшее должностное лицо компании, <br />
           ответственное за общее руководство и стратегическое развитие организации. <br />
            Он принимает ключевые решения, определяет цели и направления бизнеса, <br />
             а также представляет компанию перед акционерами, партнерами и <br />
              общественностью. Генеральный директор координирует работу всех <br />
               подразделений и отвечает за выполнение стратегических планов.</p>
        </div>
      </div>
      <div className="flexq20">
        <div className="leftq20">
          <p id='tq19'>Главный инженер</p>
          <p id='tq18'>Главный инженер — это ключевая фигура в техническом управлении проектами <br />
           и разработке новых технологий. Он отвечает за проектирование, разработку <br />
            и внедрение инженерных решений, а также координирует работу команды <br />
             инженеров, следит за соблюдением стандартов качества и безопасности. <br />
              Главный инженер также участвует в принятии стратегических решений, <br />
               связанных с развитием технологий и оптимизацией процессов.</p>
        </div>
        <div className="rightq20">
          <img id='iq20' src="https://th.bing.com/th/id/R.3386908a4966f23913ae0d2487a9078a?rik=PvaIlVBzbJwuTw&riu=http%3a%2f%2fwww.centrumprobono.pl%2fwp-content%2fuploads%2f2016%2f10%2fAdw.-Micha%C5%82-Lisawa-kancelaria-CMS-Cameron-McKenna.jpg&ehk=%2btTsAeV4I%2fOhQdmY9FfPOZT1vRqUGtNSXer25SaPIIA%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
      </div>
      <section className="photo-gallery">
        <h2 className='text-[#353535] dark:text-[#e8f6f4]'><span id='tq19'>остальные участники проекта</span></h2> <br />

        <div className="photo-rows">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[##434343] dark:text-[#e8f6f4]"><img id='avatar-img'src="https://eleport.com/pl/wp-content/uploads/2023/05/JakubSwierk-scaled.jpg" alt="" /></div>
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[##434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://th.bing.com/th/id/R.1689b4b8660ad19bb417640c72030334?rik=Ob17kh%2fvdmoN4w&riu=http%3a%2f%2fotvet.imgsmail.ru%2fdownload%2f1750d13eadb2a288f30df6a932b92eb2_i-1.jpg&ehk=WcnLApEpzY0KBtqXvr2l9G15zON4kjtgx1y3EfPPeIs%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[##434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://static.goldenline.pl/user_photo/222/user_2142686_ceb616_huge.jpg" alt="" /></div>
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[##434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://www.farmak.cz/img/ota-portret-zmenseno-1633595574.png?360:540" alt="" /></div>
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[##434343] dark:text-[#e8f6f4]"><img id='avatar-img'src="https://www.calgaryphotostudio.ca/wp-content/uploads/2023/05/passport3-745x1024.jpg" alt="" /></div>    
        </div>
      </section>
    </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="fleet-page">
      <header className="header">
        <h1 className='text-[#434343] dark:text-[#e8f6f4]'>Флот нашей компании</h1>
      </header>

      <section className="fleet-description bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#34343] dark:text-[#e8f6f4]">
        <p>
          Наш воздушный флот состоит из современных и безопасных самолётов, которые обеспечивают 
          комфорт и надёжность на каждом этапе полёта. Мы гордимся разнообразием наших воздушных судов, 
          которые способны удовлетворить запросы как бизнес-клиентов, так и пассажиров на регулярных рейсах.
        </p>
        <p>
          Каждый самолёт нашего парка проходит регулярное техническое обслуживание, чтобы соответствовать 
          самым высоким стандартам безопасности и качества. Мы продолжаем инвестировать в обновление нашего 
          флота, чтобы предложить вам ещё больше комфорта и инноваций.
        </p>
      </section>

      <section className="fleet-gallery">
        <h2 className='text-[#434343] dark:text-[#e8f6f4]'>Наши самолёты</h2>

        <div className="aircraft bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]"><img id='air-photo' src="https://th.bing.com/th/id/R.0c01fec96cd7c3d02fc6820a09010ec9?rik=tSNU%2boJ%2fFFLEQQ&pid=ImgRaw&r=0" alt="" /></div>
          <div className="aircraft-info">
            <h3>Boeing 737-800</h3>
            <ul>
              <li>Длина: 39.5 м</li>
              <li>Вес: 41,000 кг</li>
              <li>Количество мест: 162</li>
              <li>Максимальная дальность полета: 5,765 км</li>
            </ul>
          </div>
        </div>

        <div className="aircraft bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]"><img id='air-photo' src="https://cdnn1.img.sputnik.tj/img/07e5/05/1b/1039787835_0:57:1200:732_1920x0_80_0_0_50d64769ffe4252833611d60960bfa48.jpg" alt="" /></div>
          <div className="aircraft-info">
            <h3>Airbus A320</h3>
            <ul>
              <li>Длина: 37.6 м</li>
              <li>Вес: 42,600 кг</li>
              <li>Количество мест: 150</li>
              <li>Максимальная дальность полета: 6,100 км</li>
            </ul>
          </div>
        </div>

        <div className="aircraft bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]"><img id='air-photo' src="https://naked-science.ru/sites/default/files/images/Boeing_737-8GJ%2C_Somon_Air_AN2167174.jpg" alt="" /></div>
          <div className="aircraft-info">
            <h3>Boeing 787 Dreamliner</h3>
            <ul>
              <li>Длина: 62.8 м</li>
              <li>Вес: 126,000 кг</li>
              <li>Количество мест: 242</li>
              <li>Максимальная дальность полета: 14,140 км</li>
            </ul>
          </div>
        </div>

        <div className="aircraft bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]"><img id='air-photo' src="https://yamigrant.ru/wp-content/uploads/2017/04/somon_air.jpeg" alt="" /></div>
          <div className="aircraft-info">
            <h3>Airbus A380</h3>
            <ul>
              <li>Длина: 72.7 м</li>
              <li>Вес: 277,000 кг</li>
              <li>Количество мест: 555</li>
              <li>Максимальная дальность полета: 15,200 км</li>
            </ul>
          </div>
        </div>

        <div className="aircraft bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholder bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]"><img id='air-photo' src="https://th.bing.com/th/id/R.b00f16a3ee461bf43a0eb819a98040d9?rik=5DcXr%2fOwwLknlw&riu=http%3a%2f%2fsomon-air.ru%2fwp-content%2fuploads%2f2018%2f06%2fsomon-air-plane.png&ehk=sNF2LkGJAvQ%2bZmo9M%2bbbrUk7ONFmvbvGSMSLDZAKlHE%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
          <div className="aircraft-info">
            <h3>Embraer E190</h3>
            <ul>
              <li>Длина: 36.2 м</li>
              <li>Вес: 28,000 кг</li>
              <li>Количество мест: 100</li>
              <li>Максимальная дальность полета: 4,537 км</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div className="leadership-page ">
      <header className="header">
        <h1 className='text-[#434343] dark:text-[#e8f6f4]'>Руководящий состав компании</h1><br />
      </header>
      
      <section className="leadership-team bg-[#eaeaea3f] dark:bg-[#111016] text-[#434343] dark:text-[#e8f6f4]">
        <div className="team-member bg-[#eaeaea3f] dark:bg-[#0e0d12] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholders bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://www.farmak.cz/img/ota-portret-zmenseno-1633595574.png?360:540" alt="" /></div>
          <div className="member-info">
            <h2 className='text-[#434343] dark:text-[#e8f6f4]'>Алексей Иванов</h2>
            <p>Генеральный директор</p>
          </div>
        </div>

        <div className="team-member bg-[#eaeaea3f] dark:bg-[#0e0d12] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholders bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://static.goldenline.pl/user_photo/222/user_2142686_ceb616_huge.jpg" alt="" /></div>
          <div className="member-info">
            <h2>Мария Петрова</h2>
            <p>Главный инженер</p>
          </div>
        </div>

        <div className="team-member bg-[#eaeaea3f] dark:bg-[#0e0d12] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholders bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://eleport.com/pl/wp-content/uploads/2023/05/JakubSwierk-scaled.jpg" alt="" /></div>
          <div className="member-info">
            <h2>Сергей Васильев</h2>
            <p>Директор по развитию</p>
          </div>
        </div>

        <div className="team-member bg-[#eaeaea3f] dark:bg-[#0e0d12] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholders bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://th.bing.com/th/id/R.3386908a4966f23913ae0d2487a9078a?rik=PvaIlVBzbJwuTw&riu=http%3a%2f%2fwww.centrumprobono.pl%2fwp-content%2fuploads%2f2016%2f10%2fAdw.-Micha%C5%82-Lisawa-kancelaria-CMS-Cameron-McKenna.jpg&ehk=%2btTsAeV4I%2fOhQdmY9FfPOZT1vRqUGtNSXer25SaPIIA%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
          <div className="member-info">
            <h2>Ольга Смирнова</h2>
            <p>Финансовый директор</p>
          </div>
        </div>

        <div className="team-member bg-[#eaeaea3f] dark:bg-[#0e0d12] text-[#434343] dark:text-[#e8f6f4]">
          <div className="photo-placeholders bg-[#eaeaea3f] dark:bg-[#1c1b23] text-[#434343] dark:text-[#e8f6f4]"><img id='avatar-img' src="https://media.licdn.com/dms/image/C4E03AQEsdGWBNoqrVA/profile-displayphoto-shrink_800_800/0/1610310026550?e=2147483647&v=beta&t=UHTf5ETUqe04PjHaqfygzsHGfDe2jH07FwOBOSAuVTo" alt="" /></div>
          <div className="member-info">
            <h2>Виктор Кузнецов</h2>
            <p>Директор по маркетингу</p>
          </div>
        </div>
      </section>
    </div>
      </CustomTabPanel>
    </Box>
         </div>
    </div>
  )
}

export default about