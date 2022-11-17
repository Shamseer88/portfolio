import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"htmlcss",
      title:"HTML CSS"
    },
    {
      id:"javascript",
      title:"Javascript"
    },
    {
      id:"react",
      title:"React"
    },
    {
      id:"wordpress",
      title:"Wordpress"
    },

  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>{
          return <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected} 
          id={item.id}
          />
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2017/11/Blog-Top-Mobile-banking-apps.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
