import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function PreviousSearch()
{
    const searches=['pizza','burger','cookies','juice','briyani','salad','icecream','lasagna','pudding','soup'];
    return(
        <div className="previous-searches section">
            <h2>Previous Search</h2>
            <div className="previous-searches-container">
                {searches.map(search =>(<div className="search-item">
                    {search}
                    </div>))}
            </div>
            <div className="search-box">
                <input type="text" placeholder="search"></input>
<button className="btn">
    <FontAwesomeIcon icon={faSearch} />
</button>
            </div>
          </div>
    )
}