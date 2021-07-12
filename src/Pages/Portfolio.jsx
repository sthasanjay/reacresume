import React, { useState } from 'react'
import Title from '../Component/About/Title'
import portfolios from '../Component/Portfolio/AllPortfolios';
import Categories from '../Component/Portfolio/Categories';
import MenuItem from '../Component/Portfolio/MenuItem';

const allCategories = ['All', ...new Set(portfolios.map(item=>item.category))]
const Portfolio = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);
  const filter = (category)=>{
    if(category ==='All'){
      setMenuItems(portfolios)
      return;
    }
    const filteredData = portfolios.filter((item)=>{
      return item.category===category;
    })

    setMenuItems(filteredData)
  }
  
  
  return (
    <div className = "PortfolioPage">
     <div className = "title">
       <Title title = {'Portfolios'} span = {'portfolios'}/>
     </div>
     <div className = "portfolios-data">
       <Categories filter = {filter}  categories = {categories} />
       <MenuItem menuItem = {menuItems}/>
     </div>
      
    </div>
  );
}

export default Portfolio;
