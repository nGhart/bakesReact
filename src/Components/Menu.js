import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import menuitems from './menuData'
import MenuCategories from './MenuCategories'
import MenuItems from './MenuItems'

const allCats = ["all",...new Set(menuitems.map((item)=> item.category))]
console.log(allCats)

function Menu() {
    const [menuItems, setMenuItems] = useState(menuitems)
    const [categories, setCategories] = useState(allCats)

    const filterMenu = (category) => {
        if(category === "all") {
setMenuItems(menuitems)
return;
        }
        const newMenu = menuitems.filter((item)=>
            item.category === category
        )
        setMenuItems(newMenu)
        }
    return (
        <>
        <div className="title text-center">
            <h1>Menu</h1>
            <div className="text-center filterContainer">
                <MenuCategories filterMenu={filterMenu} categories={categories} />
            </div>
            <Container className="menuItems">
                
                    <MenuItems menuItems={menuItems} />
                
            </Container>
        </div>
        </>
    )
}

export default Menu