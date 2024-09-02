import React from 'react'
import { useNavigate } from 'react-router-dom'

const product = () => {
    const navigate=useNavigate()
  return (
    <div>
        <div className="flexq23">
            <div onClick={()=>navigate("/one")} className="fleq23"><img src="src/img/soup_pottage_broth_food_bowl_dish_icon_207984.png"/>
            <p id='tq23'>Ⅰ Блюдо</p>
            </div>
            <div onClick={()=>navigate("/two")} className="fleq23"><img src="src/img/fried_rice_ramen_food_asian_food_dish_bowl_icon_207979.png"/>
            <p id='tq23'>Ⅱ Блюдо</p>
            </div>
            <div onClick={()=>navigate("/three")} className="fleq23"><img src="src/img/Drinks-34_icon-icons.com_61966.png"/>
            <p id='tq23'>Алкоголь</p>
            </div>
            <div onClick={()=>navigate("/four")} className="fleq23"><img src="src/img/Drinks-57_icon-icons.com_61942.png"/>
            <p id='tq23'>Напитки</p>
            </div>
            <div onClick={()=>navigate("/five")} className="fleq23"><img src="src/img/salad_cgtyz4cvti6n_128.png"/>
            <p id='tq23'>Салаты</p>
            </div>
        </div>
        <div className="flexq23">
            <div onClick={()=>navigate("/six")} className="fleq23"><img src="src/img/iconfinder-frenchfriessoftdrinktakeawayfastfoodfood-4306474_119914.png"/>
            <p id='tq23'>Фастфуд</p>
            </div>
            <div onClick={()=>navigate("/seven")} className="fleq23"><img src="src/img/slice_cake_birthday_cake_dessert_sweet_icon_207992.png"/>
            <p id='tq23'>Десерты</p>
            </div>
            <div onClick={()=>navigate("/eight")} className="fleq23"><img src="src/img/Pizza_icon-icons.com_68706.png"/>
            <p id='tq23'>Пицца</p>
            </div>
            <div onClick={()=>navigate("/nine")} className="fleq23"><img src="src/img/sauce_bottles_food_ketchup_mustard_icon_207995.png"/>
            <p id='tq23'>Соусы</p>
            </div>
            <div onClick={()=>navigate("/ten")} className="fleq23"><img src="src/img/bread_x73z9i163gxv_128.png"/>
            <p id='tq23'>Выпечка</p>
            </div>
        </div>
    </div>
  )
}

export default product