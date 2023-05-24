import './Statistics.css'
import { Stats } from './Stats';




export const Statistics = ({data, title}) => {
   console.log("check", data);
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>) }
            <ul className="stat-list">
                
               {data.map((element)=>(<Stats key={element.id} element={element}/>)
              )} 
  </ul>
</section>
    )
}
